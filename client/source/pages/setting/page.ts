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

import { authService } from '../../services/auth.js';

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
        uploadName: 'upload_avatar',
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
      .then((data) => {
        this.children.fieldFirstName.props.initValue = data.first_name;
        this.children.fieldSecondName.props.initValue = data.second_name;
        this.children.fieldChatName.props.initValue = data.display_name || '';
        this.children.fieldEmail.props.initValue = data.email;
        this.children.fieldLogin.props.initValue = data.login;
        this.children.fieldPhone.props.initValue = data.phone;
        this.children.avatarUpload.children.avatar.props.url =
          data.avatar || '';
      })
      .catch((error) => {
        this.children.alert.props.text = error;
      });
  }

  public initEventLogout() {
    this.children.buttonLogout.$element.addEventListener('click', () => {
      authService.logout().catch((error) => {
        this.children.alert.props.text = error;
      });
    });
  }

  public submitHandler() {
    // authService
    // .signIn(this.inputsData?.getData() as TypeSignInRequest)
    // .then((data) => {
    //   this.children.alert.props.type = 'success';
    //   this.children.alert.props.text = String(data.message);
    // })
    // .catch((error: string) => {
    //   this.children.alert.props.type = 'error';
    //   this.children.alert.props.text = error;
    //   this.setErrorFrom(error);
    // });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initForm();
    this.initEventLogout();
    this.initFormFields();
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
