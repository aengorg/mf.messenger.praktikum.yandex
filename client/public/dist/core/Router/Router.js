import { Route } from './index.js';
export class Router {
    constructor() {
        this.currentRoute = null;
        this.history = window.history;
        this.defaultPathname = '';
        this.routes = [];
        this.history = window.history;
        this.currentRoute = null;
        this.rootNode =
            document.querySelector('#app') || document.createElement('div');
    }
    default(pathname, component, defaultProps) {
        this.defaultPathname = pathname;
        this.use(pathname, component, defaultProps);
        return this;
    }
    start(rootNode) {
        this.rootNode = rootNode;
        this.rootNode.innerHTML = '';
        window.onpopstate = () => {
            this.handlePathChange(document.location.hash);
        };
        this.handlePathChange(document.location.hash);
    }
    use(pathname, component, defaultProps) {
        const route = new Route(pathname, component, defaultProps);
        this.routes.push(route);
        return this;
    }
    handlePathChange(pathname) {
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
    go(pathname) {
        this.history.pushState({}, '', pathname);
        this.handlePathChange(pathname);
    }
    back() {
        history.back();
    }
    forward() {
        history.forward();
    }
    getRoute(pathname) {
        return this.routes.find((route) => route.match(pathname));
    }
}
//# sourceMappingURL=Router.js.map