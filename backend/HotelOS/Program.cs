// ============================================================
//  GrandStay HotelOS — Modular Monolith Backend
//  Bitta loyiha, bitta port (:5000), barcha modullar ichida
// ============================================================
using HotelOS.Hubs;
using HotelOS.Modules.Housekeeping.Data;
using HotelOS.Modules.Maintenance.Data;
using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Services;
using HotelOS.Modules.RoomService.Data;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// ── CORS — Angular frontendga ruxsat ─────────────────
// CORS — localhost (dev) + Vercel/Railway (prod)
var allowedOrigins = builder.Configuration["AllowedOrigins"]?.Split(',') 
    ?? new[] { 
        "http://localhost:4200",
        "https://grand-stay-hotel-david-s-projectsdfg.vercel.app",
        "https://grand-stay-hotel-ohrgi01ln-david-s-projectsdfg.vercel.app"
    };

builder.Services.AddCors(opt => opt.AddDefaultPolicy(p =>
    p.WithOrigins(allowedOrigins)
     .AllowAnyHeader()
     .AllowAnyMethod()
     .AllowCredentials()));

// ── Controllers + JSON enum → string ─────────────────
builder.Services.AddControllers()
    .AddJsonOptions(o =>
        o.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));

// ── SignalR ───────────────────────────────────────────
builder.Services.AddSignalR();

// ── EF Core InMemory — har modul o'z DB ──────────────
builder.Services.AddDbContext<ReceptionDb>(o =>
    o.UseInMemoryDatabase("ReceptionDB"));

builder.Services.AddDbContext<HousekeepingDb>(o =>
    o.UseInMemoryDatabase("HousekeepingDB"));

builder.Services.AddDbContext<RoomServiceDb>(o =>
    o.UseInMemoryDatabase("RoomServiceDB"));

builder.Services.AddDbContext<MaintenanceDb>(o =>
    o.UseInMemoryDatabase("MaintenanceDB"));

// ── Reception xizmatlari ──────────────────────────────
// AddScoped → har request yangi instance, lekin static SemaphoreSlim process-wide ishlaydi
builder.Services.AddScoped<RoomAssignmentService>();
builder.Services.AddScoped<BillingService>();
builder.Services.AddHostedService<BookingTimeoutService>();

// ── Middleware ────────────────────────────────────────
var app = builder.Build();

app.UseExceptionHandler(e => e.Run(async ctx =>
{
    ctx.Response.StatusCode  = 500;
    ctx.Response.ContentType = "application/json";
    await ctx.Response.WriteAsync("{\"message\":\"Tizimda xato yuz berdi\"}");
}));

app.UseCors();
app.UseRouting();
app.MapControllers();
app.MapHub<HotelHub>("/hotelHub");

// ── Ma'lumot yuklash (Seeding) ────────────────────────
using (var scope = app.Services.CreateScope())
{
    var sp = scope.ServiceProvider;
    ReceptionSeeder.Seed(sp.GetRequiredService<ReceptionDb>());
    HousekeepingSeeder.Seed(sp.GetRequiredService<HousekeepingDb>());
    MaintenanceSeeder.Seed(sp.GetRequiredService<MaintenanceDb>());
}

Console.WriteLine("╔══════════════════════════════════════════╗");
Console.WriteLine("║  GrandStay HotelOS — Modular Monolith   ║");
Console.WriteLine("╠══════════════════════════════════════════╣");
Console.WriteLine("║  http://localhost:5000                   ║");
Console.WriteLine("║  SignalR: /hotelHub                      ║");
Console.WriteLine("║  API:     /api/...                       ║");
Console.WriteLine("╚══════════════════════════════════════════╝");

// Railway PORT env variable
var port = Environment.GetEnvironmentVariable("PORT") ?? "5050";
app.Run($"http://0.0.0.0:{port}");
