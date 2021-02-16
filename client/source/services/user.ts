import { ApiUser } from '../api/user.js';
import {
  TypeGoodResponse,
  TypeUserPasswordRequest,
  TypeUserPasswordResponse,
  TypeUserProfileRequest,
  TypeUserResponse,
  TypeUserLogin,
} from '../api/types.js';
import { t } from '../locales/index.js';

export class UserService {
  api: ApiUser;

  constructor() {
    this.api = new ApiUser();
  }

  public changeProfile(data: TypeUserProfileRequest) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.changeProfile(data).then((res) => {
        if (res.status === 200) {
          // когда пригодится использовать приходящие данные
          // const data: TypeUserProfileResponse = JSON.parse(res.response);
          resolve({ message: t['ok'] });
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }

  public changePassword(data: TypeUserPasswordRequest) {
    return new Promise<TypeUserPasswordResponse>((resolve, reject) => {
      this.api.changePassword(data).then((res) => {
        if (res.status === 200) {
          resolve({ message: t['ok'] });
        } else {
          reject(t['errorPasswordIsIncorrect']);
        }
      });
    });
  }

  public changeAvatar(data: FormData) {
    return new Promise<TypeGoodResponse>((resolve, reject) => {
      this.api.changeAvatar(data).then((res) => {
        if (res.status === 200) {
          // когда пригодится использовать приходящие данные
          // const data: TypeUserProfileResponse = JSON.parse(res.response);
          resolve({ message: t['ok'] });
        } else {
          reject(t['errorUploadAvatar']);
        }
      });
    });
  }

  public searchUser(data: TypeUserLogin) {
    return new Promise<TypeUserResponse[]>((resolve, reject) => {
      this.api.searchUser(data).then((res) => {
        if (res.status === 200) {
          const data: TypeUserResponse[] = JSON.parse(res.response);
          if (!data.length) {
            reject(t['userNotFound']);
          }
          resolve(data);
        } else {
          const errorStr = JSON.parse(res.response).reason;
          reject(t[errorStr]);
        }
      });
    });
  }
}

export const userService = new UserService();
