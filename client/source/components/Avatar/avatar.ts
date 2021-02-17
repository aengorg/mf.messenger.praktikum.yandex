import { Component, PropsComponent } from '../../core/Component/index';
import template from './template';

import { joinClasses } from '../../utils/joinClasses/index';
import { Status, TypeStatus } from '../status/index';

export interface PropsAvatar extends PropsComponent {
  url?: string;
  size?: 's' | 'xs';
  status?: TypeStatus;
  error?: boolean;
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
      styleComponent: joinClasses([
        'avatar',
        this.props?.size ? `avatar--size-${this.props.size}` : '',
        this.props?.error ? `avatar--error` : '',
      ]),
      styleImage: joinClasses([
        'avatar_image',
        this.props?.error ? `avatar_image--hide` : '',
        this.props?.url ? '' : `avatar_image--hide`,
      ]),
    };
  }

  public render() {
    return template;
  }
}
