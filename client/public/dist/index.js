import { ErrorPage, propsErrorPage500, propsErrorPage404, } from './pages/error/index.js';
import { ChatPage, propsChatPage } from './pages/chat/index.js';
import { Sandbox } from './pages/sandbox/index.js';
import { SignupPage, propsSignupPage } from './pages/signup/index.js';
import { LoginPage, propsLoginPage } from './pages/login/index.js';
import { SettingPasswordPage, propsSettingPasswordPage, } from './pages/password/index.js';
import { SettingPage, propsSettingPage } from './pages/setting/index.js';
import { router } from './router/index.js';
const $app = document.querySelector('#app') ||
    document.createElement('error-root-element');
router
    .use(['', 'login'], LoginPage, propsLoginPage)
    .use('signup', SignupPage, propsSignupPage)
    .use('sandbox', Sandbox, {})
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
//# sourceMappingURL=index.js.map