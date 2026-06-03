using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ReceptionDb _db;

    public AuthController(ReceptionDb db)
    {
        _db = db;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterRequest req)
    {
        if (string.IsNullOrWhiteSpace(req.Email) || string.IsNullOrWhiteSpace(req.Password))
            return BadRequest(new { message = "Email va parol majburiy" });

        var exists = await _db.Guests.AnyAsync(g => g.Email == req.Email);
        if (exists) return BadRequest(new { message = "Bu email allaqachon ro'yxatdan o'tgan" });

        var guest = new Guest
        {
            Name         = req.Name,
            Email        = req.Email,
            PhoneNumber  = req.PhoneNumber ?? "",
            PasswordHash = req.Password, // Simple plain text for prototype, in production use BCrypt!
            Role         = "User"
        };

        _db.Guests.Add(guest);
        await _db.SaveChangesAsync();

        return Ok(new { message = "Ro'yxatdan o'tish muvaffaqiyatli!", guestId = guest.Id, user = guest });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest req)
    {
        var guest = await _db.Guests.FirstOrDefaultAsync(g => g.Email == req.Email && g.PasswordHash == req.Password);
        
        if (guest == null) return Unauthorized(new { message = "Email yoki parol noto'g'ri" });

        // simple dummy token (just using their ID for this prototype)
        return Ok(new { message = "Tizimga kirdingiz", token = guest.Id.ToString(), user = guest });
    }
}

public class RegisterRequest
{
    public string Name        { get; set; } = string.Empty;
    public string Email       { get; set; } = string.Empty;
    public string Password    { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }
}

public class LoginRequest
{
    public string Email    { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
}
