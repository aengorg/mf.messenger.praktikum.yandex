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
    signUp(data) {
        return new Promise((resolve, reject) => {
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
    logout() {
        return new Promise((resolve, reject) => {
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
    getUser() {
        return new Promise((resolve, reject) => {
            this.api
                .getUser()
                .then((res) => {
                const user = JSON.parse(res.response);
                user.avatar = urlAvatar(user.avatar);
                resolve(user);
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    isAuth() {
        return Boolean(localStorage.getItem(`${LS}-auth`));
    }
}
export const authService = new AuthService();
//# sourceMappingURL=auth.js.map