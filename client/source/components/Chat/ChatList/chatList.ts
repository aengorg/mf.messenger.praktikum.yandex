import { Component, PropsComponent } from '../../../core/Component/index';
import template from './template';

import { ChatItem, PropsChatItem } from './ChatItem/index';

export interface PropsChatList extends PropsComponent {
  chatItems: PropsChatItem[];
  selectChatId?: number;
}

export class ChatList extends Component<PropsChatList> {
  constructor(props: PropsChatList) {
    super(props, {
      chatItems: props.chatItems.map(
        (v) =>
          new ChatItem({
            ...v,
            className: 'chat-list_item',
            selectChatId: props.selectChatId,
          }),
      ),
    });
  }
  public beforeCreateHandler() {}
  public createdHandler() {
    this.$element!.classList.add('chat-list_mid');
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
