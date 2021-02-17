import { Component } from '../../../../core/Component/index.js';
import template from './template.js';
import { Avatar } from '../../../avatar/index.js';
import { Button } from '../../../button/index.js';
import { joinClasses } from '../../../../utils/joinClasses/index.js';
import { Icon } from '../../../Icon/icon.js';
export class UserItem extends Component {
    constructor(props) {
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
    beforeCreateHandler() { }
    createdHandler() { }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        var _a;
        const isAdmin = ((_a = this.props) === null || _a === void 0 ? void 0 : _a.role) === 'admin';
        return {
            styleClasses: joinClasses([
                'user-item',
                isAdmin ? 'user-item--admin' : '',
            ]),
            isAdmin: isAdmin,
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=userItem.js.map