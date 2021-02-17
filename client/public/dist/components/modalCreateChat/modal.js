import { AbstractForm } from '../Form/form.js';
import template from './template.js';
import { Title } from '../title/index.js';
import { Field } from '../field/index.js';
import { Button } from '../button/index.js';
export class ModalCreateChat extends AbstractForm {
    constructor(props) {
        super(props, {
            title: new Title({
                text: props.title,
                level: 1,
                size: 2,
            }),
            fieldTitle: new Field(props.fieldTitle),
            buttonCancel: new Button(props.buttonCancel),
            buttonCreate: new Button(props.buttonCreate),
        });
    }
    initEventCancel() {
        this.children.buttonCancel.$element.addEventListener('click', (e) => {
            e.preventDefault();
            this.props.show = false;
        });
    }
    beforeCreateHandler() { }
    createdHandler() { }
    updatedHandler() {
        this.initForm();
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