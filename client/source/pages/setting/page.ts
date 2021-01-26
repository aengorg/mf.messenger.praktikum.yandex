import {
  AbstractForm,
  PropsAbstractForm,
} from '../../components/form/index.js';
import template from './template.js';

import { Title, PropsTitle } from '../../components/title/index.js';
import { Link, PropsLink } from '../../components/link/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Avatar, PropsAvatar } from '../../components/avatar/index.js';
import {
  FileUpload,
  PropsFileUpload,
} from '../../components/fileUpload/index.js';

export interface PropsSettingPage extends PropsAbstractForm {
  title: PropsTitle;
  fieldFirstName: PropsField;
  fieldSecondName: PropsField;
  fieldChatName: PropsField;
  fieldEmail: PropsField;
  fieldLogin: PropsField;
  fieldPhone: PropsField;
  linkPasswordSetting: PropsLink;
  titleAvatar: PropsTitle;
  avatar: PropsAvatar;
  uploadAvatar: PropsFileUpload;
  removePhoto: PropsButton;
  buttonCancel: PropsButton;
  buttonSave: PropsButton;
}

export class SettingPage extends AbstractForm<PropsSettingPage> {
  constructor(props: PropsSettingPage) {
    super(props, {
      title: new Title(props.title),
      fieldFirstName: new Field(props.fieldFirstName),
      fieldSecondName: new Field(props.fieldSecondName),
      fieldChatName: new Field(props.fieldChatName),
      fieldEmail: new Field(props.fieldEmail),
      fieldLogin: new Field(props.fieldLogin),
      fieldPhone: new Field(props.fieldPhone),
      linkPasswordSetting: new Link(props.linkPasswordSetting),
      titleAvatar: new Title(props.titleAvatar),
      avatar: new Avatar(props.avatar),
      uploadAvatar: new FileUpload(props.uploadAvatar),
      removePhoto: new Button(props.removePhoto),
      buttonCancel: new Button(props.buttonCancel),
      buttonSave: new Button(props.buttonSave),
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {
    this.initForm();
  }

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
