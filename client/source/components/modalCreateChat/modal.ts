import { AbstractForm, PropsAbstractForm } from '../form/form';
import template from './template.hbs';

import { Title } from '../title/index';
import { Field, PropsField } from '../field/index';
import { Button, PropsButton } from '../button/index';

export interface PropsModalCreateChat extends PropsAbstractForm {
  title: string;
  fieldTitle: PropsField;
  buttonCancel: PropsButton;
  buttonCreate: PropsButton;
  show: boolean;
}

export class ModalCreateChat extends AbstractForm<PropsModalCreateChat> {
  constructor(props: PropsModalCreateChat) {
    super(props, {
      title: new Title({
        text: props.title,
        level: 1,
        size: 2,
      }),
      fieldTitle: new Field(props.fieldTitle),
      buttonCancel: new Button(props.buttonCancel),
      buttonCreate: new Button(props.buttonCreate),
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
