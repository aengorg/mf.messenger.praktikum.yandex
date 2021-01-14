import template from '../../vendor/template.js';

export class Template {
  readonly template: string;
  readonly options: {
    interpolate: RegExp;
  };
  private lodashTemplate: Function;

  constructor(string: string = '') {
    this.template = string;
    this.options = {
      interpolate: /{{([\s\S]+?)}}/g,
    };
    this.lodashTemplate = template(this.template, this.options);
  }

  public toHTML(data: Object): string {
    return this.lodashTemplate(data);
  }
}
