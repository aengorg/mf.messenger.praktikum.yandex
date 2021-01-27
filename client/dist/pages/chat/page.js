import { Component } from '../../core/Component/index.js';
import template from './template.js';
// import { Title, PropsTitle } from '../../components/title/index.js';
import { Avatar } from '../../components/avatar/index.js';
import { Button } from '../../components/button/index.js';
import { Field } from '../../components/field/index.js';
import { Link } from '../../components/link/index.js';
export class ChatPage extends Component {
    constructor(props) {
        super(props, {
            fieldSearch: new Field(props.fieldSearch),
            buttonAddUser: new Button(props.buttonCreateGroup),
            buttonCreateGroup: new Button(props.buttonCreateGroup),
            linkProfile: new Link(props.linkProfile),
            avatar: new Avatar(props.avatar),
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
//# sourceMappingURL=page.js.map