import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { Title, PropsTitle } from '../../components/title/index';
import { Link, PropsLink } from '../../components/link/index';

export interface PropsErrorPage extends PropsComponent {
  bg?: string;
  title: PropsTitle;
  link: PropsLink;
}

export class ErrorPage extends Component<PropsErrorPage> {
  constructor(props: PropsErrorPage) {
    super(props, {
      link: new Link(props.link),
      title: new Title(props.title),
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
