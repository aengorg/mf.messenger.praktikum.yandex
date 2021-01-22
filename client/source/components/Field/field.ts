import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

export interface PropsField extends PropsComponent {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export class Field extends Component<PropsField> {
  constructor(props: PropsField) {
    super(props);
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

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
