import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { TRule, TErrors } from '../../utils/validationRules/index.js';
import { validation } from '../../utils/validationRules/validation.js';
import { joinClasses } from '../../utils/joinClasses.js';

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
  error?: string;
}

export class Field extends Component<PropsField> {
  $input: HTMLInputElement | null;
  value: string;

  constructor(props: PropsField) {
    super(props);
    this.$input = null;
    this.value = props.initValue || '';
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

  private validationHandler(event: Event): void {
    if (this.props.validation !== undefined) {
      const target = event.target as HTMLInputElement;
      const errors: TErrors = validation(
        target.value,
        this.props.validation.rules,
      );
      this.setError(errors);
    }
  }

  private setError(errors: TErrors): void {
    if (errors.length > 0) {
      this.props.error = errors[0];
    } else {
      this.props.error = '';
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
        console.log('delete event');
        this.$input?.removeEventListener(event, this.validationHandler);
      });
    }
  }

  public getContext() {
    return {
      inputClasses: joinClasses([
        'field_input',
        this.props.error ? 'field_input--error' : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
