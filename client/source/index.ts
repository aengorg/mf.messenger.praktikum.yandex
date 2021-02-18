import { PropsComponentEmpty } from './core/Component/index';
import {
  ErrorPage,
  propsErrorPage500,
  propsErrorPage404,
} from './pages/error/index';
import { ChatPage, propsChatPage } from './pages/chat/index';
import { Sandbox } from './pages/sandbox/index';
import { SignupPage, propsSignupPage } from './pages/signup/index';
import { LoginPage, propsLoginPage } from './pages/login/index';
import {
  SettingPasswordPage,
  propsSettingPasswordPage,
} from './pages/password/index';
import { SettingPage, propsSettingPage } from './pages/setting/index';

import { router } from './router/index';

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

// import { FastLink } from './components/fastLinks/index';
// $app!.appendChild(
//   new FastLink({}).getElement() || document.createElement('error'),
// );
