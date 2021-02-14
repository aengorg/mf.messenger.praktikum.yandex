import { t } from './locales/index.js';
import { PropsComponentEmpty } from './core/Component/index.js';

import { ErrorPage, PropsErrorPage } from './pages/error/index.js';
import { ChatPage, PropsChatPage } from './pages/chat/index.js';
import { Sandbox } from './pages/sandbox/index.js';
import { SignupPage, PropsSignupPage } from './pages/signup/index.js';
import { LoginPage, PropsLoginPage } from './pages/login/index.js';
import {
  SettingPasswordPage,
  PropsSettingPasswordPage,
} from './pages/password/index.js';
import { SettingPage, PropsSettingPage } from './pages/setting/index.js';
import { generationId } from './utils/generationId/index.js';
import { generationInt } from './utils/generationInt/index.js';
import { rules } from './utils/validationRules/index.js';
import { Icon } from './components/Icon/icon.js';

import { router } from './router/index.js';

// * ErrorPage
// 500
const propsErrorPage500: PropsErrorPage = {
  bg: 'error500',
  title: {
    text: `${t['serverError']} 500`,
    level: 1,
    size: 1,
    color: 'red',
  },
  link: {
    url: '#login',
    text: t['backToChats'],
    size: 2,
    block: true,
  },
};
// 404
const propsErrorPage404: PropsErrorPage = {
  bg: 'error404',
  title: {
    text: `${t['pageNotFound']} 404`,
    level: 1,
    size: 1,
    color: 'red',
  },
  link: {
    url: '#login',
    text: t['backToChats'],
    size: 2,
    block: true,
  },
};

// * LoginPage
const propsLoginPage: PropsLoginPage = {
  defaultErrorForm: t['defaultErrorForm'],
  formSelector: '#form-login',
  title: {
    text: t['welcome'],
    level: 1,
    size: 1,
  },
  linkSignup: {
    url: '#signup',
    text: t['registration'],
    block: true,
  },
  fieldLogin: {
    name: 'login',
    label: t['login'],
    type: 'text',
    placeholder: 'Abracadabra',
    initValue: `Nm31odvlhi20`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPassword: {
    name: 'password',
    label: t['password'],
    type: 'password',
    placeholder: '●●●●●●',
    initValue: `password`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  buttonLogin: {
    text: t['logIn'],
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * SignupPage;
const propsSignupPage: PropsSignupPage = {
  defaultErrorForm: t['defaultErrorForm'],
  formSelector: '#form-signup',
  title: {
    text: t['join'],
    level: 1,
    size: 1,
  },
  linkLogin: {
    url: '#login',
    text: t['logIn'],
    block: true,
  },
  fieldEmail: {
    name: 'email',
    label: t['email'],
    type: 'text',
    placeholder: 'Ivan@yandex.ru',
    initValue: `${generationId()}@example.com`,
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
    initValue: `${generationId()}`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldFirstName: {
    name: 'first_name',
    label: t['firstName'],
    type: 'text',
    placeholder: 'Ivan',
    initValue: 'Ivan',
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
    initValue: `Markov`,
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
    initValue: `+7800${generationInt(1000000, 9999999)}`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.phone],
    },
  },
  fieldPassword: {
    name: 'password',
    label: t['password'],
    type: 'password',
    placeholder: '●●●●●●',
    initValue: `password`,
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  fieldPassword2: {
    name: 'password2',
    label: `${t['password']} (${t['again']})`,
    type: 'password',
    placeholder: '●●●●●●',
    initValue: `password`,
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  buttonSignup: {
    text: t['registration'],
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * SettingPasswordPage;
const propsSettingPasswordPage: PropsSettingPasswordPage = {
  defaultErrorForm: t['defaultErrorForm'],
  formSelector: '#form-setting-password',
  title: {
    text: t['changePassword'],
    level: 1,
    size: 1,
  },
  fieldOldPassword: {
    name: 'oldPassword',
    label: t['oldPassword'],
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldNewPassword: {
    name: 'newPassword',
    label: t['newPassword'],
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldNewPassword2: {
    name: 'newPassword2',
    label: `${t['newPassword']} (${t['again']})`,
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
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

// * PropsSettingPage;
const propsSettingPage: PropsSettingPage = {
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

// * ChatPage
const propsChatPage: PropsChatPage = {
  userAvatar: {
    size: 's',
    url: '',
  },
  userName: '',
  fieldSearch: {
    name: 'search_user',
    label: '',
    icon: 'search',
    width: 'unlimit',
  },
  buttonAddChat: {
    text: '',
    name: 'add_chat',
    size: 's',
    icon: 'add-chat',
  },
  linkProfile: {
    url: '#setting',
    text: 'My profile',
    size: 2,
    block: true,
    className: 'chat-list_link-profile',
    staticContent: new Icon({ icon: 'profile' }).getContent(),
  },
  modalAddChat: {
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
};

const $app =
  document.querySelector('#app') ||
  document.createElement('error-root-element');

router
  .use(['', 'login'], LoginPage, propsLoginPage)
  .use('signup', SignupPage, propsSignupPage)
  .use('sandbox', Sandbox, {} as PropsComponentEmpty)
  .use('pass', SettingPasswordPage, propsSettingPasswordPage)
  .use('setting', SettingPage, propsSettingPage)
  .use('chat', ChatPage, propsChatPage)
  .use('error500', ErrorPage, propsErrorPage500)
  .default('error404', ErrorPage, propsErrorPage404)
  .start($app);

// import { FastLink } from './components/fastLinks/index.js';
// $app!.appendChild(
//   new FastLink({}).getElement() || document.createElement('error'),
// );
