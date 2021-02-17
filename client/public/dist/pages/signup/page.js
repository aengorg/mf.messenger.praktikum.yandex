import { AbstractForm } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';
import { authService } from '../../services/auth.js';
import { rules } from '../../utils/validationRules/index.js';
import { router } from '../../router/index.js';
export class SignupPage extends AbstractForm {
    constructor(props) {
        super(props, {
            alert: new Alert({ delete: 3000 }),
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
    submitHandler() {
        var _a;
        authService
            .signUp((_a = this.inputsData) === null || _a === void 0 ? void 0 : _a.getData())
            .then(() => {
            this.children.alert.props.type = 'success';
            this.children.alert.props.text = 'ok';
            router.go('#chat');
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
            this.setErrorFrom(error);
        });
    }
    validHandler() {
        const data = this.inputsData.getData();
        const equalPasswords = rules.equalPasswords(data.password, data.password2);
        return [equalPasswords];
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