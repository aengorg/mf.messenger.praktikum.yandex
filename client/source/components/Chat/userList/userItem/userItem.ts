import { Component, PropsComponent } from '../../../../core/Component/index';
import template from './template';

import { Avatar } from '../../../avatar/index';
import { Button, TypeIconsButton } from '../../../button/index';

import { joinClasses } from '../../../../utils/joinClasses/index';
import { TypeRole } from '../../../../api/types';
import { Icon } from '../../../Icon/icon';

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
      button: new Button({
        size: 's',
        icon: props.buttonIcon,
        value: props.id,
      }),
      iconAdmin: new Icon({ icon: 'admin-user' }),
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
