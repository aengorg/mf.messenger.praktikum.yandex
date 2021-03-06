import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { joinClasses } from '../../utils/joinClasses/index';

export type TypeStatus = 'offline' | 'online' | 'wait' | 'busy' | undefined;

export interface PropsStatus extends PropsComponent {
  status?: TypeStatus;
}

export class Status extends Component<PropsStatus> {
  constructor(props: PropsStatus) {
    super(props);
  }
  public beforeCreateHandler() {}
  public createdHandler() {}
  public updatedHandler() {}
  public beforeUpdateHandler() {
    return true;
  }
  public beforeRemoveHandler() {}
  public getContext() {
    return {
      stylesClass: joinClasses([
        'status',
        this.props.status ? `status--${this.props.status}` : '',
        this.props.className ? this.props.className : '',
      ]),
    };
  }
  public render() {
    return template;
  }
}
