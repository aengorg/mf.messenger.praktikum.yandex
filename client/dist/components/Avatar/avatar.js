import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses.js';
export class Avatar extends Component {
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
        var _a;
        return {
            styleClasses: joinClasses([
                'avatar',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.size) ? `avatar--size-${this.props.size}` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=avatar.js.map