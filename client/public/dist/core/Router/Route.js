export class Route {
    constructor(pathname, component, defaultProps) {
        this.pathname = pathname;
        this.component = component;
        this.defaultProps = defaultProps;
        this.page = null;
    }
    leave() {
        if (this.page !== null) {
            this.page.remove();
        }
    }
    render(node) {
        this.page = new this.component(this.defaultProps);
        node.appendChild(this.page.getElement());
    }
    match(pathname) {
        pathname = pathname.replace('#', '');
        if (Array.isArray(this.pathname)) {
            return this.pathname.some((path) => path === pathname);
        }
        return pathname === this.pathname;
    }
    getPathname() {
        return this.pathname;
    }
}
//# sourceMappingURL=Route.js.map