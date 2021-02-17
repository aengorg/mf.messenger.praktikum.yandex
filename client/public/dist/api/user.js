import { API_HOST, API_USER } from '../constants/index.js';
import { HTTPTransport } from '../core/Transport/Http/index.js';
export class ApiUser {
    constructor() {
        this.fetch = new HTTPTransport(API_HOST);
    }
    changeProfile(data) {
        return this.fetch.put(`${API_USER}/profile`, { data });
    }
    changeAvatar(data) {
        return this.fetch.put(`${API_USER}/profile/avatar`, {
            data,
        });
    }
    changePassword(data) {
        return this.fetch.put(`${API_USER}/password`, { data });
    }
    getUser(id) {
        return this.fetch.get(`${API_USER}/password/${id}`);
    }
    searchUser(data) {
        return this.fetch.post(`${API_USER}/search`, { data });
    }
}
//# sourceMappingURL=user.js.map