type TCallback = (...args: any[]) => void;

export class EventBus<TEvent> {
  listeners: Map<TEvent, TCallback[]>;

  constructor() {
    this.listeners = new Map();
  }

  private isExistEvent(event: TEvent): void {
    if (!this.listeners.has(event)) {
      throw new Error(`Нет события: ${event}`);
    }
  }

  public on(event: TEvent, callback: TCallback): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)?.push(callback);
  }

  public off(event: TEvent, callback: TCallback): void {
    this.isExistEvent(event);

    const filtered = this.listeners
      .get(event)!
      .filter((listener) => listener !== callback);

    this.listeners.set(event, filtered);
  }

  public emit(event: TEvent, ...args: any[]): void {
    this.isExistEvent(event);

    this.listeners.get(event)?.forEach((listener) => {
      listener(...args);
    });
  }
}
