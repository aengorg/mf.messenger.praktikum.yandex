import { API_HOST, API_CHAT } from '../constants/index.js';
import { HTTPTransport } from '../core/Transport/Http/index.js';
export class ApiChat {
    constructor() {
        this.fetch = new HTTPTransport(API_HOST);
    }
    addChat(data) {
        return this.fetch.post(`${API_CHAT}`, { data });
    }
    getChatUsers(idChat) {
        return this.fetch.get(`${API_CHAT}/${idChat}/users`);
    }
    addUserChat(data) {
        return this.fetch.put(`${API_CHAT}/users`, { data });
    }
    deleteUserChat(data) {
        return this.fetch.delete(`${API_CHAT}/users`, { data });
    }
    getChats(offset = 0, limit = 99, title) {
        return this.fetch.get(`${API_CHAT}`, {
            getParam: {
                offset: offset,
                limit: limit,
                title: title,
            },
        });
    }
}
//# sourceMappingURL=chat.js.map