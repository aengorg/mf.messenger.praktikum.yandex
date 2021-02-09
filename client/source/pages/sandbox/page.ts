import { Component } from '../../core/Component/index.js';
import template from './template.js';

import { rules } from '../../utils/validationRules/index.js';

import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Avatar } from '../../components/avatar/index.js';

export class Sandbox extends Component<any> {
  constructor(props = {}) {
    super(props, {
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
        url: './assets/images/test/photo1.png',
        status: 'online',
      }),
      avatarPhoto: new Avatar({
        url: './assets/images/test/photo2.png',
      }),
    });
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
