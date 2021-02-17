import { AbstractForm } from '../../components/form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';
import { AvatarUpload } from '../../components/avatarUpload/index.js';
import { authService } from '../../services/auth.js';
import { userService } from '../../services/user.js';
import { router } from '../../router/index.js';
export class SettingPage extends AbstractForm {
    constructor(props) {
        super(props, {
            alert: new Alert({ delete: 3000, type: 'error' }),
            title: new Title(props.title),
            fieldFirstName: new Field(props.fieldFirstName),
            fieldSecondName: new Field(props.fieldSecondName),
            fieldChatName: new Field(props.fieldChatName),
            fieldEmail: new Field(props.fieldEmail),
            fieldLogin: new Field(props.fieldLogin),
            fieldPhone: new Field(props.fieldPhone),
            linkPasswordSetting: new Link(props.linkPasswordSetting),
            avatarUpload: new AvatarUpload({
                title: props.avatarUpload.title,
                urlAvatar: '',
                uploadText: props.avatarUpload.uploadText,
                uploadName: 'avatar',
                removeText: props.avatarUpload.removeText,
                removeName: 'remove_photo',
            }),
            buttonLogout: new Button(props.buttonLogout),
            buttonCancel: new Button(props.buttonCancel),
            buttonSave: new Button(props.buttonSave),
        });
    }
    initFormFields() {
        authService
            .getUser()
            .then(({ avatar, first_name, second_name, display_name, email, login, phone, }) => {
            this.children.fieldFirstName.props.initValue = first_name;
            this.children.fieldSecondName.props.initValue = second_name;
            this.children.fieldChatName.props.initValue = display_name || '';
            this.children.fieldEmail.props.initValue = email;
            this.children.fieldLogin.props.initValue = login;
            this.children.fieldPhone.props.initValue = phone;
            this.children.avatarUpload.children.avatar.props.url = avatar;
        })
            .catch((error) => {
            this.children.alert.props.text = error;
        });
    }
    initEventLogout() {
        this.children.buttonLogout.$element.addEventListener('click', () => {
            authService
                .logout()
                .catch((error) => {
                this.children.alert.props.text = error;
            })
                .finally(() => {
                router.go('#login');
            });
        });
    }
    initEventUploadAvatar() {
        this.children.avatarUpload.children.upload.$element.addEventListener('change', () => {
            const avaData = new FormData();
            avaData.append('avatar', this.children.avatarUpload.input.files[0]);
            this.children.avatarUpload.children.avatar.props.error = false;
            userService
                .changeAvatar(avaData)
                .then((data) => {
                this.children.alert.props.type = 'success';
                this.children.alert.props.text = String(data.message);
            })
                .catch((error) => {
                this.children.alert.props.type = 'error';
                this.children.alert.props.text = error;
                this.children.avatarUpload.children.avatar.props.error = true;
            });
        });
    }
    initEventCancel() {
        this.children.buttonCancel.$element.addEventListener('click', () => {
            router.back();
        });
    }
    submitHandler() {
        var _a;
        userService
            .changeProfile((_a = this.inputsData) === null || _a === void 0 ? void 0 : _a.getData())
            .then((data) => {
            this.children.alert.props.type = 'success';
            this.children.alert.props.text = String(data.message);
        })
            .catch((error) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
            this.setErrorFrom(error);
        });
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.initForm();
        this.initFormFields();
        this.initEventLogout();
        this.initEventCancel();
        this.initEventUploadAvatar();
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