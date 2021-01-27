import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { joinClasses } from '../../utils/joinClasses.js';
import { Status, TypeStatus } from '../status/index.js';

export interface PropsAvatar extends PropsComponent {
  url?: string;
  size?: 's' | 'xs';
  status?: TypeStatus;
}

export class Avatar extends Component<PropsAvatar> {
  constructor(props: PropsAvatar) {
    super(props, {
      status: new Status({
        className: `avatar_status ${props.className}`,
        status: props.status,
      }),
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
    return {
      styleClasses: joinClasses([
        'avatar',
        this.props?.size ? `avatar--size-${this.props.size}` : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
