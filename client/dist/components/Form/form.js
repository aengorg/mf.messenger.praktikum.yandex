import { Component, } from '../../core/Component/index.js';
import { DataForm } from '../../core/DataForm/index.js';
import { FormError } from './formError/index.js';
import { Field } from '../field/index.js';
export class AbstractForm extends Component {
    constructor(props, children) {
        super(props, Object.assign(Object.assign({}, children), { error: new FormError({}) }));
        this.formSelector = props.formSelector;
        this.$form = null;
        this.inputsData = null;
    }
    // обязательно вызвать в createdHandler
    initForm() {
        this.$form = this.$element.querySelector(this.formSelector);
        this.inputsData = new DataForm(this.formSelector);
        this.inputsData.addHandlerToSubmit(this.validAndSubmit.bind(this));
    }
    validAndSubmit(e) {
        var _a, _b;
        e.preventDefault();
        e.stopPropagation();
        if (this.isValidation()) {
            (_a = this.$form) === null || _a === void 0 ? void 0 : _a.classList.add('form--error');
            this.children.error.props.text = 'Error field(s)';
        }
        else {
            (_b = this.$form) === null || _b === void 0 ? void 0 : _b.classList.remove('form--error');
            this.children.error.props.text = '';
            this.submitHandler();
        }
    }
    isValidation() {
        const inputs = Object.values(this.children).filter((child) => {
            // TODO использовать перечисленные поля
            return child instanceof Field;
        });
        const errors = inputs.map((input) => {
            return input.validationHandler();
        });
        return errors.some((arr) => arr.length > 0);
    }
    submitHandler() {
        var _a;
        console.log((_a = this.inputsData) === null || _a === void 0 ? void 0 : _a.getData());
    }
}
//# sourceMappingURL=form.js.map