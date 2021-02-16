import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { Button, PropsButton } from '../../components/button/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Alert } from '../../components/alert/alert.js';
import { ChatList } from '../../components/Chat/ChatList/index.js';
import {
  UserItem,
  PropsUserItem,
} from '../../components/modalUserList/userItem/index.js';
import { Avatar, PropsAvatar } from '../../components/avatar/index.js';
import {
  ChatItem,
  PropsChatItem,
} from '../../components/chat/chatItem/index.js';
import {
  ModalCreateChat,
  PropsModalCreateChat,
} from '../../components/modalCreateChat/index.js';
import {
  ModalAddChatUser,
  PropsModalAddChatUser,
} from '../../components/modalAddChatUser/index.js';
import {
  ModalListUser,
  PropsModalListUser,
} from '../../components/modalUserList/index.js';

import { chatService } from '../../services/chat.js';
import { authService } from '../../services/auth.js';
import { TypeChatRequest, TypeUserLogin } from '../../api/types.js';
import { t } from '../../locales/index.js';
import { userService } from '../../services/user.js';
import { urlAvatar } from '../../utils/urlAvatar/index.js';

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

    // const $buttonCancelCreateChat = this.children.modalCreateChat.children
    //   .buttonCancel.$element;

    // $buttonCancelCreateChat.addEventListener('click', (e: Event) => {
    //   e.preventDefault();
    //   this.children.modalCreateChat.props.show = false;
    // });

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

    const $buttonAddUserChat = this.children.modalAddChatUser.children.buttonAdd
      .$element;

    $buttonAddUserChat.addEventListener('click', () => {
      userService
        .searchUser(
          this.children.modalAddChatUser.inputsData?.getData() as TypeUserLogin,
        )
        .then((data) => {
          const idChat = state.selectChatId;
          const users = data.map((user) => user.id);
          if (idChat) {
            chatService
              .addUsersChat({
                users: users,
                chatId: idChat,
              })
              .then((data) => {
                this.children.modalAddChatUser.children.fieldLogin.iniValue =
                  '';
                this.children.modalAddChatUser.delErrorFrom();
                this.children.modalAddChatUser.props.show = false;
                this.children.alert.props.type = 'success';
                this.children.alert.props.text = data.message;
              })
              .catch((error) => {
                this.children.modalAddChatUser.setErrorFrom(error);
              });
          }
        })
        .catch((error) => {
          this.children.modalAddChatUser.setErrorFrom(error);
        });
    });
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
              role: user.role,
            };
          });

          this.children.modalListUser.children.userItems = userItems.map(
            (v) => new UserItem(v),
          );
          this.children.modalListUser.props.userItems = userItems;
        })
        .catch((error) => {
          this.children.alert.props.type = 'error';
          this.children.alert.props.text = error;
        });
    });
  }

  public selectChatHandler() {
    // if (state.selectChatId) {
    //   chatService
    //     .getUsersChat(state.selectChatId)
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    this.forceRender();
  }

  public initEventModalListUser() {}

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
    let textWarningChat = '';
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
