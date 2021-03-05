import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { joinClasses } from '../../utils/joinClasses/index';

export type TypeAlert = 'info' | 'success' | 'error';

export interface PropsAlert extends PropsComponent {
  text?: string;
  type?: TypeAlert;
  delete?: number;
}

export class Alert extends Component<PropsAlert> {
  constructor(props: PropsAlert) {
    super(props);
  }
  public beforeCreateHandler() {}
  public createdHandler() {}
  public updatedHandler() {
    if (this.props.delete && this.props.text) {
      setTimeout(() => {
        this.props.text = '';
      }, this.props.delete);
    }
  }
  public beforeUpdateHandler() {
    return true;
  }
  public beforeRemoveHandler() {}
  public getContext() {
    return {
      styleClasses: joinClasses([
        'alert',
        this.props?.type ? `alert--type-${this.props.type}` : '',
      ]),
    };
  }
  public render() {
    return template;
  }
}
