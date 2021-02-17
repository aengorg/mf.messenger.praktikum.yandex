import { Component } from '../../../core/Component/index.js';
import template from './template.js';
import { UserItem } from './UserItem/index.js';
export class UserList extends Component {
    constructor(props) {
        super(props, {
            userItems: props.userItems.map((v) => new UserItem(v)),
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
        return {};
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=userList.js.map