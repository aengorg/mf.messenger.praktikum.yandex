import { API_HOST, API_CHAT } from '../constants/index';
import { HTTPTransport } from '../core/Transport/index';

import { TypeChatRequest, TypeChatUsersRequest } from './types';

export class ApiChat {
  private fetch: HTTPTransport;

  constructor() {
    this.fetch = new HTTPTransport(API_HOST);
  }

  public addChat(data: TypeChatRequest) {
    return this.fetch.post(`${API_CHAT}`, { data });
  }

  public getChatUsers(idChat: number) {
    return this.fetch.get(`${API_CHAT}/${idChat}/users`);
  }

  public addUserChat(data: TypeChatUsersRequest) {
    return this.fetch.put(`${API_CHAT}/users`, { data });
  }

  public deleteUserChat(data: TypeChatUsersRequest) {
    return this.fetch.delete(`${API_CHAT}/users`, { data });
  }

  public getChats(offset: number = 0, limit: number = 99, title?: string) {
    return this.fetch.get(`${API_CHAT}`, {
      getParam: {
        offset: offset,
        limit: limit,
        title: title,
      },
    });
  }

  public getToken(idChat: number) {
    return this.fetch.post(`${API_CHAT}/token/${idChat}`);
  }
}
