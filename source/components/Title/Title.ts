import { Component, PropsComponent } from '../../core/Component/index';
import { joinClasses } from '../../utils/joinClasses/index';
import template from './template.hbs';

export type TextColors = 'red' | 'green';

export interface PropsTitle extends PropsComponent {
  text: string;
  level: number;
  size?: number;
  color?: TextColors;
}

export class Title extends Component<PropsTitle> {
  constructor(props: PropsTitle) {
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
        'title',
        this.props?.size ? `title--size-${this.props.size}` : '',
        this.props?.color ? `title--color-${this.props.color}` : '',
        this.props?.className ? `${this.props.className}` : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
