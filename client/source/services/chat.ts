import { ApiChat } from '../api/chat';
import {
  TypeChatRequest,
  TypeChatsResponse,
  TypeChatResponse,
  TypeGoodResponse,
  TypeChatUsersRequest,
  TypeChatUsersResponse,
} from '../api/types';
import { t } from '../locales/index';
import { urlAvatar } from '../utils/urlAvatar/index';
export class ChatService {
  api: ApiChat;

  constructor() {
    this.api = new ApiChat();
  }

  public addChat(data: TypeChatRequest) {
    return new Promise<TypeChatResponse>((resolve, reject) => {
      this.api
        .addChat(data)
        .then(() => {
          resolve({ message: t['ok'] });
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public addUsersChat(data: TypeChatUsersRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .addUserChat(data)
        .then(() => {
          resolve({ message: t['successAddUserChat'] });
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public deleteUserChat(data: TypeChatUsersRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .deleteUserChat(data)
        .then(() => {
          resolve({ message: t['successDeleteUserChat'] });
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public getUsersChat(idChat: number) {
    return new Promise<TypeChatUsersResponse>((resolve, reject) => {
      this.api
        .getChatUsers(idChat)
        .then((res) => {
          let users: TypeChatUsersResponse = JSON.parse(res.response);
          resolve(users);
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public getChats() {
    return new Promise<TypeChatsResponse>((resolve, reject) => {
      this.api
        .getChats()
        .then((res) => {
          let chats: TypeChatsResponse = JSON.parse(res.response);
          chats = chats.map((chat) => {
            chat.avatar = urlAvatar(chat.avatar);
            return chat;
          });
          resolve(chats);
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }
}

export const chatService = new ChatService();
