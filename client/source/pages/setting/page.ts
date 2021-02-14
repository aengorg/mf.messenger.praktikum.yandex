import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';
import { AvatarUpload } from '../../components/avatarUpload/index.js';

import { TypeUserProfileRequest } from '../../api/types.js';
import { authService } from '../../services/auth.js';
import { userService } from '../../services/user.js';
import { router } from '../../router/index.js';

export interface PropsSettingPage extends PropsAbstractForm {
  title: PropsTitle;
  fieldFirstName: PropsField;
  fieldSecondName: PropsField;
  fieldChatName: PropsField;
  fieldEmail: PropsField;
  fieldLogin: PropsField;
  fieldPhone: PropsField;
  linkPasswordSetting: PropsLink;
  titleAvatar: PropsTitle;
  buttonLogout: PropsButton;
  buttonCancel: PropsButton;
  buttonSave: PropsButton;
  textPassword: string;
  avatarUpload: {
    uploadText: string;
    title: string;
    removeText: string;
  };
}

export class SettingPage extends AbstractForm<PropsSettingPage> {
  constructor(props: PropsSettingPage) {
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

  public initFormFields() {
    authService
      .getUser()
      .then(
        ({
          avatar,
          first_name,
          second_name,
          display_name,
          email,
          login,
          phone,
        }) => {
          this.children.fieldFirstName.props.initValue = first_name;
          this.children.fieldSecondName.props.initValue = second_name;
          this.children.fieldChatName.props.initValue = display_name || '';
          this.children.fieldEmail.props.initValue = email;
          this.children.fieldLogin.props.initValue = login;
          this.children.fieldPhone.props.initValue = phone;
          this.children.avatarUpload.children.avatar.props.url = avatar;
        },
      )
      .catch((error) => {
        this.children.alert.props.text = error;
      });
  }

  public initEventLogout() {
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

  public initEventUploadAvatar() {
    this.children.avatarUpload.children.upload.$element.addEventListener(
      'change',
      () => {
        const avaData = new FormData();
        avaData.append('avatar', this.children.avatarUpload.input.files[0]);
        this.children.avatarUpload.children.avatar.props.error = false;

        userService
          .changeAvatar(avaData)
          .then((data) => {
            this.children.alert.props.type = 'success';
            this.children.alert.props.text = String(data.message);
          })
          .catch((error: string) => {
            this.children.alert.props.type = 'error';
            this.children.alert.props.text = error;
            this.children.avatarUpload.children.avatar.props.error = true;
          });
      },
    );
  }

  public initEventCancel() {
    this.children.buttonCancel.$element.addEventListener('click', () => {
      router.back();
    });
  }

  public submitHandler() {
    userService
      .changeProfile(this.inputsData?.getData() as TypeUserProfileRequest)
      .then((data) => {
        this.children.alert.props.type = 'success';
        this.children.alert.props.text = String(data.message);
        router.go('#error404');
      })
      .catch((error: string) => {
        this.children.alert.props.type = 'error';
        this.children.alert.props.text = error;
        this.setErrorFrom(error);
      });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initForm();
    this.initFormFields();
    this.initEventLogout();
    this.initEventCancel();
    this.initEventUploadAvatar();
  }

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public beforeRemoveHandler() {}

  public getContext() {
    return {};
  }

  public render() {
    return template;
  }
}
