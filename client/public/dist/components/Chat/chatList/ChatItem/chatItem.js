import { Component } from '../../../../core/Component/index.js';
import template from './template.js';
import { Avatar } from '../../../avatar/index.js';
import { joinClasses } from '../../../../utils/joinClasses/index.js';
export class ChatItem extends Component {
    constructor(props) {
        super(props, { avatar: new Avatar(props.avatar) });
    }
    beforeCreateHandler() { }
    createdHandler() { }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        var _a;
        return {
            styleClasses: joinClasses([
                'chat-item',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.selectChatId) === this.props.id ? `chat-item--select` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=chatItem.js.map