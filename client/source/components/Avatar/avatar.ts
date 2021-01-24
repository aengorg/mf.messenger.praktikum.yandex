import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { joinClasses } from '../../utils/joinClasses.js';

export interface PropsAvatar extends PropsComponent {
  url?: string;
  size?: 's' | 'xs';
}

export class Avatar extends Component<PropsAvatar> {
  constructor(props: PropsAvatar) {
    super(props);
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

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
