import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { joinClasses } from '../../utils/joinClasses/index.js';
export class Status extends Component {
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
                'status',
                this.props.status ? `status--${this.props.status}` : '',
                this.props.className ? this.props.className : '',
            ]),
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=status.js.map