import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';

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

  public createdHandler() {
    // ! BAD force update
    setTimeout(() => {
      this.children.title.props.text = 'Страница не найдена';
      this.props.bg = 'error404';
    }, 3000);
  }

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
