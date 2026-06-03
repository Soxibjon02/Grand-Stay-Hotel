# 🏨 GrandStay HotelOS — Microservices Management System

> **3-Vazifa**: ASP.NET Core 9 MVC · Microservices · Message Broker · SignalR WebSocket

---

## 🗂️ Loyiha Tuzilishi

```
HOTEL BRON SYSTEM/
├── start.bat                    ← Barcha 6 xizmatni ishga tushiradi
└── HotelOS/
    └── src/
        ├── HotelOS.Shared/      ← Umumiy Enum, Event, Payload (Class Library)
        ├── HotelOS.Broker/      ← Message Broker: Pub/Sub HTTP Event Bus  :5050
        ├── HotelOS.Reception/   ← Bron, Check-in, Check-out, Hisob-faktura :5001
        ├── HotelOS.Housekeeping/← Xona tozalash, Housekeeper boshqaruvi   :5002
        ├── HotelOS.RoomService/ ← Xona xizmati buyurtmalari (FIFO Queue)   :5003
        ├── HotelOS.Maintenance/ ← Texnik muammolar (Priority Queue)        :5004
        └── HotelOS.Dashboard/   ← Real-time SignalR boshqaruv paneli       :5000
```

---

## 🚀 Ishga Tushirish

### Usul 1: Bir Bosishda (Tavsiya)

```bat
start.bat
```

Skript avtomatik ravishda barcha 6 xizmatni to'g'ri tartibda ishga tushiradi va Dashboard'ni ochadi.

### Usul 2: Qo'lda

```powershell
# AVVAL — Broker (boshqalardan oldin ishga tushishi shart!)
cd HotelOS/src/HotelOS.Broker
dotnet run --launch-profile http

# Keyin — Reception
cd HotelOS/src/HotelOS.Reception
dotnet run --launch-profile http

# Housekeeping
cd HotelOS/src/HotelOS.Housekeeping
dotnet run --launch-profile http

# Room Service
cd HotelOS/src/HotelOS.RoomService
dotnet run --launch-profile http

# Maintenance
cd HotelOS/src/HotelOS.Maintenance
dotnet run --launch-profile http

# Dashboard (oxirida)
cd HotelOS/src/HotelOS.Dashboard
dotnet run --launch-profile http
```

### Faqat Build Tekshirish

```powershell
cd HotelOS
dotnet build
```

---

## 🌐 Xizmatlar va Portlar

| Xizmat           | Port  | URL                   | Tavsif                       |
| ---------------- | ----- | --------------------- | ---------------------------- |
| **Dashboard**    | :5000 | http://localhost:5000 | Real-time SignalR paneli     |
| **Reception**    | :5001 | http://localhost:5001 | Bron, Check-in, Check-out    |
| **Housekeeping** | :5002 | http://localhost:5002 | Xona tozalash boshqaruvi     |
| **Room Service** | :5003 | http://localhost:5003 | Xona xizmati buyurtmalari    |
| **Maintenance**  | :5004 | http://localhost:5004 | Texnik muammolar (ticket)    |
| **Broker**       | :5050 | http://localhost:5050 | Message Broker monitoring UI |

---

## 🧪 Test Stsenariylari (8 ta)

### TS-01: Standart Check-in

```
Reception → Yangi Bron (101, Standard, 2 kun)
→ Check-in bosing
→ Dashboard'da xona 101 qizil (Occupied) bo'ladi
```

### TS-02: Check-out + Avtomatik Tozalash

```
Reception → Check-out (101)
→ RoomVacated eventi Broker orqali Housekeeping'ga boradi
→ Housekeeping'da avtomatik tozalash vazifasi yaratiladi
→ Tozalash tugagach Reception'ga xabar keladi (101 Available)
```

### TS-03: Tozalash Jarayoni

```
Housekeeping → Tozalash ro'yxati
→ "Boshlash" (status: InProgress)
→ "Tugallandi" (status: Done) → CleaningCompleted event
→ Dashboard'da xona yashil (Available) bo'ladi
```

### TS-04: Xona Xizmati (FIFO Queue)

```
Room Service → Yangi Buyurtma (xona 201, taomlari)
→ Buyurtma FIFO navbatiga qo'shiladi
→ Status: Received → Preparing → Delivering → Delivered
→ Dashboard'da faol buyurtmalar soni o'zgaradi
```

### TS-05: Critical Muammo (Priority Queue)

```
Maintenance → Yangi Muammo (Critical, xona 103)
→ PriorityQueue boshiga qo'shiladi (Critical=4)
→ Eng kam band texnikka tayinlanadi
→ Dashboard'da 🔴 Critical soni oshadi
```

### TS-06: Paralel Bron (Race Condition)

```
(API orqali) 2 ta so'rov bir vaqtda xona 101 uchun
→ SemaphoreSlim tufayli faqat biri muvaffaqiyatli
→ Ikkinchisi "Xona band" xatosini oladi
```

