import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { joinClasses } from '../../utils/joinClasses/index';

export type TypeIconsButton =
  | 'add-chat'
  | 'setting-chat'
  | 'add-user'
  | 'remove-user'
  | 'add-file'
  | 'create-group'
  | 'add-photo'
  | 'location'
  | 'emoji'
  | 'list-user'
  | 'done-user'
  | 'trash'
  | 'send';

export interface PropsButton extends PropsComponent {
  text?: string;
  name?: string;
  type?: string;
  primary?: boolean;
  danger?: boolean;
  size?: 's';
  icon?: TypeIconsButton;
  disabled?: boolean;
  value?: string | number;
}

export class Button extends Component<PropsButton> {
  constructor(props: PropsButton) {
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
        'button',
        this.props?.primary ? `button--primary` : '',
        this.props?.danger ? `button--danger` : '',
        this.props?.size ? `button--size-${this.props.size}` : '',
        this.props?.icon ? `button--icon button--icon-${this.props.icon}` : '',
        this.props?.className ? this.props?.className : '',
      ]),
    };
  }

  public render() {
    return template;
  }
}
