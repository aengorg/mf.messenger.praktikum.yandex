import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { Title } from '../title/index';
import { Field, PropsField } from '../field/index';
import { Button, PropsButton } from '../button/index';
import { UserList, PropsUserList } from '../Chat/userList/index';

export interface PropsModalAddChatUser extends PropsComponent {
  title: string;
  fieldLogin: PropsField;
  buttonClose: PropsButton;
  userItems: PropsUserList;
  show: boolean;
}

export class ModalAddChatUser extends Component<PropsModalAddChatUser> {
  constructor(props: PropsModalAddChatUser) {
    super(props, {
      title: new Title({
        text: props.title,
        level: 1,
        size: 2,
      }),
      fieldLogin: new Field(props.fieldLogin),
      userList: new UserList(props.userItems),
      buttonClose: new Button(props.buttonClose),
    });
  }

  public initEventCancel() {
    this.children.buttonClose.$element.addEventListener('click', (e: Event) => {
      e.preventDefault();
      this.props.show = false;
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

  public updatedHandler() {
    this.initEventCancel();
  }

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
