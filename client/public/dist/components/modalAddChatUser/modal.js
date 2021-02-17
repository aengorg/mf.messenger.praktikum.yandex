import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Title } from '../title/index.js';
import { Field } from '../field/index.js';
import { Button } from '../button/index.js';
import { UserList } from '../Chat/userList/index.js';
export class ModalAddChatUser extends Component {
    constructor(props) {
        super(props, {
            title: new Title({
                text: props.title,
                level: 1,
                size: 2,
            }),
            fieldLogin: new Field(props.fieldLogin),
            userList: new UserList(props.userItems),
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
    createdHandler() { }
    updatedHandler() {
        this.initEventCancel();
    }
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