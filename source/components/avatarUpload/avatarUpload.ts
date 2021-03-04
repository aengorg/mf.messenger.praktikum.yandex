import { Component, PropsComponent } from '../../core/Component/index';
import template from './template.hbs';

import { Avatar } from '../../components/avatar/index';
import { FileUpload } from '../../components/fileUpload/index';
import { Button } from '../button/index';
import { Title } from '../title/index';

export interface PropsAvatarUpload extends PropsComponent {
  urlAvatar: string;
  title: string;
  uploadText: string;
  uploadName: string;
  removeText: string;
  removeName: string;
}

export class AvatarUpload extends Component<PropsAvatarUpload> {
  input: HTMLInputElement;
  image: HTMLElement;

  constructor(props: PropsAvatarUpload) {
    super(props, {
      title: new Title({
        text: props.title,
        size: 5,
        level: 3,
        className: 'text-align-left',
      }),
      avatar: new Avatar({ url: props.urlAvatar }),
      upload: new FileUpload({
        text: props.uploadText,
        name: props.uploadName,
      }),
      remove: new Button({
        text: props.removeText,
        name: props.removeName,
        type: 'button',
        danger: true,
      }),
    });

    this.input = this.children.upload.$element.querySelector(
      `[name=${props.uploadName}]`,
    );
    this.image = this.children.avatar.$element.querySelector('.avatar_image');
  }

  public initAvatarPreview() {
    this.children.upload.$element.addEventListener('change', () => {
      if (this.input.files && this.input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.children.avatar.props.url = String(e.target!.result);
        };

        reader.readAsDataURL(this.input.files[0]);
      }
    });

    this.children.remove.$element.addEventListener('click', () => {
      this.children.upload.props.url = '';
      this.children.avatar.props.url = '';
      this.input.value = '';
    });
  }

  public beforeCreateHandler() {}
  public createdHandler() {
    this.initAvatarPreview();
  }
  public updatedHandler() {}

  public beforeUpdateHandler(
    oldProps: PropsAvatarUpload,
    newProps: PropsAvatarUpload,
  ) {
    console.log(oldProps);
    console.log(newProps);

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
