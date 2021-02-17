import { Component, PropsComponent } from '../../core/Component/index';
import { joinClasses } from '../../utils/joinClasses/index';
import template from './template';

export interface PropsLink extends PropsComponent {
  text: string;
  url: string;
  size?: number;
  target?: string;
  block?: boolean;
  staticContent?: string;
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
