import { AbstractForm, } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
export class SignupPage extends AbstractForm {
    constructor(props) {
        super(props, {
            title: new Title(props.title),
            linkLogin: new Link(props.linkLogin),
            fieldEmail: new Field(props.fieldEmail),
            fieldLogin: new Field(props.fieldLogin),
            fieldFirstName: new Field(props.fieldFirstName),
            fieldSecondName: new Field(props.fieldSecondName),
            fieldPhone: new Field(props.fieldPhone),
            fieldPassword: new Field(props.fieldPassword),
            fieldPassword2: new Field(props.fieldPassword2),
            buttonSignup: new Button(props.buttonSignup),
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