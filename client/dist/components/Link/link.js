import { Component } from '../../core/Component/index.js';
import { joinClasses } from '../../utils/joinClasses.js';
import template from './template.js';
export class Link extends Component {
    constructor(props) {
        super(props);
    }
    beforeCreateHandler() { }
    createdHandler() {
        var _a;
        // временный хак для смены страницы
        (_a = this.$element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            setTimeout(() => {
                window.location.reload();
            }, 0);
        });
    }
    updatedHandler() { }
    beforeUpdateHandler() {
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        var _a, _b;
        return {
            styleClasses: joinClasses([
                'link',
                ((_a = this.props) === null || _a === void 0 ? void 0 : _a.size) ? `link--size-${this.props.size}` : '',
                ((_b = this.props) === null || _b === void 0 ? void 0 : _b.block) ? `link--block` : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=link.js.map