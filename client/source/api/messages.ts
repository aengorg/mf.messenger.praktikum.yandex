import { API_MESSAGES } from '../constants/index';
import { WSTransport } from '../core/Transport/index';

export class ApiMessages {
  private ws: WSTransport;
  private openHandler: (e?: Event) => void;
  private messageHandler: (e?: MessageEvent) => void;

  constructor() {
    this.ws = new WSTransport(API_MESSAGES);
    this.openHandler = () => {};
    this.messageHandler = () => {};
  }

  public connect(chanel: string) {
    return new Promise((res) => {
      this.ws.open(chanel);
      if (this.ws.socket !== null) {
        this.ws.socket.addEventListener('open', this.openHandler);
        this.ws.socket.addEventListener('message', this.messageHandler);
        this.ws.socket.addEventListener('close', this.closeHandler);
        this.ws.socket.addEventListener('error', this.errorHandler);
      }
      res(chanel);
    });
  }

  public close(): void {
    if (this.ws.socket !== null) {
      this.ws.socket.close();
    }
  }

  public send(message: { content: string; type: string }): void {
    if (this.ws.socket !== null) {
      this.ws.socket.send(JSON.stringify(message));
    }
  }

  public getHistory(offset: number = 0): void {
    if (this.ws.socket !== null) {
      this.ws.socket.send(
        JSON.stringify({ content: String(offset), type: 'get old' }),
      );
    }
  }

  public initEventOpen(openHandler: (e?: Event) => void) {
    this.openHandler = openHandler;
  }

  public initEventMessage(messageHandler: (e?: MessageEvent) => void) {
    this.messageHandler = messageHandler;
  }

  public closeHandler(e: CloseEvent) {
    if (e.wasClean) console.log('Соединение закрыто чисто');
    else console.log('Обрыв соединения');
  }

  public errorHandler(e: Event) {
    console.error('Ошибка', e);
  }
}
