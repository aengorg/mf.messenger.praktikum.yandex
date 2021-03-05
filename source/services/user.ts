import { ApiUser } from '../api/user';
import {
  TypeGoodResponse,
  TypeUserPasswordRequest,
  TypeUserPasswordResponse,
  TypeUserProfileRequest,
  TypeUserResponse,
  TypeUserLogin,
} from '../api/types';
import { t } from '../locales/index';

export class UserService {
  api: ApiUser;

  constructor() {
    this.api = new ApiUser();
  }

  public changeProfile(data: TypeUserProfileRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .changeProfile(data)
        .then(() => {
          resolve({ message: t.ok });
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }

  public changePassword(data: TypeUserPasswordRequest) {
    return new Promise<TypeUserPasswordResponse>((resolve, reject) => {
      this.api
        .changePassword(data)
        .then(() => {
          resolve({ message: t.ok });
        })
        .catch(() => {
          reject(t.errorPasswordIsIncorrect);
        });
    });
  }

  public changeAvatar(data: FormData) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api
        .changeAvatar(data)
        .then(() => {
          resolve({ message: t.ok });
        })
        .catch(() => {
          reject(t.errorUploadAvatar);
        });
    });
  }

  public searchUser(data: TypeUserLogin) {
    return new Promise<TypeUserResponse[]>((resolve, reject) => {
      this.api
        .searchUser(data)
        .then((res) => {
          const data: TypeUserResponse[] = JSON.parse(res.response);
          if (!data.length) reject(t.userNotFound);
          resolve(data);
        })
        .catch((error) => {
          reject(t[error]);
        });
    });
  }
}

export const userService = new UserService();
