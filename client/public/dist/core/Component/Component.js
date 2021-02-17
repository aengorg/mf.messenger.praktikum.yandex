import { EventBus } from '../EventBus/index.js';
import { compileTemplate } from '../Template/index.js';
import { generationId } from '../../utils/generationId/index.js';
import { htmlToElement } from '../../utils/htmlToElement/index.js';
import { TAG_SLOT } from '../../constants/index.js';
var Events;
(function (Events) {
    Events[Events["beforeCreate"] = 0] = "beforeCreate";
    Events[Events["create"] = 1] = "create";
    Events[Events["created"] = 2] = "created";
    Events[Events["beforeUpdate"] = 3] = "beforeUpdate";
    Events[Events["update"] = 4] = "update";
    Events[Events["updated"] = 5] = "updated";
    Events[Events["beforeRemove"] = 6] = "beforeRemove";
    Events[Events["render"] = 7] = "render";
})(Events || (Events = {}));
export class Component {
    constructor(props, children) {
        this.setProps = (nextProps) => {
            this.props = Object.assign(this.props, nextProps);
            this.eventBus.emit(Events.update, this.props, nextProps);
        };
        this.eventBus = new EventBus();
        this.id = generationId();
        this.props = this.makeProxy(props);
        this.children = children || {};
        this.$element = null;
        this.template = compileTemplate(this.render());
        this.registerEvents();
        this.eventBus.emit(Events.beforeCreate);
        this.eventBus.emit(Events.create);
    }
    makeProxy(props) {
        const self = this;
        const handler = {
            set(target, prop, value) {
                const oldTarget = { ...target };
                target[prop] = value;
                self.eventBus.emit(Events.update, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('nope');
            },
        };
        return new Proxy(props, handler);
    }
    getProps() {
        return this.props;
    }
    // Events
    registerEvents() {
        this.eventBus.on(Events.beforeCreate, this.beforeCreateHandler.bind(this));
        this.eventBus.on(Events.create, this.create.bind(this));
        this.eventBus.on(Events.created, this.createdHandler.bind(this));
        this.eventBus.on(Events.beforeUpdate, this.beforeUpdateHandler.bind(this));
        this.eventBus.on(Events.update, (oldProps, newProps) => this.update(oldProps, newProps));
        this.eventBus.on(Events.updated, this.updatedHandler.bind(this));
        this.eventBus.on(Events.beforeRemove, this.beforeRemoveHandler.bind(this));
        this.eventBus.on(Events.render, this.internalRender.bind(this));
    }
    // CREATE
    create() {
        this.eventBus.emit(Events.render); // first render
        setTimeout(() => {
            this.eventBus.emit(Events.created);
        }, 0);
    }
    // UPDATE
    update(oldProps, newProps) {
        const isRender = this.beforeUpdateHandler(oldProps, newProps);
        if (isRender) {
            this.eventBus.emit(Events.render);
        }
        setTimeout(() => {
            this.eventBus.emit(Events.updated);
        }, 0);
    }
    forceRender() {
        this.eventBus.emit(Events.render);
    }
    // *
    internalRender() {
        const context = { data: this.props, state: this.getContext() };
        const element = htmlToElement(this.template(context));
        if (element !== null) {
            for (const childName in this.children) {
                if (Object.prototype.hasOwnProperty.call(this.children, childName)) {
                    const slots = element.querySelectorAll(`${TAG_SLOT}[data-slot=${childName}]`);
                    if (slots !== null) {
                        slots.forEach((slot) => {
                            const child = this.children[childName];
                            const index = slot.getAttribute('data-index');
                            if (Array.isArray(child)) {
                                if (index !== null && child.length > 0) {
                                    slot.replaceWith(child[Number(index) - 1].getElement() || '');
                                }
                            }
                            else {
                                slot.replaceWith((child === null || child === void 0 ? void 0 : child.getElement()) || '');
                            }
                        });
                    }
                }
            }
            if (this.$element === null) {
                this.$element = element;
                this.$element.setAttribute('data-id', this.id);
            }
            else {
                this.eventBus.emit(Events.beforeRemove);
                setTimeout(() => {
                    var _a;
                    (_a = this.$element.firstElementChild) === null || _a === void 0 ? void 0 : _a.replaceWith(element === null || element === void 0 ? void 0 : element.firstElementChild);
                }, 0);
            }
        }
    }
    getContent() {
        var _a;
        return ((_a = this.$element) === null || _a === void 0 ? void 0 : _a.outerHTML) || '';
    }
    getElement() {
        return this.$element || document.createElement('error-get-element');
    }
    remove() {
        this.eventBus.emit(Events.beforeRemove);
        setTimeout(() => {
            this.$element.outerHTML = '';
        }, 0);
    }
    show() {
        this.$element.style.display = 'initial';
    }
    hide() {
        this.$element.style.display = 'none';
    }
}
//# sourceMappingURL=Component.js.map