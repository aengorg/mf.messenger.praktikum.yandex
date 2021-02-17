import { AbstractForm } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';
import { authService } from '../../services/auth.js';
import { router } from '../../router/index.js';
export class LoginPage extends AbstractForm {
    constructor(props) {
        super(props, {
            alert: new Alert({ delete: 3000 }),
            title: new Title(props.title),
            linkSignup: new Link(props.linkSignup),
            fieldLogin: new Field(props.fieldLogin),
            fieldPassword: new Field(props.fieldPassword),
            buttonLogin: new Button(props.buttonLogin),
        });
    }
    submitHandler() {
        var _a;
        authService
            .signIn((_a = this.inputsData) === null || _a === void 0 ? void 0 : _a.getData())
            .then((data) => {
            this.children.alert.props.type = 'success';
            this.children.alert.props.text = String(data.message);
            router.go('#chat');
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
            this.setErrorFrom(error);
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        if (authService.isAuth()) {
            router.go('#chat');
        }
        else {
            this.initForm();
        }
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