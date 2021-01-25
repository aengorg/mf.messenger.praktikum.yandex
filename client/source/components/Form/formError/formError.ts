import { Component, PropsComponent } from '../../../core/Component/index.js';
import template from '../template.js';

export interface PropsFormError extends PropsComponent {
  text?: string;
}

export class FormError extends Component<PropsFormError> {
  constructor(props: PropsFormError) {
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
