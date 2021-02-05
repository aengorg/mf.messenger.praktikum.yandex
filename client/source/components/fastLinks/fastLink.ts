import { Component, PropsComponentEmpty } from '../../core/Component/index.js';
import template from './template.js';

import { Link } from '../link/index.js';

export class FastLink extends Component<PropsComponentEmpty> {
  constructor(props: PropsComponentEmpty) {
    super(props, {
      links: [
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
      ],
    });
  }
  public beforeCreateHandler() {}
  public createdHandler() {}
  public updatedHandler() {}
  public beforeUpdateHandler() {
    return true;
  }
  public beforeRemoveHandler() {}
  public getContext() {
    return {};
  }
  public render() {
    return template;
  }
}
