import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { DataForm } from '../../core/DataForm/index.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { FormError } from '../../components/Form/formError/index.js';

export interface PropsLoginPage extends PropsComponent {
  title: PropsTitle;
  linkSignup: PropsLink;
  fieldLogin: PropsField;
  fieldPassword: PropsField;
  buttonLogin: PropsButton;
}

export class LoginPage extends Component<PropsLoginPage> {
  formSelector: string;
  $form: HTMLFormElement | null;
  inputsData: DataForm | null;

  constructor(props: PropsLoginPage) {
    super(props, {
      title: new Title(props.title),
      linkSignup: new Link(props.linkSignup),
      fieldLogin: new Field(props.fieldLogin),
      fieldPassword: new Field(props.fieldPassword),
      buttonLogin: new Button(props.buttonLogin),
      error: new FormError({}),
    });

    this.formSelector = '#form-login';
    this.$form = null;
    this.inputsData = null;
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.inputsData = new DataForm(this.formSelector, ['login', 'password']);
    this.inputsData.addHandlerToSubmit(this.submitHandler.bind(this));
    this.$form = this.$element!.querySelector(this.formSelector);
  }

  public submitHandler(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const inputs: Field[] = [
      this.children.fieldLogin as Field,
      this.children.fieldPassword as Field,
    ];
    const errors = inputs.map((input) => {
      return input.validationHandler();
    });

    const isError = errors.some((arr) => arr.length > 0);

    if (isError) {
      this.$form?.classList.add('form--error');
      this.children.error.props.text = 'Error field(s)';
    } else {
      this.$form?.classList.remove('form--error');
      this.children.error.props.text = '';
      console.log(this.inputsData?.getData());
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
