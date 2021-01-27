import { AbstractForm, } from '../../components/form/index.js';
import template from './template.js';
import { Title } from '../../components/title/index.js';
import { Link } from '../../components/link/index.js';
import { Field } from '../../components/field/index.js';
import { Button } from '../../components/button/index.js';
import { Avatar } from '../../components/avatar/index.js';
import { FileUpload, } from '../../components/fileUpload/index.js';
export class SettingPage extends AbstractForm {
    constructor(props) {
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
    beforeCreateHandler() { }
    createdHandler() {
        this.initForm();
    }
    updatedHandler() { }
    beforeUpdateHandler() {
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
//# sourceMappingURL=page.js.map