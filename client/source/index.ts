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
import { ModalPage } from './pages/modal/index.js';
import { ModalPage as ModalPage2 } from './pages/modal2/index.js';
import { FastLink } from './components/fastLinks/index.js';

import { rules } from './utils/validationRules/index.js';
import { Children } from './core/Component/index.js';
import { Icon } from './components/Icon/icon.js';

// * ErrorPage
// 500
const propsErrorPage500: PropsErrorPage = {
  bg: 'error500',
  title: {
    text: 'Server error 500',
    level: 1,
    size: 1,
    color: 'red',
  },
  link: {
    url: './#login',
    text: 'Back to chats',
    size: 2,
    block: true,
  },
};
// 404
const propsErrorPage404: PropsErrorPage = {
  bg: 'error404',
  title: {
    text: 'Page not found. 404',
    level: 1,
    size: 1,
    color: 'red',
  },
  link: {
    url: './#login',
    text: 'Back to chats',
    size: 2,
    block: true,
  },
};

// * LoginPage
const propsLoginPage: PropsLoginPage = {
  formSelector: '#form-login',
  title: {
    text: 'Welcome!',
    level: 1,
    size: 1,
  },
  linkSignup: {
    url: './#signup',
    text: 'Sign up',
    block: true,
  },
  fieldLogin: {
    name: 'login',
    label: 'Login',
    type: 'text',
    placeholder: 'Abracadabra',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPassword: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  buttonLogin: {
    text: 'Log in',
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * SignupPage;
const propsSignupPage: PropsSignupPage = {
  formSelector: '#form-signup',
  title: {
    text: 'Join the world!',
    level: 1,
    size: 1,
  },
  linkLogin: {
    url: './#login',
    text: 'Log in',
    block: true,
  },
  fieldEmail: {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'Ivan@yandex.ru',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.email, rules.required],
    },
  },
  fieldLogin: {
    name: 'login',
    label: 'Login',
    type: 'text',
    placeholder: 'Abracadabra',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldFirstName: {
    name: 'first_name',
    label: 'First name',
    type: 'text',
    placeholder: 'Ivan',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldSecondName: {
    name: 'second_name',
    label: 'Second name',
    type: 'text',
    placeholder: 'Markov',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPhone: {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: '+79008007712',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPassword: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  fieldPassword2: {
    name: 'password2',
    label: 'Password (again)',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  buttonSignup: {
    text: 'Registration',
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * SettingPasswordPage;
const propsSettingPasswordPage: PropsSettingPasswordPage = {
  formSelector: '#form-setting-password',
  title: {
    text: 'Change password',
    level: 1,
    size: 1,
  },
  fieldOldPassword: {
    name: 'oldPassword',
    label: 'Old password',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldNewPassword: {
    name: 'newPassword',
    label: 'New Password',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldNewPassword2: {
    name: 'newPassword2',
    label: 'New password (again)',
    type: 'password',
    placeholder: '●●●●●●',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  buttonCancel: {
    text: 'Cancel',
    name: 'cancel',
    type: 'button',
  },
  buttonSave: {
    text: 'Save',
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * PropsSettingPage;
const propsSettingPage: PropsSettingPage = {
  formSelector: '#form-setting',
  title: {
    text: 'Edit profile',
    level: 1,
    size: 1,
  },
  fieldFirstName: {
    name: 'first_name',
    label: 'First name',
    type: 'text',
    placeholder: 'Ivan',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldSecondName: {
    name: 'second_name',
    label: 'Second name',
    type: 'text',
    placeholder: 'Markov',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldChatName: {
    name: 'chat_name',
    label: 'Chat name',
    type: 'text',
    placeholder: 'Oriental magician',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldEmail: {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'Ivan@yandex.ru',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.email],
    },
  },
  fieldLogin: {
    name: 'login',
    label: 'Login',
    type: 'text',
    placeholder: 'Abracadabra',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPhone: {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    placeholder: '+79008007712',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  linkPasswordSetting: {
    url: './#pass',
    text: 'Change password',
    size: 3,
  },
  titleAvatar: {
    text: 'Profile photo',
    level: 3,
    size: 5,
  },
  avatar: {
    // url: '../../client/public/assets/images/test/photo.png',
  },
  uploadAvatar: {
    text: 'Upload an image',
    name: 'upload_avatar',
  },
  removePhoto: {
    text: 'Remove photo',
    name: 'remove_photo',
    type: 'button',
    danger: true,
  },
  buttonCancel: {
    text: 'Cancel',
    name: 'cancel',
    type: 'button',
  },
  buttonSave: {
    text: 'Save',
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};

// * ChatPage
const propsChatPage: PropsChatPage = {
  fieldSearch: {
    name: 'search_user',
    label: '',
    icon: 'search',
    width: 'unlimit',
  },
  buttonAddUser: {
    text: '',
    name: 'add_user',
    size: 's',
    icon: 'add-user',
  },
  buttonCreateGroup: {
    text: '',
    name: 'create_group',
    size: 's',
    icon: 'create-group',
  },
  avatar: {
    url: '../../client/public/assets/images/test/photo.png',
    size: 's',
    status: 'online',
  },
  linkProfile: {
    url: './#setting',
    text: 'My profile',
    size: 2,
    className: 'chat-list_link-profile',
    staticContent: new Icon({ icon: 'profile' }).getContent(),
  },
};

let page: Children = new ErrorPage(propsErrorPage404);

switch (window.location.hash) {
  case '#error500':
    page = new ErrorPage(propsErrorPage500);
    break;
  case '#error404':
    page = new ErrorPage(propsErrorPage404);
    break;
  case '#login':
    page = new LoginPage(propsLoginPage);
    break;
  case '#signup':
    page = new SignupPage(propsSignupPage);
    break;
  case '#sandbox':
    page = new Sandbox({});
    break;
  case '#pass':
    page = new SettingPasswordPage(propsSettingPasswordPage);
    break;
  case '#setting':
    page = new SettingPage(propsSettingPage);
    break;
  case '#modal1':
    page = new ModalPage({});
    break;
  case '#modal2':
    page = new ModalPage2({});
    break;
  case '#chat':
    page = new ChatPage(propsChatPage);
    break;

  default:
    page = new ErrorPage(propsErrorPage404);
    break;
}

const $app = document.querySelector('#app');
$app!.appendChild(
  new FastLink({}).getElement() || document.createElement('error'),
);
$app!.appendChild(page.getElement() || document.createElement('error'));
