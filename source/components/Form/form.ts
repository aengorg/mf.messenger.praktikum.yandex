import {
  Children,
  Component,
  PropsComponent,
} from '../../core/Component/index';

import { DataForm } from '../../core/DataForm/index';
import { FormError } from './formError/index';

import { Field } from '../field/index';

// TODO задумано тут перечислить все поля ввода
// export type TInputs = Field

export interface PropsAbstractForm extends PropsComponent {
  formSelector: string;
  defaultErrorForm?: string;
}

export abstract class AbstractForm<PropsFormComponent> extends Component<any> {
  formSelector: string;
  $form: HTMLFormElement | null;
  inputsData: DataForm | null;
  defaultErrorForm: string;

  constructor(
    props: PropsAbstractForm & PropsFormComponent,
    children: Children,
  ) {
    super(props, {
      ...children,
      error: new FormError({}),
    });

    this.defaultErrorForm = props.defaultErrorForm || 'Error form';
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

    const valid = this.valid();
    if (valid) {
      this.setErrorFrom(valid);
    } else {
      this.delErrorFrom();
      this.submitHandler();
    }
  }

  public setErrorFrom(text: string): void {
    this.$form?.classList.add('form--error');
    this.children.error.props.text = text;
  }

  public delErrorFrom(): void {
    this.$form?.classList.remove('form--error');
    this.children.error.props.text = '';
  }

  public valid(): false | string {
    const inputs: Field[] = Object.values(this.children).filter((child) => {
      // TODO использовать перечисленные поля
      // происходит фильтрация от других не валидируемых компонентов
      return child instanceof Field;
    });

    const errors = inputs.map((input) => {
      return input.validationHandler();
    });

    // проверка полей формы
    if (errors.some((arr) => arr.length > 0)) {
      return this.defaultErrorForm;
    }

    // кастомная проверка формы
    const customValidation = this.validHandler();
    if (customValidation.some((arr) => arr.length > 0)) {
      return customValidation[0];
    }

    return false;
  }

  // переопределять на странице
  public validHandler(): string[] {
    return [];
  }

  // переопределять на странице
  public submitHandler(): void {}
}
