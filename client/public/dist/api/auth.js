import { API_HOST, API_AUTH } from '../constants/index.js';
import { HTTPTransport } from '../core/Transport/Http/index.js';
export class ApiAuth {
    constructor() {
        this.fetch = new HTTPTransport(API_HOST);
    }
    signIn(data) {
        return this.fetch.post(`${API_AUTH}/signin`, { data });
    }
    signUp(data) {
        return this.fetch.post(`${API_AUTH}/signup`, { data });
    }
    logout() {
        return this.fetch.post(`${API_AUTH}/logout`);
    }
    getUser() {
        return this.fetch.get(`${API_AUTH}/user`);
    }
}
//# sourceMappingURL=auth.js.map