import { API_HOST, API_AUTH } from '../constants/index';
import { HTTPTransport } from '../core/Transport/index';

import { TypeSignUpRequest, TypeSignInRequest } from './types';

export class ApiAuth {
  private fetch: HTTPTransport;

  constructor() {
    this.fetch = new HTTPTransport(API_HOST);
  }

  public signIn(data: TypeSignInRequest) {
    return this.fetch.post(`${API_AUTH}/signin`, { data });
  }

  public signUp(data: TypeSignUpRequest) {
    return this.fetch.post(`${API_AUTH}/signup`, { data });
  }

  public logout() {
    return this.fetch.post(`${API_AUTH}/logout`);
  }

  public getUser() {
    return this.fetch.get(`${API_AUTH}/user`);
  }
}
