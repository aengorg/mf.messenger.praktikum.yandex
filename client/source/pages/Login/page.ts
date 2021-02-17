import { AbstractForm, PropsAbstractForm } from '../../components/Form/index';
import template from './template';

import { Title, PropsTitle } from '../../components/title/index';
import { Link, PropsLink } from '../../components/link/index';
import { Field, PropsField } from '../../components/field/index';
import { Button, PropsButton } from '../../components/button/index';
import { Alert } from '../../components/alert/index';

import { TypeSignInRequest } from '../../api/types';
import { authService } from '../../services/auth';
import { router } from '../../router/index';

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
      .then((data) => {
        this.children.alert.props.type = 'success';
        this.children.alert.props.text = String(data.message);
        router.go('#chat');
      })
      .catch((error: string) => {
        this.children.alert.props.type = 'error';
        this.children.alert.props.text = error;
        this.setErrorFrom(error);
      });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    if (authService.isAuth()) {
      router.go('#chat');
    } else {
      this.initForm();
    }
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
