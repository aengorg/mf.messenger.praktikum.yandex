import { ComponentFactory, Component } from '../Component/index';

export type TPathNames = string | string[];

export class Route<PropsComponent> {
  private pathname: TPathNames;
  private component: ComponentFactory<PropsComponent>;
  private defaultProps: PropsComponent;
  private page: Component<PropsComponent> | null;

  constructor(
    pathname: TPathNames,
    component: ComponentFactory<PropsComponent>,
    defaultProps: PropsComponent,
  ) {
    this.pathname = pathname;
    this.component = component;
    this.defaultProps = defaultProps;
    this.page = null;
  }

  public leave(): void {
    if (this.page !== null) {
      this.page.remove();
    }
  }

  public render(node: Element): void {
    this.page = new this.component(this.defaultProps);
    node.appendChild(this.page!.getElement());
  }

  public match(pathname: string): boolean {
    pathname = pathname.replace('#', '');

    if (Array.isArray(this.pathname)) {
      return this.pathname.some((path) => path === pathname);
    }
    return pathname === this.pathname;
  }

  public getPathname() {
    return this.pathname;
  }
}
