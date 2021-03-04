import { Component, PropsComponent } from '../../../core/Component/index';
import template from './template.hbs';

import { MessageItem, PropsMessageItem } from './messageItem/index';

export interface PropsMessageList extends PropsComponent {
  messageItems: PropsMessageItem[];
}

export class MessageList extends Component<PropsMessageList> {
  constructor(props: PropsMessageList) {
    super(props, {
      messageItems: props.messageItems.map((v) => new MessageItem(v)),
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
