import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses/index.js';
export class Alert extends Component {
    constructor(props) {
        super(props);
    }
    beforeCreateHandler() { }
    createdHandler() { }
    updatedHandler() {
        if (this.props.delete && this.props.text) {
            setTimeout(() => {
                this.props.text = '';
            }, this.props.delete);
        }
    }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        var _a;
        return {
            styleClasses: joinClasses([
                'alert',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.type) ? `alert--type-${this.props.type}` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=alert.js.map