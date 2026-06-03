using HotelOS.Modules.Reception.Data;
using HotelOS.Modules.Reception.Models;
using HotelOS.Shared;
using Microsoft.EntityFrameworkCore;

namespace HotelOS.Modules.Reception.Services;

// ── TS-06: Race condition oldini olish (SemaphoreSlim) ─
// Bir vaqtda bir nechta check-in kelganda xona bir martadan beriladi
public class RoomAssignmentService
{
    // Static — barcha request'lar uchun bitta semaphore
    private static readonly SemaphoreSlim _sem = new(1, 1);
    private readonly ReceptionDb _db;

    public RoomAssignmentService(ReceptionDb db) => _db = db;

    // TS-06 Algoritmi: Eng mos bo'sh xonani topib tayinlash
    public async Task<Room?> AssignRoomAsync(
        RoomStyle style,
        int? floorPref = null,
        ProximityPreference proximity = ProximityPreference.None,
        string? specificRoom = null,
        bool requireClean = true)
    {
        await _sem.WaitAsync();
        try
        {
            if (!string.IsNullOrWhiteSpace(specificRoom))
            {
                var exactRoom = await _db.Rooms
                    .FirstOrDefaultAsync(r => r.RoomNumber == specificRoom 
                                           && r.Status == RoomStatus.Available 
                                           && (!requireClean || r.CleaningStatus == CleaningStatus.Clean));
                if (exactRoom != null)
                {
                    exactRoom.Status = RoomStatus.Occupied;
                    return exactRoom;
                }
                return null;
            }

            // 1. Asosiy qidiruv: tur + qavat
            var query = _db.Rooms
                .Where(r => r.Status         == RoomStatus.Available
                         && (!requireClean || r.CleaningStatus == CleaningStatus.Clean)
                         && r.Style          == style);

            if (floorPref.HasValue)
                query = query.Where(r => r.Floor == floorPref.Value);

            // Yaqinlik bo'yicha saralash
            var room = proximity switch
            {
                ProximityPreference.NearElevator => await query.OrderBy(r => r.RoomNumber).FirstOrDefaultAsync(),
                ProximityPreference.Quiet        => await query.OrderByDescending(r => r.RoomNumber).FirstOrDefaultAsync(),
                _                               => await query.OrderBy(r => r.RoomNumber).FirstOrDefaultAsync()
            };

            // 2. Qavat sharti muhimroq: Agar berilgan qavatda so'ralgan stildagi xona bo'lmasa,
            // shu qavatdagi boshqa istalgan bo'sh xonani berish (Style ni e'tiborsiz qoldirish).
            if (room == null && floorPref.HasValue)
            {
                room = await _db.Rooms
                    .Where(r => r.Status         == RoomStatus.Available
                             && (!requireClean || r.CleaningStatus == CleaningStatus.Clean)
                             && r.Floor          == floorPref.Value)
                    .OrderBy(r => r.RoomNumber)
                    .FirstOrDefaultAsync();
            }

            // 3. Tur bo'yicha ham topilmasa — istalgan bo'sh xona
            if (room == null)
            {
                room = await _db.Rooms
                    .Where(r => r.Status         == RoomStatus.Available
                             && (!requireClean || r.CleaningStatus == CleaningStatus.Clean))
                    .OrderBy(r => r.NightlyRate)
                    .FirstOrDefaultAsync();
            }

            if (room != null)
                room.Status = RoomStatus.Occupied;

            return room;
        }
        finally
        {
            _sem.Release();
        }
    }
}
