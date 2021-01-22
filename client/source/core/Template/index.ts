import template from '../../vendor/template.js';
import { createSlot } from '../../utils/createSlot.js';

export function compileTemplate(
  templateString: string = '',
  sourceURL: string,
) {
  const options = {
    escape: /{{-([\s\S]+?)}}/g,
    evaluate: /{{([\s\S]+?)}}/g,
    interpolate: /{{=([\s\S]+?)}}/g,
    imports: {
      SLOT: createSlot,
    },
    sourceURL,
  };
  return template(templateString, options);
}
