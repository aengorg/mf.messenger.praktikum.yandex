import { API_HOST, API_CHAT } from '../constants/index.js';
import { HTTPTransport } from '../core/Transport/Http/index.js';

import { TypeChatRequest } from './types.js';

export class ApiChat {
  private fetch: HTTPTransport;

  constructor() {
    this.fetch = new HTTPTransport(API_HOST);
  }

  public addChat(data: TypeChatRequest) {
    return this.fetch.post(`${API_CHAT}`, { data });
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
}
