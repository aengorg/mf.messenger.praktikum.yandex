import { Component, PropsComponent } from '../../../core/Component/index.js';
import template from './template.js';

import { Avatar, PropsAvatar } from '../../../components/avatar/index.js';

export interface PropsChatItem extends PropsComponent {
  avatar: PropsAvatar;
  name: string;
  date?: string;
  content?: string;
  badge?: number;
}

export class ChatItem extends Component<PropsChatItem> {
  constructor(props: PropsChatItem) {
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
