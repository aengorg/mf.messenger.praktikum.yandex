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

import { TypeSignInRequest } from '../../api/types.js';
import { authService } from '../../services/auth.js';

export interface PropsLoginPage extends PropsAbstractForm {
  title: PropsTitle;
  linkSignup: PropsLink;
  fieldLogin: PropsField;
  fieldPassword: PropsField;
  buttonLogin: PropsButton;
}

export class LoginPage extends AbstractForm<PropsLoginPage> {
  constructor(props: PropsLoginPage) {
    super(props, {
      alert: new Alert({ delete: 3000 }),
      title: new Title(props.title),
      linkSignup: new Link(props.linkSignup),
      fieldLogin: new Field(props.fieldLogin),
      fieldPassword: new Field(props.fieldPassword),
      buttonLogin: new Button(props.buttonLogin),
    });
  }

  public submitHandler(): void {
    authService
      .signIn(this.inputsData?.getData() as TypeSignInRequest)
      .then((data: any) => {
        this.children.alert.props.type = 'success';
        this.children.alert.props.text = String(data.message);
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
