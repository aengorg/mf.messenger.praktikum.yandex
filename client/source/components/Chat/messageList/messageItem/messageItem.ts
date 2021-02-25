import { Component, PropsComponent } from '../../../../core/Component/index';
import template from './template.hbs';

import { Avatar, PropsAvatar } from '../../../avatar/index';

// import { joinClasses } from '../../../../utils/joinClasses/index';

export interface PropsMessageItem extends PropsComponent {
  avatar: PropsAvatar;
  date?: string;
  content?: string;
  badge?: number;
}

export class MessageItem extends Component<PropsMessageItem> {
  constructor(props: PropsMessageItem) {
    super(props, { avatar: new Avatar(props.avatar) });
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
