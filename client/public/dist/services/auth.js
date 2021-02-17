import { ApiAuth } from '../api/auth.js';
import { t } from '../locales/index.js';
import { LS } from '../constants/index.js';
import { urlAvatar } from '../utils/urlAvatar/index.js';
export class AuthService {
    constructor() {
        this.api = new ApiAuth();
    }
    signIn(data) {
        return new Promise((resolve, reject) => {
            this.api.signIn(data).then((res) => {
                if (res.status === 200) {
                    localStorage.setItem(`${LS}-auth`, 'true');
                    resolve({ message: t['ok'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    signUp(data) {
        return new Promise((resolve, reject) => {
            this.api.signUp(data).then((res) => {
                if (res.status === 200) {
                    localStorage.setItem(`${LS}-auth`, 'true');
                    resolve(JSON.parse(res.response));
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    logout() {
        return new Promise((resolve, reject) => {
            this.api
                .logout()
                .then((res) => {
                if (res.status === 200) {
                    resolve({ message: t['ok'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            })
                .finally(() => {
                localStorage.removeItem(`${LS}-auth`);
            });
        });
    }
    getUser() {
        return new Promise((resolve, reject) => {
            this.api.getUser().then((res) => {
                if (res.status === 200) {
                    const user = JSON.parse(res.response);
                    user.avatar = urlAvatar(user.avatar);
                    resolve(user);
                }
                else if (res.status === 401) {
                    reject(t['ErrorUnauthorized']);
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    isAuth() {
        return Boolean(localStorage.getItem(`${LS}-auth`));
    }
}
export const authService = new AuthService();
//# sourceMappingURL=auth.js.map