import { Component } from '../Component/index.js';

export type TPathNames = string | string[];

export class Route<PropsComponent> {
  private pathname: TPathNames;
  private component: Component<PropsComponent>;

  constructor(pathname: TPathNames, component: Component<PropsComponent>) {
    this.pathname = pathname;
    this.component = component;
  }

  public leave(): void {
    this.component.remove();
  }

  public render(node: Element): void {
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
