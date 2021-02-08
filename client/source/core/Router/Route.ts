import { Component } from '../Component/index.js';

export type TPathNames = string | string[];

export class Route {
  private pathname: TPathNames;
  private component: Component<any>;

  constructor(pathname: TPathNames, component: Component<any>) {
    this.pathname = pathname;
    this.component = component;
  }

  public leave(): void {
    this.component.hide();
  }

  public render(node: Element): void {
    this.component.show();
    node.appendChild(this.component.getElement());
  }

  public match(pathname: string): boolean {
    pathname = pathname.replace('#', '');

    if (Array.isArray(this.pathname)) {
      return this.pathname.some((path) => path === pathname);
    }
    return pathname === this.pathname;
  }
}
