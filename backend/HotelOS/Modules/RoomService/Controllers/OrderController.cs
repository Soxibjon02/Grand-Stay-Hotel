using HotelOS.Hubs;
using HotelOS.Modules.RoomService.Data;
using HotelOS.Modules.RoomService.Models;
using HotelOS.Shared;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.RoomService.Controllers;

[ApiController]
public class OrderController : ControllerBase
{
    // TS-04: FIFO Queue — buyurtmalar navbati
    private static readonly Queue<int> _queue = new();

    private readonly RoomServiceDb         _db;
    private readonly IHubContext<HotelHub> _hub;

    public OrderController(RoomServiceDb db, IHubContext<HotelHub> hub)
    {
        _db  = db;
        _hub = hub;
    }

    // GET /api/orders
    [HttpGet("/api/orders")]
    public async Task<IActionResult> GetAll()
        => Ok(await _db.Orders.OrderByDescending(o => o.CreatedAt).ToListAsync());

    // POST /api/orders — yangi buyurtma
    [HttpPost("/api/orders")]
    public async Task<IActionResult> Create([FromBody] OrderRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.RoomNumber) ||
            !System.Text.RegularExpressions.Regex.IsMatch(req.RoomNumber, @"^\d{3}$"))
            return BadRequest(new { message = "Noto'g'ri xona raqami (3 raqam)" });

        if (string.IsNullOrWhiteSpace(req.Items))
            return BadRequest(new { message = "Buyurtma tarkibi majburiy" });

        var order = new ServiceOrder
        {
            RoomNumber  = req.RoomNumber,
            GuestName   = req.GuestName ?? "Mehmon",
            Items       = req.Items,
            TotalAmount = req.TotalAmount,
            Priority    = req.Priority ?? "Oddiy",
            Status      = OrderStatus.Received
        };
        _db.Orders.Add(order);
        await _db.SaveChangesAsync();

        // FIFO Queue ga qo'shish
        _queue.Enqueue(order.Id);

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "OrderReceived",
            message = $"Buyurtma — Xona {order.RoomNumber}: {order.Items}",
            room    = order.RoomNumber,
            time    = DateTime.UtcNow
        });

        return Ok(new { orderId = order.Id, status = "Received", message = "Buyurtma qabul qilindi" });
    }

    // PUT /api/orders/{id}/next — holat avans
    // Received → Preparing → Delivering → Delivered
    [HttpPut("/api/orders/{id}/next")]
    public async Task<IActionResult> NextStatus(int id)
    {
        var order = await _db.Orders.FindAsync(id);
        if (order == null) return NotFound(new { message = "Buyurtma topilmadi" });

        var next = order.Status switch
        {
            OrderStatus.Received   => OrderStatus.Preparing,
            OrderStatus.Preparing  => OrderStatus.Delivering,
            OrderStatus.Delivering => OrderStatus.Delivered,
            _                      => order.Status
        };

        order.Status    = next;
        order.UpdatedAt = DateTime.UtcNow;
        await _db.SaveChangesAsync();

        await _hub.Clients.All.SendAsync("NewEvent", new {
            type    = "OrderUpdated",
            message = $"Buyurtma {id} — {next}",
            room    = order.RoomNumber,
            time    = DateTime.UtcNow
        });

        return Ok(new { orderId = id, status = next.ToString(), message = $"Holat: {next}" });
    }
}

public class OrderRequest
{
    public string  RoomNumber  { get; set; } = string.Empty;
    public string? GuestName   { get; set; }
    public string  Items       { get; set; } = string.Empty;
    public decimal TotalAmount { get; set; }
    public string? Priority    { get; set; }
}
