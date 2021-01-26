import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { joinClasses } from '../../utils/joinClasses.js';

export type TypeIcon = 'profile' | 'done' | 'done-done';

export interface PropsIcon extends PropsComponent {
  icon?: TypeIcon;
}

export class Icon extends Component<PropsIcon> {
  constructor(props: PropsIcon) {
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
      stylesClass: joinClasses([
        'icon',
        this.props.icon ? `icon--${this.props.icon}` : '',
        this.props.className ? this.props.className : '',
      ]),
    };
  }
  public render() {
    return template;
  }
}
