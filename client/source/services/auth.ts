import { ApiAuth } from '../api/auth.js';
import {
  TypeSignInRequest,
  TypeSignUpForm,
  TypeSignUpResponse,
} from '../api/types.js';
import { t } from '../locales/index.js';

export class AuthService {
  api: ApiAuth;

  constructor() {
    this.api = new ApiAuth();
  }

  public signIn(data: TypeSignInRequest) {
    return new Promise((resolve, reject) => {
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
    return new Promise(
      (resolve: (value: TypeSignUpResponse) => any, reject) => {
        this.api.signUp(data).then((res) => {
          if (res.status === 200) {
            resolve(JSON.parse(res.response));
          } else {
            const errorStr = JSON.parse(res.response).reason;
            reject(t[errorStr]);
          }
        });
      },
    );
  }

  public logout() {
    return new Promise((resolve, reject) => {
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
}

export const authService = new AuthService();
