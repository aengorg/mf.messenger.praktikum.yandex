import { Component } from '../../../core/Component/index.js';
import template from './template.js';
export class FieldError extends Component {
    constructor(props) {
        super(props);
    }
    beforeCreateHandler() { }
    createdHandler() { }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        return {};
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=fieldError.js.map