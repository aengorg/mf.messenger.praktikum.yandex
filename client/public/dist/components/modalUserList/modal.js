import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Title } from '../title/index.js';
import { Button } from '../button/index.js';
import { UserList } from '../Chat/userList/index.js';
export class ModalListUser extends Component {
    constructor(props) {
        super(props, {
            userList: new UserList(props.userItems),
            title: new Title({
                text: props.title,
                level: 1,
                size: 2,
            }),
            buttonClose: new Button(props.buttonClose),
        });
    }
    initEventCancel() {
        this.children.buttonClose.$element.addEventListener('click', (e) => {
            e.preventDefault();
            this.props.show = false;
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.initEventCancel();
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
//# sourceMappingURL=modal.js.map