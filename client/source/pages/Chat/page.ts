import { Component, PropsComponent } from '../../core/Component/index.js';
import template from './template.js';

// import { Title, PropsTitle } from '../../components/title/index.js';
import { Avatar, PropsAvatar } from '../../components/avatar/index.js';
import { Button, PropsButton } from '../../components/button/index.js';
import { Field, PropsField } from '../../components/field/index.js';
import { Link, PropsLink } from '../../components/link/index.js';

export interface PropsChatPage extends PropsComponent {
  fieldSearch: PropsField;
  buttonAddUser: PropsButton;
  buttonCreateGroup: PropsButton;
  avatar: PropsAvatar;
  linkProfile: PropsLink;
}

export class ChatPage extends Component<PropsChatPage> {
  constructor(props: PropsChatPage) {
    super(props, {
      fieldSearch: new Field(props.fieldSearch),
      buttonAddUser: new Button(props.buttonCreateGroup),
      buttonCreateGroup: new Button(props.buttonCreateGroup),
      linkProfile: new Link(props.linkProfile),
      avatar: new Avatar(props.avatar),
    });
  }

  public beforeCreateHandler() {}

  public createdHandler() {}

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
