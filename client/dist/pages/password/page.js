import { AbstractForm, } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
export class SettingPasswordPage extends AbstractForm {
    constructor(props) {
        super(props, {
            title: new Title(props.title),
            fieldOldPassword: new Field(props.fieldOldPassword),
            fieldNewPassword: new Field(props.fieldNewPassword),
            fieldNewPassword2: new Field(props.fieldNewPassword2),
            buttonCancel: new Button(props.buttonCancel),
            buttonSave: new Button(props.buttonSave),
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.initForm();
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
//# sourceMappingURL=page.js.map