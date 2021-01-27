import { Component } from '../../core/Component/index.js';
import { joinClasses } from '../../utils/joinClasses.js';
import template from './template.js';
export class Title extends Component {
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
        var _a, _b;
        return {
            styleClasses: joinClasses([
                'title',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.size) ? `title--size-${this.props.size}` : '',
                ((_b = this.props) === null || _b === void 0 ? void 0 : _b.color) ? `title--color-${this.props.color}` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=title.js.map