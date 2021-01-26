import {
  Children,
  Component,
  PropsComponent,
  PropsComponentEmpty,
} from '../../core/Component/index.js';

import { DataForm } from '../../core/DataForm/index.js';
import { FormError } from './formError/index.js';

import { Field } from '../field/index.js';

// TODO задумано тут перечислить все поля ввода
// export type TInputs = Field

export interface PropsAbstractForm extends PropsComponent {
  formSelector: string;
}

export abstract class AbstractForm<
  PropsFormComponent
> extends Component<PropsComponentEmpty> {
  formSelector: string;
  $form: HTMLFormElement | null;
  inputsData: DataForm | null;

  constructor(
    props: PropsAbstractForm & PropsFormComponent,
    children: Children,
  ) {
    super(props, {
      ...children,
      error: new FormError({}),
    });

    this.formSelector = props.formSelector;
    this.$form = null;
    this.inputsData = null;
  }

  // обязательно вызвать в createdHandler
  public initForm(): void {
    this.$form = this.$element!.querySelector(this.formSelector);
    this.inputsData = new DataForm(this.formSelector);
    this.inputsData.addHandlerToSubmit(this.validAndSubmit.bind(this));
  }

  public validAndSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    if (this.isValidation()) {
      this.$form?.classList.add('form--error');
      this.children.error.props.text = 'Error field(s)';
    } else {
      this.$form?.classList.remove('form--error');
      this.children.error.props.text = '';
      this.submitHandler();
    }
  }

  public isValidation(): boolean {
    const inputs: Field[] = Object.values(this.children).filter((child) => {
      // TODO использовать перечисленные поля
      return child instanceof Field;
    });

    const errors = inputs.map((input) => {
      return input.validationHandler();
    });

    return errors.some((arr) => arr.length > 0);
  }

  public submitHandler(): void {
    console.log(this.inputsData?.getData());
  }
}
