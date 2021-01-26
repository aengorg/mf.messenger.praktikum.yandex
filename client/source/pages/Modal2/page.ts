import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { Title } from '../../components/title/index.js';
import { Button } from '../../components/button/index.js';

export interface PropsModalPage extends PropsComponent {}

export class ModalPage extends Component<PropsModalPage> {
  constructor(props: PropsModalPage) {
    super(props, {
      title: new Title({
        text: 'Remove friend?',
        level: 1,
        size: 1,
      }),
      buttonCancel: new Button({
        text: 'Cancel',
      }),
      buttonAdd: new Button({
        text: 'Remove',
        danger: true,
      }),
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
