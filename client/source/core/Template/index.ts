const Handlebars = window.Handlebars;
import { TAG_SLOT } from '../../constants/index.js';

export function compileTemplate(templateString: string = '') {
  return Handlebars.compile(templateString);
}

function createSlot(name: string): string {
  const $slot = document.createElement(TAG_SLOT);
  $slot.setAttribute('data-slot', name);
  return $slot.outerHTML;
}

function slot(componentName: string) {
  return new Handlebars.SafeString(createSlot(componentName));
}

Handlebars.registerHelper('SLOT', slot);
