import { Component } from '../../../core/Component/index.js';
import template from './template.js';
import { ChatItem } from './ChatItem/index.js';
export class ChatList extends Component {
    constructor(props) {
        super(props, {
            chatItems: props.chatItems.map((v) => new ChatItem({
                ...v,
                className: 'chat-list_item',
                selectChatId: props.selectChatId,
            })),
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.$element.classList.add('chat-list_mid');
    }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        return {};
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=chatList.js.map