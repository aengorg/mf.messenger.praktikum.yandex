import { Component, PropsComponent } from '../../core/Component/index.js';
import { Title } from '../../components/Title/index.js';
import { Link } from '../../components/Link/index.js';
import template from './template.js';

interface PropsErrorPage extends PropsComponent {
  bg?: string;
  text?: string;
}

export class ErrorPage extends Component<PropsErrorPage> {
  constructor(props: PropsErrorPage) {
    super(props, {
      link: new Link({
        url: './',
        text: 'Back to chats',
        size: 2,
      }),
      title: new Title({
        text: props.text || '',
        level: 1,
        size: 1,
        color: 'red',
      }),
    });
  }

  public beforeCreateHandler() {
    // this.children.title.props.text = this.props.text;
  }

  public createdHandler() {
    // ! BAD !
    setTimeout(() => {
      this.children.title.props.text = 'Страница не найдена';
    }, 3000);

    // Good
    setTimeout(() => {
      this.props.text = 'Страница не найдена';
      this.props.bg = 'error404';
    }, 3000);
  }

  public updatedHandler() {}

  public beforeUpdateHandler() {
    return true;
  }

  public getContext() {
    return {};
  }

  public render() {
    return template;
  }
}
