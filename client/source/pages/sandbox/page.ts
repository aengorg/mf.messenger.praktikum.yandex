import { Component, PropsComponentEmpty } from '../../core/Component/index';
import template from './template.hbs';

import { rules } from '../../utils/validationRules/index';

import { Title } from '../../components/title/index';
import { Link } from '../../components/link/index';
import { Field } from '../../components/field/index';
import { Button } from '../../components/button/index';
import { Avatar } from '../../components/avatar/index';
import { MessageList } from '../../components/Chat/MessageList/index';

import { messageService } from '../../services/messages';

export class Sandbox extends Component<PropsComponentEmpty> {
  constructor(props = {}) {
    super(props, {
      messageList: new MessageList({
        messageItems: [
          // {
          //   avatar: {},
          //   date: 'string',
          //   content: 'string',
          //   badge: 5,
          // },
          // {
          //   avatar: {},
          //   date: 'string',
          //   content: 'string',
          //   badge: 5,
          // },
          // {
          //   avatar: {},
          //   date: 'string',
          //   content: 'string',
          //   badge: 5,
          // },
        ],
      }),
      // * Link
      link: new Link({
        url: './',
        text: 'Back to chats',
        size: 2,
      }),
      // * Title
      title: new Title({
        text: 'Server error 500',
        level: 1,
        size: 1,
        color: 'red',
      }),
      // * Field
      field: new Field({
        name: 'login',
        label: 'Login',
        type: 'text',
        initValue: 'Rock it with HTML5 WebSocket',
        placeholder: 'Ivan',
      }),
      fieldValid: new Field({
        name: 'login',
        label: 'Login',
        type: 'text',
        placeholder: 'Ivan',
        validation: {
          events: ['blur'],
          rules: [rules.required],
        },
      }),
      // * Buttons
      button: new Button({
        text: 'Button',
      }),
      buttonPrimary: new Button({
        text: 'Button',
        primary: true,
      }),
      buttonDanger: new Button({
        text: 'Button',
        danger: true,
      }),
      buttonIconEmoji: new Button({
        size: 's',
        icon: 'add-user',
      }),
      // * Avatar
      avatar: new Avatar({}),
      avatarStatus: new Avatar({
        // url: './assets/images/test/photo1.png',
        status: 'online',
      }),
      avatarPhoto: new Avatar({
        // url: './assets/images/test/photo2.png',
      }),
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.children.button.$element.addEventListener('click', () => {
      messageService.connect(9326, 189);
    });
    this.children.buttonPrimary.$element.addEventListener('click', () => {
      messageService.sendMessage(this.children.field.$input.value);
    });
  }

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
