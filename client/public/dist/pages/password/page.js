import { AbstractForm } from '../../components/Form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';
import { rules } from '../../utils/validationRules/index.js';
import { router } from '../../router/index.js';
import { userService } from '../../services/user.js';
export class SettingPasswordPage extends AbstractForm {
    constructor(props) {
        super(props, {
            alert: new Alert({ delete: 3000 }),
            title: new Title(props.title),
            fieldOldPassword: new Field(props.fieldOldPassword),
            fieldNewPassword: new Field(props.fieldNewPassword),
            fieldNewPassword2: new Field(props.fieldNewPassword2),
            buttonCancel: new Button(props.buttonCancel),
            buttonSave: new Button(props.buttonSave),
        });
    }
    submitHandler() {
        var _a;
        userService
            .changePassword((_a = this.inputsData) === null || _a === void 0 ? void 0 : _a.getData())
            .then((data) => {
            this.children.alert.props.type = 'success';
            this.children.alert.props.text = String(data.message);
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
        });
    }
    validHandler() {
        const data = this.inputsData.getData();
        const equalPasswords = rules.equalPasswords(data.newPassword, data.newPassword2);
        return [equalPasswords];
    }
    initEventCancel() {
        this.children.buttonCancel.$element.addEventListener('click', () => {
            this.children.fieldOldPassword.props.initValue = '';
            this.children.fieldNewPassword.props.initValue = '';
            this.children.fieldNewPassword2.props.initValue = '';
            router.back();
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.initForm();
        this.initEventCancel();
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