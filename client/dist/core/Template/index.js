const Handlebars = window.Handlebars;
import { TAG_SLOT } from '../../constants/index.js';
export function compileTemplate(templateString = '') {
    return Handlebars.compile(templateString);
}
function createSlot(name) {
    const $slot = document.createElement(TAG_SLOT);
    $slot.setAttribute('data-slot', name);
    return $slot.outerHTML;
}
function slot(componentName) {
    return new Handlebars.SafeString(createSlot(componentName));
}
Handlebars.registerHelper('SLOT', slot);
//# sourceMappingURL=index.js.map