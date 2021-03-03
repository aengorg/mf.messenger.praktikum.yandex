export function htmlToElement(
  html: string,
  tagName = 'component',
): HTMLElement {
  const template = document.createElement(tagName);
  template.innerHTML = html;
  return template;
}
