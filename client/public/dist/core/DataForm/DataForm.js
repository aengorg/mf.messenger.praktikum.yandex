export class DataForm {
    constructor(selector, names) {
        this.$form = document.querySelector(selector);
        if (names !== undefined) {
            this.findInputs(names);
        }
    }
    submitHandler(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(this.getData());
    }
    findInputs(names) {
        const inputs = {};
        names.forEach((name) => {
            var _a;
            const input = (_a = this.$form) === null || _a === void 0 ? void 0 : _a.querySelector(`[name=${name}]`);
            input === null || input === void 0 ? void 0 : input.addEventListener('submit', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
            if (input) {
                inputs[name] = input;
            }
        });
        this.inputs = inputs;
    }
    addHandlerToSubmit(callback) {
        var _a;
        (_a = this.$form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (callback === undefined) {
                this.submitHandler(e);
            }
            else {
                callback(e);
            }
        });
    }
    getData() {
        const data = {};
        if (this.$form) {
            const form = new FormData(this.$form);
            for (let [key, value] of form.entries())
                data[key] = value;
        }
        return data;
    }
    getInputs() {
        return this.inputs;
    }
}
//# sourceMappingURL=DataForm.js.map