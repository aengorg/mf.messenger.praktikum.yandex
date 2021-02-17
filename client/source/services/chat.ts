import { ApiChat } from '../api/chat.js';
import {
  TypeChatRequest,
  TypeChatsResponse,
  TypeChatResponse,
  TypeGoodResponse,
  TypeChatUsersRequest,
  TypeChatUsersResponse,
} from '../api/types.js';
import { t } from '../locales/index.js';
import { urlAvatar } from '../utils/urlAvatar/index.js';
export class ChatService {
  api: ApiChat;

  constructor() {
    this.api = new ApiChat();
  }

  public addChat(data: TypeChatRequest) {
    return new Promise<TypeChatResponse>((resolve, reject) => {
      this.api.addChat(data).then((res) => {
        if (res.status === 200) {
          resolve({ message: t['ok'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public addUsersChat(data: TypeChatUsersRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.addUserChat(data).then((res) => {
        if (res.status === 200) {
          resolve({ message: t['successAddUserChat'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public deleteUserChat(data: TypeChatUsersRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.deleteUserChat(data).then((res) => {
        if (res.status === 200) {
          resolve({ message: t['successDeleteUserChat'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public getUsersChat(idChat: number) {
    return new Promise<TypeChatUsersResponse>((resolve, reject) => {
      this.api.getChatUsers(idChat).then((res) => {
        if (res.status === 200) {
          let users: TypeChatUsersResponse = JSON.parse(res.response);
          resolve(users);
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public getChats() {
    return new Promise<TypeChatsResponse>((resolve, reject) => {
      this.api.getChats().then((res) => {
        if (res.status === 200) {
          let chats: TypeChatsResponse = JSON.parse(res.response);
          chats = chats.map((chat) => {
            chat.avatar = urlAvatar(chat.avatar);
            return chat;
          });
          resolve(chats);
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }
}

export const chatService = new ChatService();
