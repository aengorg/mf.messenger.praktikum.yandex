import { AbstractForm, } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
export class LoginPage extends AbstractForm {
    constructor(props) {
        super(props, {
            title: new Title(props.title),
            linkSignup: new Link(props.linkSignup),
            fieldLogin: new Field(props.fieldLogin),
            fieldPassword: new Field(props.fieldPassword),
            buttonLogin: new Button(props.buttonLogin),
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