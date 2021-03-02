import { ApiMessages } from '../api/messages';
import { ApiChat } from '../api/chat';

import { t } from '../locales/index';

export class MessageService {
  apiChat: ApiChat;
  apiMessages: ApiMessages;

  constructor() {
    this.apiChat = new ApiChat();
    this.apiMessages = new ApiMessages();
  }

  public connect(
    userId: number,
    chatId: number,
    callbacks: {
      message: (data: any) => void;
      connect: (user?: string) => void;
      error: (error?: string) => void;
      open: () => void;
    },
  ) {
    return new Promise((resolve, reject) => {
      this.apiChat
        .getToken(chatId)
        .then((res) => {
          const data: { token: string } = JSON.parse(res.response);
          const chanel = `/${userId}/${chatId}/${data.token}`;

          this.apiMessages.initEventMessage((e: any) => {
            let { data } = e;
            if (data.type !== 'error') {
              data = JSON.parse(data);
              switch (data.type) {
                case 'user connected':
                  callbacks.connect(data.content);
                  break;

                default:
                  callbacks.message(data);
                  break;
              }
            } else {
              callbacks.error(t['errorWS']);
            }
          });

          this.apiMessages.initEventOpen(() => {
            callbacks.open();
            resolve(data);
          });

          this.apiMessages.connect(chanel);
        })
        .catch((error) => {
          console.log(error);
          reject(t[error]);
        });
    });
  }

  public sendMessage(message: string) {
    this.apiMessages.send({
      content: message,
      type: 'message',
    });
  }

  public getHistory(count: number = 0) {
    return this.apiMessages.getHistory(count);
  }

  public close() {
    this.apiMessages.close();
  }
}

export const messageService = new MessageService();
