import { Component, PropsComponent } from '../../core/Component/index';
import template from './template';

import { Title } from '../title/index';
import { Button, PropsButton } from '../button/index';
import { UserList, PropsUserList } from '../Chat/userList/index';

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
