import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

// import { Title, PropsTitle } from '../../components/title/index.js';
import { Avatar, PropsAvatar } from '../../components/avatar/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { ChatItem } from '../../components/Chat/ChatItem/index.js';

const chatItems = [
  new ChatItem({
    avatar: new Avatar({
      url: './assets/images/test/photo1.png',
      status: 'online',
      size: 's',
    }),
    name: 'Тимофей Козлов',
    content:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    badge: 3,
    date: '01:17',
  }),
  new ChatItem({
    avatar: new Avatar({
      url: './assets/images/test/photo2.png',
      status: 'offline',
      size: 's',
    }),
    name: 'Маргарита Цветкова',
    content: 'Люблю выращивать цветы и клубнику на балконе.',
    badge: 5,
    date: '14:20',
  }),
  new ChatItem({
    avatar: new Avatar({
      url: './assets/images/test/photo3.png',
      status: 'wait',
      size: 's',
    }),
    name: 'Егор Корягин',
    content: 'O mama mia!',
    date: '14:20',
  }),
];

export interface PropsChatPage extends PropsComponent {
  fieldSearch: PropsField;
  buttonAddUser: PropsButton;
  buttonCreateGroup: PropsButton;
  avatar: PropsAvatar;
  linkProfile: PropsLink;
  chatItems?: ChatItem[];
}

export class ChatPage extends Component<PropsChatPage> {
  constructor(props: PropsChatPage) {
    super(
      { ...props, chatItems: chatItems },
      {
        fieldSearch: new Field(props.fieldSearch),
        buttonAddUser: new Button(props.buttonCreateGroup),
        buttonCreateGroup: new Button(props.buttonCreateGroup),
        linkProfile: new Link(props.linkProfile),
        avatar: new Avatar(props.avatar),
        chatItems: chatItems,
      },
    );
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public beforeRemoveHandler() {}

  public getContext() {
    return {};
  }

  public render() {
    return template;
  }
}
