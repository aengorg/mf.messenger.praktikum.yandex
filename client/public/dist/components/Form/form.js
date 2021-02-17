import { Component, } from '../../core/Component/index.js';
import { DataForm } from '../../core/DataForm/index.js';
import { FormError } from './formError/index.js';
import { Field } from '../field/index.js';
export class AbstractForm extends Component {
    constructor(props, children) {
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
    initForm() {
        this.$form = this.$element.querySelector(this.formSelector);
        this.inputsData = new DataForm(this.formSelector);
        this.inputsData.addHandlerToSubmit(this.validAndSubmit.bind(this));
    }
    validAndSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const valid = this.valid();
        if (valid) {
            this.setErrorFrom(valid);
        }
        else {
            this.delErrorFrom();
            this.submitHandler();
        }
    }
    setErrorFrom(text) {
        var _a;
        (_a = this.$form) === null || _a === void 0 ? void 0 : _a.classList.add('form--error');
        this.children.error.props.text = text;
    }
    delErrorFrom() {
        var _a;
        (_a = this.$form) === null || _a === void 0 ? void 0 : _a.classList.remove('form--error');
        this.children.error.props.text = '';
    }
    valid() {
        const inputs = Object.values(this.children).filter((child) => {
            // TODO использовать перечисленные поля
            // происходит фильтрация от других не валидируемых компонентов
            return child instanceof Field;
        });
        let errors = inputs.map((input) => {
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
    validHandler() {
        return [];
    }
    // переопределять на странице
    submitHandler() { }
}
//# sourceMappingURL=form.js.map