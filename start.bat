@echo off
title GrandStay HotelOS
color 0A
cls

echo.
echo  ╔══════════════════════════════════════════════════╗
echo  ║      GrandStay HotelOS — Modular Monolith       ║
echo  ╠══════════════════════════════════════════════════╣
echo  ║  Backend:   http://localhost:5000               ║
echo  ║  SignalR:   http://localhost:5000/hotelHub      ║
echo  ║  Frontend:  http://localhost:4200               ║
echo  ╚══════════════════════════════════════════════════╝
echo.

set "BACKEND=%~dp0backend\HotelOS"

echo [1/2] Backend (Modular Monolith) ishga tushmoqda...
start "HotelOS Backend :5000" /d "%BACKEND%" cmd /k dotnet run --launch-profile http
timeout /t 4 /nobreak >nul

echo [2/2] Frontend (Angular) ni qo'lda ishga tushiring:
echo.
echo   cd "%~dp0frontend"
echo   ng serve --open
echo.
echo  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo   Backend ishga tushdi!
echo   Endi yangi terminal oching va frontend run qiling:
echo     cd frontend
echo     npm install   (faqat birinchi marta)
echo     ng serve --open
echo  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
pause
