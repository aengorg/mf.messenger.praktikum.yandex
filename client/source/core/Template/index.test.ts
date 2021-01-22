import { Template } from './index';
import template from './template.test';

(() => {
  const block = new Template(template);
  const str = block.toHTML({ user: 'падла' });

  const $root = document.querySelector('#app');
  if ($root) $root.innerHTML = str;
})();
