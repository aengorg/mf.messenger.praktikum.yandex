import { API_HOST, API_AUTH } from '../constants/index.js';
import { HTTPTransport } from '../core/Transport/Http/index.js';

import { TypeSignUpRequest, TypeSignInRequest } from './types.js';

const headers = {
  'Content-type': 'application/json',
};

export class ApiAuth {
  private fetch: HTTPTransport;

  constructor() {
    this.fetch = new HTTPTransport(API_HOST);
  }

  public signIn(data: TypeSignInRequest) {
    return this.fetch.post(`${API_AUTH}/signin`, { data, headers });
  }

  public signUp(data: TypeSignUpRequest) {
    return this.fetch.post(`${API_AUTH}/signup`, { data, headers });
  }

  public logout() {
    return this.fetch.post(`${API_AUTH}/logout`);
  }

  public getUser() {
    return this.fetch.get(`${API_AUTH}/user`);
  }
}
