import { AbstractForm, PropsAbstractForm } from '../../components/Form/index';
import template from './template';

import { Title, PropsTitle } from '../../components/title/index';
import { Link, PropsLink } from '../../components/link/index';
import { Field, PropsField } from '../../components/field/index';
import { Button, PropsButton } from '../../components/button/index';
import { Alert } from '../../components/alert/index';

import { TypeSignUpForm } from '../../api/types';
import { authService } from '../../services/auth';
import { rules } from '../../utils/validationRules/index';
import { router } from '../../router/index';

export interface PropsSignupPage extends PropsAbstractForm {
  title: PropsTitle;
  linkLogin: PropsLink;
  fieldEmail: PropsField;
  fieldLogin: PropsField;
  fieldFirstName: PropsField;
  fieldSecondName: PropsField;
  fieldPhone: PropsField;
  fieldPassword: PropsField;
  fieldPassword2: PropsField;
  buttonSignup: PropsButton;
}

export class SignupPage extends AbstractForm<PropsSignupPage> {
  constructor(props: PropsSignupPage) {
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

  public submitHandler(): void {
    authService
      .signUp(this.inputsData?.getData() as TypeSignUpForm)
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

  public validHandler() {
    const data = this.inputsData!.getData();
    const equalPasswords = rules.equalPasswords(
      data.password as string,
      data.password2 as string,
    );
    return [equalPasswords];
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initForm();
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
