import { t } from '../../locales/index';
import { PropsSettingPage } from './index';
import { rules } from '../../utils/validationRules/index';

// * PropsSettingPage;
export const propsSettingPage: PropsSettingPage = {
  defaultErrorForm: t['defaultErrorForm'],
  formSelector: '#form-setting',
  textPassword: t['password'],
  title: {
    text: t['editProfile'],
    level: 1,
    size: 1,
  },
  fieldFirstName: {
    name: 'first_name',
    label: t['firstName'],
    type: 'text',
    placeholder: 'Ivan',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldSecondName: {
    name: 'second_name',
    label: t['secondName'],
    type: 'text',
    placeholder: 'Markov',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldChatName: {
    name: 'display_name',
    label: t['chatName'],
    type: 'text',
    placeholder: 'Oriental magician',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldEmail: {
    name: 'email',
    label: t['email'],
    type: 'text',
    placeholder: 'Ivan@yandex.ru',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.email],
    },
  },
  fieldLogin: {
    name: 'login',
    label: t['login'],
    type: 'text',
    placeholder: 'Abracadabra',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPhone: {
    name: 'phone',
    label: t['phone'],
    type: 'text',
    placeholder: '+79008007712',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.phone],
    },
  },
  linkPasswordSetting: {
    url: '#pass',
    text: t['changePassword'],
    size: 3,
  },
  titleAvatar: {
    text: t['profilePhoto'],
    level: 3,
    size: 5,
  },
  avatarUpload: {
    title: t['profilePhoto'],
    removeText: t['removePhoto'],
    uploadText: t['uploadAnImagePhoto'],
  },
  buttonLogout: {
    text: t['logout'],
    name: 'logout',
    type: 'button',
    danger: true,
  },
  buttonCancel: {
    text: t['cancel'],
    name: 'cancel',
    type: 'button',
  },
  buttonSave: {
    text: t['save'],
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};
