import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/Form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';

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
