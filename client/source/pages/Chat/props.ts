import { t } from '../../locales/index';
import { PropsChatPage } from '../../pages/chat/index';
import { Icon } from '../../components/Icon/index';
import { rules } from '../../utils/validationRules/index';

// * ChatPage
export const propsChatPage: PropsChatPage = {
  userAvatar: {
    size: 's',
    url: '',
  },
  userName: '',
  fieldSearchUser: {
    name: 'search_user',
    label: '',
    icon: 'search',
    width: 'unlimit',
  },
  fieldSearchMessage: {
    name: 'search_message',
    label: '',
    icon: 'search',
    width: 'unlimit',
  },
  buttonCreateChat: {
    text: '',
    name: 'add_chat',
    size: 's',
    icon: 'add-chat',
  },
  buttonChatAddUser: {
    text: '',
    name: 'chat_add_user',
    size: 's',
    icon: 'add-user',
  },
  buttonChatSettingUsers: {
    text: '',
    name: 'chat_setting_user',
    size: 's',
    icon: 'list-user',
  },
  buttonChatSetting: {
    text: '',
    name: 'chat_setting',
    size: 's',
    icon: 'setting-chat',
  },
  linkProfile: {
    url: '#setting',
    text: 'My profile',
    size: 2,
    block: true,
    className: 'chat-list_link-profile',
    staticContent: new Icon({ icon: 'profile' }).getContent(),
  },
  chatItems: [],
  modalCreateChat: {
    show: false,
    formSelector: '#form-create-chat',
    title: t['createChat'],
    fieldTitle: {
      name: 'title',
      label: t['titleChat'],
      type: 'text',
      placeholder: 'Super chat',
      validation: {
        events: ['blur'],
        rules: [rules.required],
      },
    },
    buttonCancel: {
      text: t['cancel'],
    },
    buttonCreate: {
      text: t['create'],
      type: 'submit',
      primary: true,
    },
  },
  modalAddChatUser: {
    userItems: { userItems: [], textEmpty: t['listEmpty'] },
    show: false,
    title: t['addUserChat'],
    fieldLogin: {
      name: 'login',
      label: t['login'],
      type: 'text',
      icon: 'search',
      validation: {
        events: ['blur'],
        rules: [rules.required],
      },
    },
    buttonClose: {
      text: t['close'],
    },
  },
  modalListUser: {
    userItems: { userItems: [], textEmpty: t['listEmpty'] },
    title: t['usersChat'],
    show: false,
    buttonClose: {
      text: t['close'],
    },
  },
};
