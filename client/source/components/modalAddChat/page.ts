import { AbstractForm, PropsAbstractForm } from '../Form/form.js';
import template from './template.js';

import { Title } from '../title/index.js';
import { Field, PropsField } from '../field/index.js';
import { Button, PropsButton } from '../button/index.js';

// import { chatService } from '../../services/chat.js';
// import { TypeChatRequest } from '../../api/types.js';

export interface PropsModalAddChat extends PropsAbstractForm {
  title: string;
  fieldTitle: PropsField;
  buttonCancel: PropsButton;
  buttonCreate: PropsButton;
  show: boolean;
}

export class ModalAddChat extends AbstractForm<PropsModalAddChat> {
  constructor(props: PropsModalAddChat) {
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

  public submitHandler() {
    // chatService
    //   .addChat(this.inputsData?.getData() as TypeChatRequest)
    //   .then((data) => {
    //     console.log(data);
    //     // this.children.alert.props.type = 'success';
    //     // this.children.alert.props.text = data.message;
    //     // this.initChatList();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // this.children.alert.props.type = 'error';
    //     // this.children.alert.props.text = error;
    //   });
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
