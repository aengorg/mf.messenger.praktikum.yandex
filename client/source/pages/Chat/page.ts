import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

// import { Title, PropsTitle } from '../../components/title/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import {
  ChatItem,
  PropsChatItem,
} from '../../components/chat/chatItem/index.js';
import { Alert } from '../../components/alert/alert.js';
import { ChatList } from '../../components/Chat/ChatList/index.js';
import { Avatar, PropsAvatar } from '../../components/avatar/index.js';
import {
  ModalCreateChat,
  PropsModalCreateChat,
} from '../../components/modalCreateChat/index.js';
import {
  ModalAddChatUser,
  PropsModalAddChatUser,
} from '../../components/modalAddChatUser/index.js';

import { chatService } from '../../services/chat.js';
import { authService } from '../../services/auth.js';
import { TypeChatRequest } from '../../api/types.js';
import { t } from '../../locales/index.js';

const chatItems: PropsChatItem[] = [
  // new ChatItem({
  //   avatar: new Avatar({
  //     url: './assets/images/test/photo1.png',
  //     status: 'online',
  //     size: 's',
  //   }),
  //   name: 'Тимофей Козлов',
  //   content:
  //     'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  //   badge: 3,
  //   date: '01:17',
  // }),
];

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
  userAvatar: PropsAvatar;
  chatList?: PropsChatItem[];
  userName?: string;
}
export class ChatPage extends Component<PropsChatPage> {
  constructor(props: PropsChatPage) {
    super(
      { ...props, chatList: chatItems },
      {
        alert: new Alert({ delete: 3000 }),
        modalCreateChat: new ModalCreateChat(props.modalCreateChat),
        modalAddChatUser: new ModalAddChatUser(props.modalAddChatUser),
        fieldSearchUser: new Field(props.fieldSearchUser),
        fieldSearchMessage: new Field(props.fieldSearchMessage),
        buttonCreateChat: new Button(props.buttonCreateChat),
        buttonChatAddUser: new Button(props.buttonChatAddUser),
        buttonChatSettingUsers: new Button(props.buttonChatSettingUsers),
        buttonChatSetting: new Button(props.buttonChatSetting),
        linkProfile: new Link(props.linkProfile),
        chatList: new ChatList({ chatItems }),
        userAvatar: new Avatar(props.userAvatar),
      },
    );
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
        this.props.chatList = chatItems;
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

  public initEventModalAddUserChat() {
    const $buttonShowModal = this.children.buttonChatAddUser.$element;

    $buttonShowModal.addEventListener('click', () => {
      this.children.modalAddChatUser.props.show = true;
    });
  }

  public selectChatHandler() {
    this.forceRender();
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initChatList();
    this.initUserProfile();
    this.initEventModalCreateChat();
    this.initEventModalAddUserChat();
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
    if (this.props.chatList?.length === 0) {
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
