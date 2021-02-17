import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
export class ErrorPage extends Component {
    constructor(props) {
        super(props, {
            link: new Link(props.link),
            title: new Title(props.title),
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
        return {};
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=page.js.map