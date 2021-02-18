import { ApiChat } from '../api/chat.js';
import { t } from '../locales/index.js';
import { urlAvatar } from '../utils/urlAvatar/index.js';
export class ChatService {
    constructor() {
        this.api = new ApiChat();
    }
    addChat(data) {
        return new Promise((resolve, reject) => {
            this.api
                .addChat(data)
                .then(() => {
                resolve({ message: t['ok'] });
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    addUsersChat(data) {
        return new Promise((resolve, reject) => {
            this.api
                .addUserChat(data)
                .then(() => {
                resolve({ message: t['successAddUserChat'] });
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    deleteUserChat(data) {
        return new Promise((resolve, reject) => {
            this.api
                .deleteUserChat(data)
                .then(() => {
                resolve({ message: t['successDeleteUserChat'] });
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    getUsersChat(idChat) {
        return new Promise((resolve, reject) => {
            this.api
                .getChatUsers(idChat)
                .then((res) => {
                let users = JSON.parse(res.response);
                resolve(users);
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
    getChats() {
        return new Promise((resolve, reject) => {
            this.api
                .getChats()
                .then((res) => {
                let chats = JSON.parse(res.response);
                chats = chats.map((chat) => {
                    chat.avatar = urlAvatar(chat.avatar);
                    return chat;
                });
                resolve(chats);
            })
                .catch((error) => {
                reject(t[error]);
            });
        });
    }
}
export const chatService = new ChatService();
//# sourceMappingURL=chat.js.map