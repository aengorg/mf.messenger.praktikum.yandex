import { Component, PropsComponent } from '../../core/Component/index.js';
import { joinClasses } from '../../utils/joinClasses.js';
import template from './template.js';

export interface PropsLink extends PropsComponent {
  text: string;
  url: string;
  size?: number;
  block?: boolean;
}

export class Link extends Component<PropsLink> {
  constructor(props: PropsLink) {
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
      styleClasses: joinClasses([
        'link',
        this.props?.size ? `link--size-${this.props.size}` : '',
        this.props?.block ? `link--block` : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
