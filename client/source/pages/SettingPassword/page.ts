import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';

export interface PropsSettingPasswordPage extends PropsComponent {
  title: PropsTitle;
  fieldOldPassword: PropsField;
  fieldNewPassword: PropsField;
  fieldNewPassword2: PropsField;
  buttonCancel: PropsButton;
  buttonSave: PropsButton;
}

export class SettingPasswordPage extends Component<PropsSettingPasswordPage> {
  constructor(props: PropsSettingPasswordPage) {
    super(props, {
      title: new Title(props.title),
      fieldOldPassword: new Field(props.fieldOldPassword),
      fieldNewPassword: new Field(props.fieldNewPassword),
      fieldNewPassword2: new Field(props.fieldNewPassword2),
      buttonCancel: new Button(props.buttonCancel),
      buttonSave: new Button(props.buttonSave),
    });
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
