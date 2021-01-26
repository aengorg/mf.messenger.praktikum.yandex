import { Component, PropsComponent } from '../../../core/Component/index.js';
import template from './template.js';

export interface PropsFieldError extends PropsComponent {
  text?: string;
}

export class FieldError extends Component<PropsFieldError> {
  constructor(props: PropsFieldError) {
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
