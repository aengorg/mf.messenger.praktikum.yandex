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

  public connect(userId: number, chatId: number) {
    return new Promise((resolve, reject) => {
      this.apiChat
        .getToken(chatId)
        .then((res) => {
          const data: { token: string } = JSON.parse(res.response);
          const chanel = `/${userId}/${chatId}/${data.token}`;

          this.apiMessages.initEventMessage((e: any) => {
            const { data } = e;
            if (data.type === 'error') {
              console.log('Ошибка в ответе');
            } else {
              console.log(data);
            }
          });

          this.apiMessages.initEventOpen(() => {
            console.log('Соединение открыто');
          });

          this.apiMessages.connect(chanel);

          resolve(data);
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

  public close() {
    this.apiMessages.close();
  }
}

export const messageService = new MessageService();
