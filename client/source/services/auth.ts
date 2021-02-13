import { ApiAuth } from '../api/auth.js';
import {
  TypeGoodResponse,
  TypeSignInRequest,
  TypeSignUpForm,
  TypeSignUpResponse,
  TypeUserResponse,
} from '../api/types.js';
import { t } from '../locales/index.js';

export class AuthService {
  api: ApiAuth;

  constructor() {
    this.api = new ApiAuth();
  }

  public signIn(data: TypeSignInRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.signIn(data).then((res) => {
        if (res.status === 200) {
          resolve({ message: t['ok'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public signUp(data: TypeSignUpForm) {
    return new Promise<TypeSignUpResponse>((resolve, reject) => {
      this.api.signUp(data).then((res) => {
        if (res.status === 200) {
          resolve(JSON.parse(res.response));
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public logout() {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.logout().then((res) => {
        if (res.status === 200) {
          resolve({ message: t['ok'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public getUser() {
    return new Promise<TypeUserResponse>((resolve, reject) => {
      this.api.getUser().then((res) => {
        if (res.status === 200) {
          const userData: TypeUserResponse = JSON.parse(res.response);
          resolve(userData);
        } else if (res.status === 401) {
          reject(t['ErrorUnauthorized']);
        } else {
          const errorStr = JSON.parse(res.response).reason;

          reject(t[errorStr]);
        }
      });
    });
  }
}

export const authService = new AuthService();
