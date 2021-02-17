import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses/index.js';
export class Button extends Component {
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
        var _a, _b, _c, _d;
        return {
            styleClasses: joinClasses([
                'button',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.primary) ? `button--primary` : '',
                ((_b = this.props) === null || _b === void 0 ? void 0 : _b.danger) ? `button--danger` : '',
                ((_c = this.props) === null || _c === void 0 ? void 0 : _c.size) ? `button--size-${this.props.size}` : '',
                ((_d = this.props) === null || _d === void 0 ? void 0 : _d.icon) ? `button--icon button--icon-${this.props.icon}` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=button.js.map