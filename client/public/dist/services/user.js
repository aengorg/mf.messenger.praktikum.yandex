import { ApiUser } from '../api/user.js';
import { t } from '../locales/index.js';
export class UserService {
    constructor() {
        this.api = new ApiUser();
    }
    changeProfile(data) {
        return new Promise((resolve, reject) => {
            this.api
                .changeProfile(data)
                .then(() => {
                resolve({ message: t['ok'] });
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    changePassword(data) {
        return new Promise((resolve, reject) => {
            this.api
                .changePassword(data)
                .then(() => {
                resolve({ message: t['ok'] });
            })
                .catch(() => {
                reject(t['errorPasswordIsIncorrect']);
            });
        });
    }
    changeAvatar(data) {
        return new Promise((resolve, reject) => {
            this.api
                .changeAvatar(data)
                .then(() => {
                resolve({ message: t['ok'] });
            })
                .catch(() => {
                reject(t['errorUploadAvatar']);
            });
        });
    }
    searchUser(data) {
        return new Promise((resolve, reject) => {
            this.api
                .searchUser(data)
                .then((res) => {
                const data = JSON.parse(res.response);
                if (!data.length)
                    reject(t['userNotFound']);
                resolve(data);
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
}
export const userService = new UserService();
//# sourceMappingURL=user.js.map