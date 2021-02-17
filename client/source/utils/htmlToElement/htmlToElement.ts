export function htmlToElement(
  html: string,
  tagName: string = 'component',
): HTMLElement {
  const template = document.createElement(tagName);
  template.innerHTML = html;
  return template;
}
