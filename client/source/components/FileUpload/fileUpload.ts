import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

export interface PropsFileUpload extends PropsComponent {
  text: string;
  name: string;
}

export class FileUpload extends Component<PropsFileUpload> {
  constructor(props: PropsFileUpload) {
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
    return {};
  }

  public render() {
    return template;
  }
}
