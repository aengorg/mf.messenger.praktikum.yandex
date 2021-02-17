import { ApiChat } from '../api/chat.js';
import { t } from '../locales/index.js';
import { urlAvatar } from '../utils/urlAvatar/index.js';
export class ChatService {
    constructor() {
        this.api = new ApiChat();
    }
    addChat(data) {
        return new Promise((resolve, reject) => {
            this.api.addChat(data).then((res) => {
                if (res.status === 200) {
                    resolve({ message: t['ok'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    addUsersChat(data) {
        return new Promise((resolve, reject) => {
            this.api.addUserChat(data).then((res) => {
                if (res.status === 200) {
                    resolve({ message: t['successAddUserChat'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    deleteUserChat(data) {
        return new Promise((resolve, reject) => {
            this.api.deleteUserChat(data).then((res) => {
                if (res.status === 200) {
                    resolve({ message: t['successDeleteUserChat'] });
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    getUsersChat(idChat) {
        return new Promise((resolve, reject) => {
            this.api.getChatUsers(idChat).then((res) => {
                if (res.status === 200) {
                    let users = JSON.parse(res.response);
                    resolve(users);
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
    getChats() {
        return new Promise((resolve, reject) => {
            this.api.getChats().then((res) => {
                if (res.status === 200) {
                    let chats = JSON.parse(res.response);
                    chats = chats.map((chat) => {
                        chat.avatar = urlAvatar(chat.avatar);
                        return chat;
                    });
                    resolve(chats);
                }
                else {
                    const errorStr = JSON.parse(res.response).reason;
                    reject(t[errorStr]);
                }
            });
        });
    }
}
export const chatService = new ChatService();
//# sourceMappingURL=chat.js.map