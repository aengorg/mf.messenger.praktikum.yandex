const Handlebars = window.Handlebars;
import { TAG_SLOT } from '../../constants/index.js';
export function compileTemplate(templateString = '') {
    return Handlebars.compile(templateString);
}
function createSlot(name, index) {
    const $slot = document.createElement(TAG_SLOT);
    $slot.setAttribute('data-slot', name);
    if (index) {
        $slot.setAttribute('data-index', String(index));
    }
    return $slot.outerHTML;
}
function slot(name, i) {
    if (typeof i !== 'number')
        i = undefined;
    else
        i++;
    return new Handlebars.SafeString(createSlot(name, i));
}
Handlebars.registerHelper('SLOT', slot);
//# sourceMappingURL=template.js.map