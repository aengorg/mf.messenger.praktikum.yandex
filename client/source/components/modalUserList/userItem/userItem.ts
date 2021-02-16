import { Component, PropsComponent } from '../../../core/Component/index.js';
import { Avatar } from '../../avatar/index.js';
import { Button } from '../../button/index.js';
import template from './template.js';

export interface PropsUserItem extends PropsComponent {
  id: number;
  avatar: string;
  fullName: string;
  chatName: string | null;
  role: string;
}

export class UserItem extends Component<PropsUserItem> {
  constructor(props: PropsUserItem) {
    super(props, {
      avatar: new Avatar({ size: 'xs', url: props.avatar }),
      buttonDelete: new Button({ size: 's', icon: 'remove-user' }),
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
    return {
      isAdmin: this.props.role === 'admin',
    };
  }

  public render() {
    return template;
  }
}
