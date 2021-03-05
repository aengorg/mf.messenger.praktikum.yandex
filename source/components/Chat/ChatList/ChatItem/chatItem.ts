import { Component, PropsComponent } from '../../../../core/Component/index';
import template from './template.hbs';

import { LANG } from '../../../../constants/index';

import { Avatar, PropsAvatar } from '../../../avatar/index';

import { joinClasses } from '../../../../utils/joinClasses/index';
import { formatData } from '../../../../utils/formatDate/index';

export interface PropsChatItem extends PropsComponent {
  id: number;
  avatar: PropsAvatar;
  name: string;
  selectChatId?: number;
  time?: string;
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
    return {
      time: formatData(this.props.time, LANG),
      styleClasses: joinClasses([
        'chat-item',
        this.props?.selectChatId === this.props.id ? `chat-item--select` : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
