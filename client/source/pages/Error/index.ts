import { Template } from '../../classes/Template/index.js';
import template from './template.js';

console.log('Error/index.ts');

export class ErrorPage {
  constructor() {}

  render() {
    const block = new Template(template);
    const str = block.toHTML({ errorText: 'ошибка падла' });

    const $root = document.querySelector('#app');
    if ($root) $root.innerHTML = str;
  }
}
