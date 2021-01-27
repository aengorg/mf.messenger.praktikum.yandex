import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Button } from '../../components/button/index.js';
export class ModalPage extends Component {
    constructor(props) {
        super(props, {
            title: new Title({
                text: 'Remove friend?',
                level: 1,
                size: 1,
            }),
            buttonCancel: new Button({
                text: 'Cancel',
            }),
            buttonAdd: new Button({
                text: 'Remove',
                danger: true,
            }),
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