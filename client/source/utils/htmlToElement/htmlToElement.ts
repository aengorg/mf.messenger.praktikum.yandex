export function htmlToElement(
  html: string,
  tagName: string = 'component',
): Element | null {
  const template = document.createElement(tagName);
  template.innerHTML = html;
  return template;
}
