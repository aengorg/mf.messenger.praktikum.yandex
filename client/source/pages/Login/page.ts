import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/Form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';

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
      title: new Title(props.title),
      linkSignup: new Link(props.linkSignup),
      fieldLogin: new Field(props.fieldLogin),
      fieldPassword: new Field(props.fieldPassword),
      buttonLogin: new Button(props.buttonLogin),
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
