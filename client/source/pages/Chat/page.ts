import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

// import { Title, PropsTitle } from '../../components/title/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import {
  ModalAddChat,
  PropsModalAddChat,
} from '../../components/modalAddChat/index.js';
import { PropsChatItem } from '../../components/chat/chatItem/index.js';
import { Alert } from '../../components/alert/alert.js';
import { ChatList } from '../../components/Chat/ChatList/index.js';

import { chatService } from '../../services/chat.js';
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

export interface PropsChatPage extends PropsComponent {
  fieldSearch: PropsField;
  buttonAddChat: PropsButton;
  linkProfile: PropsLink;
  modalAddChat: PropsModalAddChat;
  chatList?: PropsChatItem[];
  selectChat?: string;
}

export class ChatPage extends Component<PropsChatPage> {
  constructor(props: PropsChatPage) {
    super(
      { ...props, chatList: chatItems },
      {
        alert: new Alert({ delete: 3000 }),
        modalAddChat: new ModalAddChat(props.modalAddChat),
        fieldSearch: new Field(props.fieldSearch),
        buttonAddChat: new Button(props.buttonAddChat),
        linkProfile: new Link(props.linkProfile),
        chatList: new ChatList({ chatItems }),
      },
    );
  }

  public initChatList() {
    chatService
      .getChats()
      .then((data) => {
        const chatItems: PropsChatItem[] = data.map((chat) => {
          return {
            name: chat.title,
            avatar: {
              url: chat.avatar || '',
              size: 's',
            },
          };
        });
        const chatList = new ChatList({ chatItems });
        this.children.chatList = chatList;
        this.props.chatList = chatItems;
      })
      .catch((error) => {
        this.children.alert.props.type = 'error';
        this.children.alert.props.text = error;
      });
  }

  public initEventModelCreateChat() {
    const buttonShowModal = this.children.buttonAddChat.$element;

    buttonShowModal.addEventListener('click', () => {
      this.children.modalAddChat.props.show = true;
    });

    const buttonCancelCreateChat = this.children.modalAddChat.children
      .buttonCancel.$element;

    buttonCancelCreateChat.addEventListener('click', (e: Event) => {
      e.preventDefault();
      this.children.modalAddChat.props.show = false;
    });

    const buttonCreateChat = this.children.modalAddChat.children.buttonCreate
      .$element;

    buttonCreateChat.addEventListener('click', () => {
      chatService
        .addChat(
          this.children.modalAddChat.inputsData?.getData() as TypeChatRequest,
        )
        .then((data) => {
          this.children.alert.props.type = 'success';
          this.children.alert.props.text = data.message;
          this.children.modalAddChat.children.fieldTitle.iniValue = '';
          this.children.modalAddChat.props.show = false;
          this.initChatList();
        })
        .catch((error) => {
          this.children.alert.props.type = 'error';
          this.children.alert.props.text = error;
        });
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initChatList();
    this.initEventModelCreateChat();
  }

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public beforeRemoveHandler() {}

  public getContext() {
    let textWarningChat = '';
    if (this.props.selectChat === undefined) {
      textWarningChat = t['textSelectChat'];
    }
    if (this.props.chatList?.length === 0) {
      textWarningChat = t['textAddFirstChat'];
    }

    return {
      textWarningChat: textWarningChat,
    };
  }

  public render() {
    return template;
  }
}
