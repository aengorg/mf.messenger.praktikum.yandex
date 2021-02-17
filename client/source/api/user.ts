import { API_HOST, API_USER } from '../constants/index';
import { HTTPTransport } from '../core/Transport/Http/index';

import {
  TypeUserPasswordRequest,
  TypeUserProfileRequest,
  TypeUserLogin,
} from './types';

export class ApiUser {
  private fetch: HTTPTransport;

  constructor() {
    this.fetch = new HTTPTransport(API_HOST);
  }

  public changeProfile(data: TypeUserProfileRequest) {
    return this.fetch.put(`${API_USER}/profile`, { data });
  }

  public changeAvatar(data: FormData) {
    return this.fetch.put(`${API_USER}/profile/avatar`, {
      data,
    });
  }

  public changePassword(data: TypeUserPasswordRequest) {
    return this.fetch.put(`${API_USER}/password`, { data });
  }

  public getUser(id: number) {
    return this.fetch.get(`${API_USER}/password/${id}`);
  }

  public searchUser(data: TypeUserLogin) {
    return this.fetch.post(`${API_USER}/search`, { data });
  }
}
