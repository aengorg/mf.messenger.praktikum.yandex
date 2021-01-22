import { ErrorPage } from './pages/Error/index.js';

const props = {
  text: 'ошибка сервера',
  bg: 'error500',
};

const page = new ErrorPage(props);
const $app = document.querySelector('#app');
$app!.appendChild(page.getElement() || document.createElement('error'));
