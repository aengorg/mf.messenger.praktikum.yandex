import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { Title } from '../title/index.js';
import { Button, PropsButton } from '../button/index.js';
import { UserList, PropsUserList } from '../Chat/userList/index.js';

export interface PropsModalListUser extends PropsComponent {
  userItems: PropsUserList;
  title: string;
  buttonClose: PropsButton;
  show: boolean;
}

export class ModalListUser extends Component<PropsModalListUser> {
  constructor(props: PropsModalListUser) {
    super(props, {
      userList: new UserList(props.userItems),
      title: new Title({
        text: props.title,
        level: 1,
        size: 2,
      }),
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

  public createdHandler() {
    this.initEventCancel();
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
