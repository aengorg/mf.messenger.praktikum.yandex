// * ErrorPage
// import { ErrorPage, PropsErrorPage } from './pages/error/index.js';
// 500
// const props: PropsErrorPage = {
//   bg: 'error500',
//   title: {
//     text: 'Server error 500',
//     level: 1,
//     size: 1,
//     color: 'red',
//   },
//   link: {
//     url: './',
//     text: 'Back to chats',
//     size: 2,
//   },
// };
// 404
// const props: PropsErrorPage = {
//   bg: 'error404',
//   title: {
//     text: 'Page not found. 404',
//     level: 1,
//     size: 1,
//     color: 'red',
//   },
//   link: {
//     url: './',
//     text: 'Back to chats',
//     size: 2,
//   },
// };
// const page = new ErrorPage(props);

// * LoginPage;
import { rules } from './utils/validationRules/index.js';
import { LoginPage, PropsLoginPage } from './pages/login/index.js';
const props: PropsLoginPage = {
  title: {
    text: 'Welcome!',
    level: 1,
    size: 1,
  },
  linkSignup: {
    url: '../signup/index.html',
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
    placeholder: '...',
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
const page = new LoginPage(props);

// * SignupPage;
// import { rules } from './utils/validationRules/index.js';
// import { SignupPage, PropsSignupPage } from './pages/signup/index.js';
// const props: PropsSignupPage = {
//   title: {
//     text: 'Join the world!',
//     level: 1,
//     size: 1,
//   },
//   linkLogin: {
//     url: '../login/index.html',
//     text: 'Log in',
//     block: true,
//   },
//   fieldEmail: {
//     name: 'email',
//     label: 'Email',
//     type: 'text',
//     placeholder: 'Ivan@yandex.ru',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [rules.email, rules.required],
//     },
//   },
//   fieldLogin: {
//     name: 'login',
//     label: 'Login',
//     type: 'text',
//     placeholder: 'Abracadabra',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [rules.required],
//     },
//   },
//   fieldFirstName: {
//     name: 'first_name',
//     label: 'First name',
//     type: 'text',
//     placeholder: 'Ivan',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [rules.required],
//     },
//   },
//   fieldSecondName: {
//     name: 'second_name',
//     label: 'Second name',
//     type: 'text',
//     placeholder: 'Markov',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [rules.required],
//     },
//   },
//   fieldPhone: {
//     name: 'phone',
//     label: 'Phone',
//     type: 'text',
//     placeholder: '+79008007712',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [rules.required],
//     },
//   },
//   fieldPassword: {
//     name: 'password',
//     label: 'Password',
//     type: 'password',
//     placeholder: 'Abracadabra',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [(v) => rules.range(v, 8), rules.required],
//     },
//   },
//   fieldPassword2: {
//     name: 'password2',
//     label: 'Password (again)',
//     type: 'password',
//     placeholder: 'Abracadabra',
//     validation: {
//       events: ['blur', 'focus'],
//       rules: [(v) => rules.range(v, 8), rules.required],
//     },
//   },
//   buttonSignup: {
//     text: 'Registration',
//     name: 'submit',
//     type: 'submit',
//     primary: true,
//   },
// };
// const page = new SignupPage(props);

// * SettingPasswordPage;
// import {
//   SettingPasswordPage,
//   PropsSettingPasswordPage,
// } from './pages/settingPassword/index.js';
// const props: PropsSettingPasswordPage = {
//   title: {
//     text: 'Change password',
//     level: 1,
//     size: 1,
//   },
//   fieldOldPassword: {
//     name: 'oldPassword',
//     label: 'Old password',
//     type: 'password',
//     placeholder: '...',
//   },
//   fieldNewPassword: {
//     name: 'newPassword',
//     label: 'New Password',
//     type: 'password',
//     placeholder: '...',
//   },
//   fieldNewPassword2: {
//     name: 'newPassword2',
//     label: 'New password (again)',
//     type: 'password',
//     placeholder: '...',
//   },
//   buttonCancel: {
//     text: 'Cancel',
//     name: 'cancel',
//     type: 'button',
//   },
//   buttonSave: {
//     text: 'Save',
//     name: 'submit',
//     type: 'submit',
//     primary: true,
//   },
// };
// const page = new SettingPasswordPage(props);

// * PropsSettingPage;
// import { SettingPage, PropsSettingPage } from './pages/setting/index.js';
// const props: PropsSettingPage = {
//   title: {
//     text: 'Edit profile',
//     level: 1,
//     size: 1,
//   },
//   fieldFirstName: {
//     name: 'first_name',
//     label: 'First name',
//     type: 'text',
//     placeholder: 'Ivan',
//   },
//   fieldSecondName: {
//     name: 'second_name',
//     label: 'Second name',
//     type: 'text',
//     placeholder: 'Markov',
//   },
//   fieldChatName: {
//     name: 'chat_name',
//     label: 'Chat name',
//     type: 'text',
//     placeholder: 'Oriental magician',
//   },
//   fieldEmail: {
//     name: 'email',
//     label: 'Email',
//     type: 'text',
//     placeholder: 'Ivan@yandex.ru',
//   },
//   fieldLogin: {
//     name: 'login',
//     label: 'Login',
//     type: 'text',
//     placeholder: 'Abracadabra',
//   },
//   fieldPhone: {
//     name: 'phone',
//     label: 'Phone',
//     type: 'text',
//     placeholder: '+79008007712',
//   },
//   linkPasswordSetting: {
//     url: '../signup/index.html',
//     text: 'Change password',
//     size: 3,
//   },
//   titleAvatar: {
//     text: 'Profile photo',
//     level: 3,
//     size: 5,
//   },
//   avatar: {
//     // url: '../../client/public/assets/images/test/photo.png',
//   },
//   uploadAvatar: {
//     text: 'Upload an image',
//     name: 'upload_avatar',
//   },
//   removePhoto: {
//     text: 'Remove photo',
//     name: 'remove_photo',
//     type: 'button',
//     danger: true,
//   },
//   buttonCancel: {
//     text: 'Cancel',
//     name: 'cancel',
//     type: 'button',
//   },
//   buttonSave: {
//     text: 'Save',
//     name: 'submit',
//     type: 'submit',
//     primary: true,
//   },
// };
// const page = new SettingPage(props);

// import { Sandbox } from './pages/sandbox/index.js';
// const page = new Sandbox({});

const $app = document.querySelector('#app');
$app!.appendChild(page.getElement() || document.createElement('error'));
