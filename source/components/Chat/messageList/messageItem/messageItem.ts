import { Component, PropsComponent } from '../../../../core/Component/index';
import template from './template.hbs';

import { LANG } from '../../../../constants/index';

import { Avatar } from '../../../avatar/index';

import { formatData } from '../../../../utils/formatDate/index';
import { joinClasses } from '../../../../utils/joinClasses/index';

export interface PropsMessageItem extends PropsComponent {
  user_id?: number;
  chat_id?: number;
  avatar: string;
  time?: string;
  content?: string;
  name?: string;
  me: boolean;
}

export class MessageItem extends Component<PropsMessageItem> {
  constructor(props: PropsMessageItem) {
    super(props, {
      avatar: new Avatar({
        url: props.avatar,
        size: 'xs',
      }),
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
      styleUserName: joinClasses([
        'message_name-user',
        this.props.me ? 'message_name-user--me' : '',
      ]),
      time: formatData(this.props.time, LANG),
    };
  }

  public render() {
    return template;
  }
}
