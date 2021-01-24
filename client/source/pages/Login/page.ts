import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { DataForm } from '../../core/DataForm/index.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';

export interface PropsLoginPage extends PropsComponent {
  title: PropsTitle;
  linkSignup: PropsLink;
  fieldLogin: PropsField;
  fieldPassword: PropsField;
  buttonLogin: PropsButton;
}

export class LoginPage extends Component<PropsLoginPage> {
  constructor(props: PropsLoginPage) {
    super(props, {
      title: new Title(props.title),
      linkSignup: new Link(props.linkSignup),
      fieldLogin: new Field(props.fieldLogin),
      fieldPassword: new Field(props.fieldPassword),
      buttonLogin: new Button(props.buttonLogin),
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    const inputsData = new DataForm('#form-login', ['login', 'password']);
    inputsData.addHandlerToSubmit();
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
