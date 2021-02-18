import { ApiAuth } from '../api/auth';
import {
  TypeGoodResponse,
  TypeSignInRequest,
  TypeSignUpForm,
  TypeSignUpResponse,
  TypeUserResponse,
} from '../api/types';
import { t } from '../locales/index';
import { LS } from '../constants/index';
import { urlAvatar } from '../utils/urlAvatar/index';

export class AuthService {
  api: ApiAuth;

  constructor() {
    this.api = new ApiAuth();
  }

  public signIn(data: TypeSignInRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .signIn(data)
        .then(() => {
          localStorage.setItem(`${LS}-auth`, 'true');
          resolve({ message: t['ok'] });
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public signUp(data: TypeSignUpForm) {
    return new Promise<TypeSignUpResponse>((resolve, reject) => {
      this.api
        .signUp(data)
        .then((res) => {
          localStorage.setItem(`${LS}-auth`, 'true');
          resolve(JSON.parse(res.response));
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public logout() {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .logout()
        .then(() => {
          resolve({ message: t['ok'] });
        })
        .catch((error) => {
          reject(t[error]);
        })
        .finally(() => {
          localStorage.removeItem(`${LS}-auth`);
        });
    });
  }

  public getUser() {
    return new Promise<TypeUserResponse>((resolve, reject) => {
      this.api
        .getUser()
        .then((res) => {
          const user: TypeUserResponse = JSON.parse(res.response);
          user.avatar = urlAvatar(user.avatar);
          resolve(user);
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  isAuth(): boolean {
    return Boolean(localStorage.getItem(`${LS}-auth`));
  }
}

export const authService = new AuthService();
