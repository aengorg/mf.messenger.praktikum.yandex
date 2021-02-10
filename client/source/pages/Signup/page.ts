import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/Form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Alert } from '../../components/alert/index.js';

import { authService } from '../../services/auth.js';
import { TypeSignUpForm } from '../../api/types.js';

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
      })
      .catch((error) => {
        this.children.alert.props.type = 'error';
        this.children.alert.props.text = error;
        this.setErrorFrom(error);
      });
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
