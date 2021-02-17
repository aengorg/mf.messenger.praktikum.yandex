import { Component, PropsComponent } from '../../../core/Component/index';
import template from './template';

import { UserItem, PropsUserItem } from './UserItem/index';

export interface PropsUserList extends PropsComponent {
  userItems: PropsUserItem[];
  textEmpty: string;
}

export class UserList extends Component<PropsUserList> {
  constructor(props: PropsUserList) {
    super(props, {
      userItems: props.userItems.map((v) => new UserItem(v)),
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
