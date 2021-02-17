import { Component, PropsComponent } from '../../core/Component/index';
import template from './template';

import { Button, PropsButton } from '../../components/button/index';
import { Field, PropsField } from '../../components/field/index';
import { Link, PropsLink } from '../../components/link/index';
import { Alert } from '../../components/alert/alert';
import { ChatList } from '../../components/Chat/chatList/index';
import { UserList } from '../../components/Chat/userList/index';
import {
  UserItem,
  PropsUserItem,
} from '../../components/Chat/userList/userItem/index';
import { Avatar, PropsAvatar } from '../../components/avatar/index';
import {
  ChatItem,
  PropsChatItem,
} from '../../components/Chat/ChatList/ChatItem/index';
import {
  ModalCreateChat,
  PropsModalCreateChat,
} from '../../components/modalCreateChat/index';
import {
  ModalAddChatUser,
  PropsModalAddChatUser,
} from '../../components/modalAddChatUser/index';
import {
  ModalListUser,
  PropsModalListUser,
} from '../../components/modalUserList/index';

import { t } from '../../locales/index';
import { TypeChatRequest } from '../../api/types';

import { chatService } from '../../services/chat';
import { authService } from '../../services/auth';
import { userService } from '../../services/user';

import { urlAvatar } from '../../utils/urlAvatar/index';
import { debounce } from '../../utils/debounce/index';

type TypeState = { selectChatId: number | undefined; selectChat?: ChatItem };
const state: TypeState = { selectChatId: undefined };

export interface PropsChatPage extends PropsComponent {
  fieldSearchUser: PropsField;
  fieldSearchMessage: PropsField;
  buttonChatAddUser: PropsButton;
  buttonChatSettingUsers: PropsButton;
  buttonChatSetting: PropsButton;
  buttonCreateChat: PropsButton;
  linkProfile: PropsLink;
  modalCreateChat: PropsModalCreateChat;
  modalAddChatUser: PropsModalAddChatUser;
  modalListUser: PropsModalListUser;
  userAvatar: PropsAvatar;
  chatItems: PropsChatItem[];
  userName?: string;
}
export class ChatPage extends Component<PropsChatPage> {
  constructor(props: PropsChatPage) {
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

  public initChatList() {
    chatService
      .getChats()
      .then((data) => {
        const chatItems: PropsChatItem[] = data.map((chat) => {
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

  public initUserProfile() {
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

  public initEventSelectChat() {
    this.children.chatList.children.chatItems.forEach((chat: ChatItem) => {
      if (chat.$element !== null) {
        chat.$element.addEventListener('click', (e: Event) => {
          const $chat = e.currentTarget as HTMLElement;
          const id = Number($chat.firstElementChild?.getAttribute('data-key'));

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

  public initEventModalCreateChat() {
    const $buttonShowModal = this.children.buttonCreateChat.$element;

    $buttonShowModal.addEventListener('click', () => {
      this.children.modalCreateChat.props.show = true;
    });

    const $buttonCreateChat = this.children.modalCreateChat.children
      .buttonCreate.$element;

    $buttonCreateChat.addEventListener('click', () => {
      chatService
        .addChat(
          this.children.modalCreateChat.inputsData?.getData() as TypeChatRequest,
        )
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

  public initEventModalAddUserChat() {
    const $buttonShowModal = this.children.buttonChatAddUser.$element;

    $buttonShowModal.addEventListener('click', () => {
      this.children.modalAddChatUser.props.show = true;
    });

    const inputLogin = this.children.modalAddChatUser.children.fieldLogin;
    const $inputLogin = inputLogin.$element;

    const inputHandler = debounce((e) => {
      const errors: string[] = inputLogin.validationHandler();

      if (errors.length === 0) {
        const value = e[0].target.value;

        userService
          .searchUser({ login: value })
          .then((data) => {
            const userItems: PropsUserItem[] = data.map((user) => {
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

            this.children.modalAddChatUser.children.userList = new UserList(
              payload,
            );
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

  public initEventModalListUserChat() {
    const $buttonShowModal = this.children.buttonChatSettingUsers.$element;
    $buttonShowModal.addEventListener('click', () => {
      this.children.modalListUser.props.show = true;
      chatService
        .getUsersChat(state.selectChatId || 189)
        .then((data) => {
          const userItems: PropsUserItem[] = data.map((user) => {
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

  public selectChatHandler() {
    this.forceRender();
  }

  public initEventAddUserChatHandler() {
    const userItems = this.children.modalAddChatUser.children.userList.children
      .userItems;

    userItems.forEach((user: UserItem) => {
      const buttonAddUser = user.children.button;
      const $buttonAddUser = buttonAddUser.$element;

      $buttonAddUser.addEventListener('click', (e: Event) => {
        const $el = e.target as HTMLInputElement;
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

  public initEventDeleteUserChatHandler() {
    const userItems = this.children.modalListUser.children.userList.children
      .userItems;

    userItems.forEach((user: UserItem) => {
      const $buttonDeleteUser = user.children.button.$element;

      $buttonDeleteUser.addEventListener('click', (e: Event) => {
        const $el = e.target as HTMLInputElement;
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

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initChatList();
    this.initUserProfile();
    this.initEventModalCreateChat();
    this.initEventModalAddUserChat();
    this.initEventModalListUserChat();
  }

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public beforeRemoveHandler() {}

  public getContext() {
    let textWarningChat = t['textSendFirstMsg'];
    if (state.selectChatId === undefined) {
      textWarningChat = t['textSelectChat'];
    }
    if (this.props.chatItems?.length === 0) {
      textWarningChat = t['textAddFirstChat'];
    }

    return {
      selectChatId: state.selectChatId,
      textWarningChat: textWarningChat,
    };
  }

  public render() {
    return template;
  }
}
