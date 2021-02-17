import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Button } from '../../components/button/index.js';
import { Field } from '../../components/field/index.js';
import { Link } from '../../components/link/index.js';
import { Alert } from '../../components/alert/alert.js';
import { ChatList } from '../../components/Chat/chatList/index.js';
import { UserList } from '../../components/Chat/userList/index.js';
import { Avatar } from '../../components/avatar/index.js';
import { ModalCreateChat, } from '../../components/modalCreateChat/index.js';
import { ModalAddChatUser, } from '../../components/modalAddChatUser/index.js';
import { ModalListUser, } from '../../components/modalUserList/index.js';
import { t } from '../../locales/index.js';
import { chatService } from '../../services/chat.js';
import { authService } from '../../services/auth.js';
import { userService } from '../../services/user.js';
import { urlAvatar } from '../../utils/urlAvatar/index.js';
import { debounce } from '../../utils/debounce/index.js';
const state = { selectChatId: undefined };
export class ChatPage extends Component {
    constructor(props) {
        super(props, {
            alert: new Alert({ delete: 3000 }),
            modalCreateChat: new ModalCreateChat(props.modalCreateChat),
            modalAddChatUser: new ModalAddChatUser(props.modalAddChatUser),
            modalListUser: new ModalListUser(props.modalListUser),
            fieldSearchUser: new Field(props.fieldSearchUser),
            fieldSearchMessage: new Field(props.fieldSearchMessage),
            buttonCreateChat: new Button(props.buttonCreateChat),
            buttonChatAddUser: new Button(props.buttonChatAddUser),
            buttonChatSettingUsers: new Button(props.buttonChatSettingUsers),
            buttonChatSetting: new Button(props.buttonChatSetting),
            linkProfile: new Link(props.linkProfile),
            chatList: new ChatList({
                chatItems: props.chatItems,
                selectChatId: undefined,
            }),
            userAvatar: new Avatar(props.userAvatar),
        });
    }
    initChatList() {
        chatService
            .getChats()
            .then((data) => {
            const chatItems = data.map((chat) => {
                return {
                    id: chat.id,
                    name: chat.title,
                    avatar: {
                        url: chat.avatar || '',
                        size: 's',
                    },
                };
            });
            const chatList = new ChatList({
                chatItems: chatItems,
                selectChatId: state.selectChatId,
            });
            this.children.chatList = chatList;
            this.props.chatItems = chatItems;
            this.initEventSelectChat();
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
        });
    }
    initUserProfile() {
        authService
            .getUser()
            .then(({ avatar, first_name, second_name }) => {
            this.props.userName = `${first_name} ${second_name}`;
            this.children.userAvatar.props.url = avatar;
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
        });
    }
    initEventSelectChat() {
        this.children.chatList.children.chatItems.forEach((chat) => {
            if (chat.$element !== null) {
                chat.$element.addEventListener('click', (e) => {
                    var _a;
                    const $chat = e.currentTarget;
                    const id = Number((_a = $chat.firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute('data-key'));
                    if (state.selectChatId && state.selectChat) {
                        state.selectChat.props.selectChatId = 0;
                    }
                    state.selectChatId = id;
                    state.selectChat = chat;
                    chat.props.selectChatId = id;
                    this.selectChatHandler();
                });
            }
        });
    }
    initEventModalCreateChat() {
        const $buttonShowModal = this.children.buttonCreateChat.$element;
        $buttonShowModal.addEventListener('click', () => {
            this.children.modalCreateChat.props.show = true;
        });
        const $buttonCreateChat = this.children.modalCreateChat.children
            .buttonCreate.$element;
        $buttonCreateChat.addEventListener('click', () => {
            var _a;
            chatService
                .addChat((_a = this.children.modalCreateChat.inputsData) === null || _a === void 0 ? void 0 : _a.getData())
                .then((data) => {
                this.children.alert.props.type = 'success';
                this.children.alert.props.text = data.message;
                this.children.modalCreateChat.delErrorFrom();
                this.children.modalCreateChat.children.fieldTitle.iniValue = '';
                this.children.modalCreateChat.props.show = false;
                this.initChatList();
            })
                .catch((error) => {
                this.children.alert.props.type = 'error';
                this.children.alert.props.text = error;
            });
        });
    }
    initEventModalAddUserChat() {
        const $buttonShowModal = this.children.buttonChatAddUser.$element;
        $buttonShowModal.addEventListener('click', () => {
            this.children.modalAddChatUser.props.show = true;
        });
        const inputLogin = this.children.modalAddChatUser.children.fieldLogin;
        const $inputLogin = inputLogin.$element;
        const inputHandler = debounce((e) => {
            const errors = inputLogin.validationHandler();
            if (errors.length === 0) {
                const value = e[0].target.value;
                userService
                    .searchUser({ login: value })
                    .then((data) => {
                    const userItems = data.map((user) => {
                        return {
                            id: user.id,
                            fullName: `${user.first_name} ${user.second_name}`,
                            chatName: user.display_name,
                            avatar: urlAvatar(user.avatar),
                            buttonIcon: 'add-user',
                        };
                    });
                    const payload = {
                        userItems: userItems,
                        textEmpty: '',
                    };
                    this.children.modalAddChatUser.children.userList = new UserList(payload);
                    this.children.modalAddChatUser.props.userItems = payload;
                    this.initEventAddUserChatHandler();
                })
                    .catch((error) => {
                    this.children.alert.props.type = 'error';
                    this.children.alert.props.text = error;
                });
            }
        }, 500);
        $inputLogin.addEventListener('input', inputHandler);
        // для дебага
        // $buttonShowModal.click();
    }
    initEventModalListUserChat() {
        const $buttonShowModal = this.children.buttonChatSettingUsers.$element;
        $buttonShowModal.addEventListener('click', () => {
            this.children.modalListUser.props.show = true;
            chatService
                .getUsersChat(state.selectChatId || 189)
                .then((data) => {
                const userItems = data.map((user) => {
                    return {
                        id: user.id,
                        fullName: `${user.first_name} ${user.second_name}`,
                        chatName: user.display_name,
                        avatar: urlAvatar(user.avatar),
                        buttonIcon: 'remove-user',
                        role: user.role,
                    };
                });
                const payload = {
                    userItems: userItems,
                    textEmpty: '',
                };
                this.children.modalListUser.children.userList = new UserList(payload);
                this.children.modalListUser.props.userItems = payload;
                this.initEventDeleteUserChatHandler();
            })
                .catch((error) => {
                this.children.alert.props.type = 'error';
                this.children.alert.props.text = error;
            });
        });
        // для дебага
        // $buttonShowModal.click();
    }
    selectChatHandler() {
        this.forceRender();
    }
    initEventAddUserChatHandler() {
        const userItems = this.children.modalAddChatUser.children.userList.children
            .userItems;
        userItems.forEach((user) => {
            const buttonAddUser = user.children.button;
            const $buttonAddUser = buttonAddUser.$element;
            $buttonAddUser.addEventListener('click', (e) => {
                const $el = e.target;
                const idUser = Number($el.value);
                const idChat = state.selectChatId;
                if (idChat) {
                    chatService
                        .addUsersChat({
                        users: [idUser],
                        chatId: idChat,
                    })
                        .then((data) => {
                        buttonAddUser.props.disabled = true;
                        buttonAddUser.props.icon = 'done-user';
                        this.children.alert.props.type = 'success';
                        this.children.alert.props.text = data.message;
                    })
                        .catch((error) => {
                        this.children.alert.props.type = 'error';
                        this.children.alert.props.text = error;
                    });
                }
            });
        });
    }
    initEventDeleteUserChatHandler() {
        const userItems = this.children.modalListUser.children.userList.children
            .userItems;
        userItems.forEach((user) => {
            const $buttonDeleteUser = user.children.button.$element;
            $buttonDeleteUser.addEventListener('click', (e) => {
                const $el = e.target;
                const idUser = Number($el.value);
                const idChat = state.selectChatId;
                if (idChat) {
                    chatService
                        .deleteUserChat({
                        users: [idUser],
                        chatId: idChat,
                    })
                        .then((data) => {
                        user.remove();
                        this.children.alert.props.type = 'success';
                        this.children.alert.props.text = data.message;
                    })
                        .catch((error) => {
                        this.children.alert.props.type = 'error';
                        this.children.alert.props.text = error;
                    });
                }
            });
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.initChatList();
        this.initUserProfile();
        this.initEventModalCreateChat();
        this.initEventModalAddUserChat();
        this.initEventModalListUserChat();
    }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        var _a;
        let textWarningChat = t['textSendFirstMsg'];
        if (state.selectChatId === undefined) {
            textWarningChat = t['textSelectChat'];
        }
        if (((_a = this.props.chatItems) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            textWarningChat = t['textAddFirstChat'];
        }
        return {
            selectChatId: state.selectChatId,
            textWarningChat: textWarningChat,
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=page.js.map