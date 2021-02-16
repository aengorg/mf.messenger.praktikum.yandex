import { AbstractForm, PropsAbstractForm } from '../Form/form.js';
import template from './template.js';

import { Title } from '../title/index.js';
import { Field, PropsField } from '../field/index.js';
import { Button, PropsButton } from '../button/index.js';

export interface PropsModalAddChatUser extends PropsAbstractForm {
  title: string;
  fieldLogin: PropsField;
  buttonCancel: PropsButton;
  buttonAdd: PropsButton;
  show: boolean;
}

export class ModalAddChatUser extends AbstractForm<PropsModalAddChatUser> {
  constructor(props: PropsModalAddChatUser) {
    super(props, {
      title: new Title({
        text: props.title,
        level: 1,
        size: 2,
      }),
      fieldLogin: new Field(props.fieldLogin),
      buttonCancel: new Button(props.buttonCancel),
      buttonAdd: new Button(props.buttonAdd),
    });
  }

  public initEventCancel() {
    this.children.buttonCancel.$element.addEventListener(
      'click',
      (e: Event) => {
        e.preventDefault();
        this.props.show = false;
      },
    );
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

  public updatedHandler() {
    this.initForm();
    this.initEventCancel();
  }

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
