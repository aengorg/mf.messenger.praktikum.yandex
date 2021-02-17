import { ApiUser } from '../api/user.js';
import { t } from '../locales/index.js';
export class UserService {
    constructor() {
        this.api = new ApiUser();
    }
    changeProfile(data) {
        return new Promise((resolve, reject) => {
            this.api.changeProfile(data).then((res) => {
                if (res.status === 200) {
                    // когда пригодится использовать приходящие данные
                    // const data: TypeUserProfileResponse = JSON.parse(res.response);
                    resolve({ message: t['ok'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    changePassword(data) {
        return new Promise((resolve, reject) => {
            this.api.changePassword(data).then((res) => {
                if (res.status === 200) {
                    resolve({ message: t['ok'] });
                }
                else {
                    reject(t['errorPasswordIsIncorrect']);
                }
            });
        });
    }
    changeAvatar(data) {
        return new Promise((resolve, reject) => {
            this.api.changeAvatar(data).then((res) => {
                if (res.status === 200) {
                    // когда пригодится использовать приходящие данные
                    // const data: TypeUserProfileResponse = JSON.parse(res.response);
                    resolve({ message: t['ok'] });
                }
                else {
                    reject(t['errorUploadAvatar']);
                }
            });
        });
    }
    searchUser(data) {
        return new Promise((resolve, reject) => {
            this.api.searchUser(data).then((res) => {
                if (res.status === 200) {
                    const data = JSON.parse(res.response);
                    if (!data.length) {
                        reject(t['userNotFound']);
                    }
                    resolve(data);
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
}
export const userService = new UserService();
//# sourceMappingURL=user.js.map