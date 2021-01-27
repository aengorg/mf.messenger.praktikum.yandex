import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { FieldError } from './fieldError/index.js';
import { validation } from '../../utils/validationRules/validation.js';
import { joinClasses } from '../../utils/joinClasses.js';
export class Field extends Component {
    constructor(props) {
        super(props, {
            error: new FieldError({}),
        });
        this.$input = null;
        this.value = props.initValue || '';
        this.isError = false;
    }
    addValidation() {
        if (this.props.validation !== undefined) {
            if (this.$input !== null) {
                const { events } = this.props.validation;
                events.forEach((event) => {
                    this.$input.addEventListener(event, this.validationHandler.bind(this));
                });
            }
        }
    }
    validationHandler() {
        var _a;
        if (this.props.validation !== undefined) {
            const errors = validation(((_a = this.$input) === null || _a === void 0 ? void 0 : _a.value) || '', this.props.validation.rules);
            this.setError(errors);
            return errors;
        }
        return [];
    }
    setError(errors) {
        var _a, _b;
        if (errors.length > 0) {
            this.isError = true;
            this.children.error.props.text = errors[0];
            (_a = this.$input) === null || _a === void 0 ? void 0 : _a.classList.add('field_input--error');
        }
        else {
            this.isError = false;
            this.children.error.props.text = '';
            (_b = this.$input) === null || _b === void 0 ? void 0 : _b.classList.remove('field_input--error');
        }
    }
    beforeCreateHandler() { }
    createdHandler() {
        this.$input = this.$element.querySelector(`[name=${this.props.name}]`);
        this.addValidation();
    }
    updatedHandler() {
        this.$input = this.$element.querySelector(`[name=${this.props.name}]`);
        this.addValidation();
    }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() {
        if (this.props.validation !== undefined) {
            this.props.validation.events.forEach((event) => {
                var _a;
                console.log('delete event');
                (_a = this.$input) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, this.validationHandler);
            });
        }
    }
    getContext() {
        return {
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
    render() {
        return template;
    }
}
//# sourceMappingURL=field.js.map