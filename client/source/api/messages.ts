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

  public connect(chanel: string): void {
    this.ws.open(chanel);
    if (this.ws.socket !== null) {
      this.ws.socket.addEventListener('open', this.openHandler);
      this.ws.socket.addEventListener('message', this.messageHandler);
    }
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

  public initEventOpen(openHandler: (e?: Event) => void) {
    this.openHandler = openHandler;
  }

  public initEventMessage(messageHandler: (e?: MessageEvent) => void) {
    this.messageHandler = messageHandler;
  }
}

// socket.addEventListener('close', event => {
//   if (event.wasClean) {
//       console.log('Соединение закрыто чисто');
//   } else {
//       console.log('Обрыв соединения');
//   }

//   console.log(`Код: ${event.code} | Причина: ${event.reason}`);
// });

// socket.addEventListener('error', event => {
//   console.log('Ошибка', event.message);
// });
