import { Component, PropsComponent } from '../../../../core/Component/index.js';
import template from './template.js';

import { Avatar } from '../../../avatar/index.js';
import { Button, TypeIconsButton } from '../../../button/index.js';

import { joinClasses } from '../../../../utils/joinClasses/index.js';
import { TypeRole } from '../../../../api/types.js';

export interface PropsUserItem extends PropsComponent {
  id: number;
  avatar: string;
  fullName: string;
  chatName: string | null;
  buttonIcon: TypeIconsButton;
  role?: TypeRole;
}

export class UserItem extends Component<PropsUserItem> {
  constructor(props: PropsUserItem) {
    super(props, {
      avatar: new Avatar({ size: 's', url: props.avatar }),
      button: new Button({ size: 's', icon: props.buttonIcon }),
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
    const isAdmin = this.props?.role === 'admin';
    return {
      styleClasses: joinClasses([
        'user-item',
        isAdmin ? 'user-item--admin' : '',
      ]),
      isAdmin: isAdmin,
    };
  }

  public render() {
    return template;
  }
}
