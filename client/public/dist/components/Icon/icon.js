import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses/index.js';
export class Icon extends Component {
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
        return {
            stylesClass: joinClasses([
                'icon',
                this.props.icon ? `icon--${this.props.icon}` : '',
                this.props.className ? this.props.className : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=icon.js.map