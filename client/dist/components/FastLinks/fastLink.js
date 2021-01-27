import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Link } from '../link/index.js';
export class FastLink extends Component {
    constructor(props) {
        super(props, {
            links: [
                new Link({
                    url: '../public/#error500',
                    text: 'error_500',
                }),
                new Link({
                    url: '../public/#error404',
                    text: 'error_404',
                }),
                new Link({
                    url: '../public/#login',
                    text: 'login',
                }),
                new Link({
                    url: '../public/#signup',
                    text: 'signup',
                }),
                new Link({
                    url: '../public/#setting',
                    text: 'setting',
                }),
                new Link({
                    url: '../public/#pass',
                    text: 'Password',
                }),
                new Link({
                    url: '../public/#chat',
                    text: 'chat',
                }),
                new Link({
                    url: '../public/#modal1',
                    text: 'modal1',
                }),
                new Link({
                    url: '../public/#modal2',
                    text: 'modal2',
                }),
                new Link({
                    url: '../public/#sandbox',
                    text: 'sandbox',
                }),
            ],
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
//# sourceMappingURL=fastLink.js.map