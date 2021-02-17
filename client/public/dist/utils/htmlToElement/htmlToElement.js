export function htmlToElement(html, tagName = 'component') {
    const template = document.createElement(tagName);
    template.innerHTML = html;
    return template;
}
//# sourceMappingURL=htmlToElement.js.map