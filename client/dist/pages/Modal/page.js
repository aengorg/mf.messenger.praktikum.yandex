import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { rules } from '../../utils/validationRules/index.js';
export class ModalPage extends Component {
    constructor(props) {
        super(props, {
            title: new Title({
                text: 'Add friend',
                level: 1,
                size: 1,
            }),
            fieldLogin: new Field({
                name: 'login',
                label: 'Login',
                type: 'text',
                placeholder: 'Ivan',
                validation: {
                    events: ['blur'],
                    rules: [rules.required],
                },
            }),
            buttonCancel: new Button({
                text: 'Cancel',
            }),
            buttonAdd: new Button({
                text: 'Add',
                primary: true,
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