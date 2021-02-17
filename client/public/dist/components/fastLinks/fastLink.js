import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Link } from '../link/index.js';
const staticLinks = [
    new Link({
        url: './#error500',
        text: 'error_500',
    }),
    new Link({
        url: './#error404',
        text: 'error_404',
    }),
    new Link({
        url: './#login',
        text: 'login',
    }),
    new Link({
        url: './#signup',
        text: 'signup',
    }),
    new Link({
        url: './#setting',
        text: 'setting',
    }),
    new Link({
        url: './#pass',
        text: 'Password',
    }),
    new Link({
        url: './#chat',
        text: 'chat',
    }),
    new Link({
        url: './#modal1',
        text: 'modal1',
    }),
    new Link({
        url: './#modal2',
        text: 'modal2',
    }),
    new Link({
        url: './#sandbox',
        text: 'sandbox',
    }),
];
export class FastLink extends Component {
    constructor(props) {
        super(props, { links: staticLinks });
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
            links: staticLinks,
        };
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=fastLink.js.map