### TS-07: Noto'g'ri Xona Raqami (Validation)

```
Booking/Create → Xona raqami: "ABC" (raqam emas)
→ Server regex validatsiya: ^\d{3}$
→ "Noto'g'ri xona raqami" xatosi
```

### TS-08: Bron Bekor Qilish (Refund)

```
Reception → Bron yaratish → 24 soatdan ko'proq qolgan
→ Bekor qilish: 50% qaytariladi (R5 qoidasi)
→ 24 soatdan kam qolgan → 0% qaytariladi
```

---

## 🏗️ Arxitektura

```
┌─────────────────────────────────────────────────────────────┐
│                    DASHBOARD :5000                          │
│              (SignalR WebSocket Real-Time)                  │
└────────────────────────┬────────────────────────────────────┘
                         │ WebSocket (SignalR)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    BROKER :5050                             │
│           Dictionary<string, List<string>>                  │
│              Publish → Subscribe → Dispatch                 │
└──┬──────────────┬──────────────┬──────────────┬────────────┘
   │ HTTP Event   │              │              │
   ▼              ▼              ▼              ▼
:5001          :5002          :5003          :5004
Reception   Housekeeping  Room Service   Maintenance
   │              │              │              │
   │ RoomVacated  │ CleanDone    │ OrderRcvd    │ TicketRpt
   └──────────────┴──────────────┴──────────────┘
            Barcha eventi Broker orqali o'tadi
```

---

## 🔑 Asosiy Algoritmlar

### 1.1 — Xona Tayinlash

```
Filter: Style == type && Status == Available && Cleaning == Clean
Sort: OrderBy(LastCleanedAt) ← rotatsiya uchun (eng ko'p turgan birinchi)
Floor: Agar preference bo'lsa — o'sha qavatni tanlash
Proximity: Column 1 = lift yaqin, Column 5 = zina yaqin
Lock: SemaphoreSlim(1,1) ← TS-06 race condition oldini olish
```

### 1.2a — Hisob-Faktura

```
actualNights = (checkOut - checkIn).Days (min 1)
roomCharge   = actualNights × bookingPrice
lateCheckout: 14:00-17:00 → +50%, >17:00 → +100%
earlyCheckout: chegirma yo'q (ceza yo'q)
discount: HOTEL10=10%, VIP20=20%, STAFF50=50%
tax: 12%
```

### 1.2b — Texnik Muammo Navbati

```
PriorityQueue<int,int>(descending) ← Critical(4) birinchi
Teng ustuvorlik → FIFO (ReportedAt bo'yicha)
Tayinlash: Min(ActiveTicketsCount) texnikni topish
```

---

## 🛡️ Xavfsizlik

| Tahdid              | Himoya                                               |
| ------------------- | ---------------------------------------------------- |
| SQL Injection       | EF Core parametrized queries (InMemory DB)           |
| XSS                 | Razor HTML encode (@@Html qo'shimcha tasdiq yo'q)    |
| CSRF                | `[ValidateAntiForgeryToken]` barcha POST so'rovlarda |
| Race Condition      | `SemaphoreSlim(1,1)` xona tayinlashda                |
| Stack Trace leakage | Global `UseExceptionHandler` — faqat JSON message    |
| Input Validation    | Regex `^\d{3}$` barcha xona raqami kiritishlarida    |

---

## 🖥️ Texnologiya Steki

| Komponent       | Texnologiya                      | Versiya  |
| --------------- | -------------------------------- | -------- |
| Backend         | ASP.NET Core MVC                 | .NET 9   |
| Real-time       | SignalR (WebSocket)              | Built-in |
| Database        | Entity Framework Core InMemory   | 9.0      |
| Message Broker  | Custom HTTP Event Bus            | —        |
| Frontend        | Bootstrap 5 + Razor Views        | 5.3.0    |
| Data Structures | PriorityQueue, Queue, Dictionary | .NET 9   |
| Lock            | SemaphoreSlim, lock()            | .NET 9   |

---

## 📊 Ma'lumotlar Tuzilmalari

```csharp
// 1. Xona inventari — Reception
List<Room> rooms = new();  // O(1) add, O(n) filter

// 2. Texnik muammo navbati — Maintenance
PriorityQueue<int,int> _priorityQueue = new(Comparer<int>.Create((a,b) => b.CompareTo(a)));
// Critical(4) → High(3) → Normal(2) → Low(1)

// 3. Xona xizmati navbati — RoomService
static Queue<int> _orderQueue = new();  // FIFO

// 4. Broker obunalar — Broker
Dictionary<string, List<string>> _subscriptions = new();
// Key: eventName, Value: callbackUrl ro'yxati
```

---

_GrandStay HotelOS — Hojiakbar Uralov · 2026_
