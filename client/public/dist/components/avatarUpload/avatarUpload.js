import { Component } from '../../core/Component/index.js';
import template from './template.js';
import { Avatar } from '../../components/avatar/index.js';
import { FileUpload } from '../../components/fileUpload/index.js';
import { Button } from '../button/index.js';
import { Title } from '../title/index.js';
export class AvatarUpload extends Component {
    constructor(props) {
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
        this.input = this.children.upload.$element.querySelector(`[name=${props.uploadName}]`);
        this.image = this.children.avatar.$element.querySelector('.avatar_image');
    }
    initAvatarPreview() {
        this.children.upload.$element.addEventListener('change', () => {
            if (this.input.files && this.input.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.children.avatar.props.url = String(e.target.result);
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
    beforeCreateHandler() { }
    createdHandler() {
        this.initAvatarPreview();
    }
    updatedHandler() { }
    beforeUpdateHandler(oldProps, newProps) {
        console.log(oldProps);
        console.log(newProps);
        return true;
    }
    beforeRemoveHandler() { }
    getContext() {
        return {};
    }
    render() {
        return template;
    }
}
//# sourceMappingURL=avatarUpload.js.map