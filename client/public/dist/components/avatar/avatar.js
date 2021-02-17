import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses/index.js';
import { Status } from '../status/index.js';
export class Avatar extends Component {
    constructor(props) {
        super(props, {
            status: new Status({
                className: `avatar_status ${props.className}`,
                status: props.status,
            }),
        });
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
            styleComponent: joinClasses([
                'avatar',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.size) ? `avatar--size-${this.props.size}` : '',
                ((_b = this.props) === null || _b === void 0 ? void 0 : _b.error) ? `avatar--error` : '',
            ]),
            styleImage: joinClasses([
                'avatar_image',
                ((_c = this.props) === null || _c === void 0 ? void 0 : _c.error) ? `avatar_image--hide` : '',
                ((_d = this.props) === null || _d === void 0 ? void 0 : _d.url) ? '' : `avatar_image--hide`,
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=avatar.js.map