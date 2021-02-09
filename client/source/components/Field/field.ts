import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { FieldError } from './fieldError/index.js';
import { TRule, TErrors } from '../../utils/validationRules/index.js';
import { validation } from '../../utils/validationRules/validation.js';
import { joinClasses } from '../../utils/joinClasses/index.js';

export type IconsField = 'search';

export interface PropsField extends PropsComponent {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  validation?: {
    rules: TRule[];
    events: string[];
  };
  initValue?: string;
  width?: 'unlimit';
  icon?: IconsField;
}

export class Field extends Component<PropsField> {
  $input: HTMLInputElement | null;
  isError: boolean;

  constructor(props: PropsField) {
    super(props, {
      error: new FieldError({}),
    });

    this.$input = null;
    this.isError = false;
  }

  public addValidation(): void {
    if (this.props.validation !== undefined) {
      if (this.$input !== null) {
        const { events } = this.props.validation;
        events.forEach((event) => {
          this.$input!.addEventListener(
            event,
            this.validationHandler.bind(this),
          );
        });
      }
    }
  }

  public validationHandler(): TErrors {
    if (this.props.validation !== undefined) {
      const errors: TErrors = validation(
        this.$input?.value || '',
        this.props.validation.rules,
      );
      this.setError(errors);
      return errors;
    }
    return [];
  }

  private setError(errors: TErrors): void {
    if (errors.length > 0) {
      this.isError = true;
      this.children.error.props.text = errors[0];
      this.$input?.classList.add('field_input--error');
    } else {
      this.isError = false;
      this.children.error.props.text = '';
      this.$input?.classList.remove('field_input--error');
    }
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.$input = this.$element!.querySelector(`[name=${this.props.name}]`);
    this.addValidation();
  }

  public updatedHandler() {
    this.$input = this.$element!.querySelector(`[name=${this.props.name}]`);
    this.addValidation();
  }

  public beforeUpdateHandler() {
    return true;
  }

  public beforeRemoveHandler() {
    if (this.props.validation !== undefined) {
      this.props.validation.events.forEach((event) => {
        if (this.$input !== null) {
          this.$input.removeEventListener(event, this.validationHandler);
        }
      });
    }
  }

  public getContext() {
    return {
      value: this.props.initValue,
      fieldClasses: joinClasses(['field']),
      labelClasses: joinClasses(['field_label']),
      inputClasses: joinClasses([
        'field_input',
        this.props.width ? `field_input--width-${this.props.width}` : '',
        this.props.icon
          ? `field_input--icon field_input--icon-${this.props.icon}`
          : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
