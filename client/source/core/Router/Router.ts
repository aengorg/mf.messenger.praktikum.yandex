import { Route, TPathNames } from './index.js';
import { Component } from '../Component/index.js';

export class Router {
  public currentRoute: Route | null = null;

  private history = window.history;
  private defaultPathname: string;
  private routes: Route[] = [];
  private rootNode: Element;

  constructor() {
    this.defaultPathname = '';
    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootNode =
      document.querySelector('#app') || document.createElement('div');
  }

  public default(pathname: string, component: Component<any>): this {
    this.defaultPathname = pathname;
    this.use(pathname, component);
    return this;
  }

  public start(rootNode: Element) {
    this.rootNode = rootNode;
    this.rootNode.innerHTML = '';
    window.onpopstate = () => {
      this.handlePathChange(document.location.hash);
    };
    this.handlePathChange(document.location.hash);
  }

  public use(pathname: TPathNames, component: Component<any>): this {
    const route = new Route(pathname, component);
    this.routes.push(route);
    return this;
  }

  private handlePathChange(pathname: string): void {
    let route = this.getRoute(pathname);
    if (route == null) {
      this.go(this.defaultPathname);
      return;
    }

    if (route !== this.currentRoute && this.currentRoute != null) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    if (route !== null && route !== undefined) {
      route.render(this.rootNode);
    }
  }

  public go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this.handlePathChange(pathname);
  }

  public back(): void {
    history.back();
  }

  public forward(): void {
    history.forward();
  }

  public getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }
}
