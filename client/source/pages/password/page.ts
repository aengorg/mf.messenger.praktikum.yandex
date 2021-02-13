import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/Form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';

import { rules } from '../../utils/validationRules/index.js';
import { router } from '../../router/index.js';
import { userService } from '../../services/user.js';
import { TypeUserPasswordRequest } from '../../api/types.js';

export interface PropsSettingPasswordPage extends PropsAbstractForm {
  title: PropsTitle;
  fieldOldPassword: PropsField;
  fieldNewPassword: PropsField;
  fieldNewPassword2: PropsField;
  buttonCancel: PropsButton;
  buttonSave: PropsButton;
}

export class SettingPasswordPage extends AbstractForm<PropsSettingPasswordPage> {
  constructor(props: PropsSettingPasswordPage) {
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

  public submitHandler(): void {
    userService
      .changePassword(this.inputsData?.getData() as TypeUserPasswordRequest)
      .then((data) => {
        this.children.alert.props.type = 'success';
        this.children.alert.props.text = String(data.message);
      })
      .catch((error: string) => {
        this.children.alert.props.type = 'error';
        this.children.alert.props.text = error;
      });
  }

  public validHandler() {
    const data = this.inputsData!.getData();

    const equalPasswords = rules.equalPasswords(
      data.newPassword as string,
      data.newPassword2 as string,
    );

    return [equalPasswords];
  }

  public initEventCancel() {
    this.children.buttonCancel.$element.addEventListener('click', () => {
      this.children.fieldOldPassword.props.initValue = '';
      this.children.fieldNewPassword.props.initValue = '';
      this.children.fieldNewPassword2.props.initValue = '';
      router.back();
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initForm();
    this.initEventCancel();
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
