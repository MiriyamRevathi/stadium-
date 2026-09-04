/**
 * Client System Telemetry, Error Logging & State Persistence Engine
 */

export interface TelemetryEvent {
  id: string;
  category: 'UserAction' | 'Network' | 'StateSync' | 'Performance' | 'Security';
  action: string;
  label?: string;
  value?: number;
  timestamp: string;
  metadata?: Record<string, any>;
}

export class SystemTelemetryLogger {
  private logBuffer: TelemetryEvent[] = [];
  private maxBufferSize = 200;

  public logEvent(
    category: TelemetryEvent['category'],
    action: string,
    label?: string,
    value?: number,
    metadata?: Record<string, any>
  ): TelemetryEvent {
    const event: TelemetryEvent = {
      id: `TEL-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
      metadata
    };

    this.logBuffer.unshift(event);
    if (this.logBuffer.length > this.maxBufferSize) {
      this.logBuffer.pop();
    }

    return event;
  }

  public getEvents(category?: TelemetryEvent['category']): TelemetryEvent[] {
    if (category) {
      return this.logBuffer.filter((e) => e.category === category);
    }
    return [...this.logBuffer];
  }

  public clearBuffer(): void {
    this.logBuffer = [];
  }
}

export const systemTelemetryLogger = new SystemTelemetryLogger();
