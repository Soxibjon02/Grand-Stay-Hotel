// ============================================================
// GrandStay HotelOS — SignalR Service
// Real-time WebSocket ulanishi (Dashboard Hub)
// ============================================================
import { Injectable, signal } from '@angular/core';
import * as signalR from '@microsoft/signalr';

export type ConnectionState = 'disconnected' | 'connecting' | 'connected';

@Injectable({ providedIn: 'root' })
export class SignalRService {
  private hub: signalR.HubConnection;

  connectionState = signal<ConnectionState>('disconnected');
  latestEvent     = signal<any>(null);
  latestRoom      = signal<any>(null);
  latestStats     = signal<any>(null);

  constructor() {
    this.hub = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5050/hotelHub', {
        skipNegotiation: false,
        transport: signalR.HttpTransportType.WebSockets
      })
      .withAutomaticReconnect([1000, 2000, 5000, 10000])
      .configureLogging(signalR.LogLevel.Warning)
      .build();

    this.hub.onreconnecting(() => this.connectionState.set('connecting'));
    this.hub.onreconnected(()  => this.connectionState.set('connected'));
    this.hub.onclose(()        => this.connectionState.set('disconnected'));

    this.hub.on('NewEvent',          ev => this.latestEvent.set(ev));
    this.hub.on('RoomStatusChanged', d  => this.latestRoom.set(d));
    this.hub.on('StatsUpdated',      s  => this.latestStats.set(s));
  }

  async connect(): Promise<void> {
    if (this.hub.state === signalR.HubConnectionState.Connected) return;
    this.connectionState.set('connecting');
    try {
      await this.hub.start();
      this.connectionState.set('connected');
      console.log('✅ SignalR ulandi');
    } catch (e) {
      this.connectionState.set('disconnected');
      console.warn('SignalR ulanmadi, qayta uriniladi...', e);
      setTimeout(() => this.connect(), 5000);
    }
  }

  disconnect() { this.hub.stop(); }
}
