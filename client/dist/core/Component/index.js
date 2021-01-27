import { EventBus } from '../EventBus/index.js';
import { compileTemplate } from '../Template/index.js';
import { generationId } from '../../utils/generationId.js';
import { htmlToElement } from '../../utils/htmlToElement.js';
import { TAG_SLOT } from '../../constants/index.js';
var EVENTS;
(function (EVENTS) {
    EVENTS[EVENTS["beforeCreate"] = 0] = "beforeCreate";
    EVENTS[EVENTS["create"] = 1] = "create";
    EVENTS[EVENTS["created"] = 2] = "created";
    EVENTS[EVENTS["beforeUpdate"] = 3] = "beforeUpdate";
    EVENTS[EVENTS["update"] = 4] = "update";
    EVENTS[EVENTS["updated"] = 5] = "updated";
    EVENTS[EVENTS["beforeRemove"] = 6] = "beforeRemove";
    EVENTS[EVENTS["render"] = 7] = "render";
})(EVENTS || (EVENTS = {}));
// не смог сделать через implements =(
// но хочу
// implements IComponent<TProps>
// export interface IComponent<T> {
//   readonly id: string;
//   readonly eventBus: EventBus<EVENTS>;
//   $element: Element | null;
//   props: T;
//   children: Children;
//   new (props: T, children?: Children): IComponent<T>;
//   template: (data: { data: T; state: Object }) => string;
//   makeProxy(props: T): T;
//   registerEvents(): void;
//   beforeCreateHandler(): void;
//   create(): void;
//   createdHandler(): void;
//   beforeUpdateHandler(oldProps: T, newProps: T): boolean;
//   update(oldProps: T, newProps: T): void;
//   updatedHandler(): void;
//   render(): string;
//   renderInternal(): void;
//   getProps(): Readonly<T>;
//   getContent(): string;
//   getElement(): Element | null;
//   getContext(): Object;
// }
export class Component {
    constructor(props, children) {
        this.setProps = (nextProps) => {
            this.props = Object.assign(this.props, nextProps);
            this.eventBus.emit(EVENTS.update, this.props, nextProps);
        };
        this.eventBus = new EventBus();
        this.id = generationId();
        this.props = this.makeProxy(props);
        this.children = children || {};
        this.$element = null;
        this.template = compileTemplate(this.render());
        this.registerEvents();
        this.eventBus.emit(EVENTS.beforeCreate);
        this.eventBus.emit(EVENTS.create);
    }
    makeProxy(props) {
        const self = this;
        const handler = {
            set(target, prop, value) {
                target[prop] = value;
                self.eventBus.emit(EVENTS.update, Object.assign({}, target), target);
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
    // EVENTS
    registerEvents() {
        this.eventBus.on(EVENTS.beforeCreate, this.beforeCreateHandler.bind(this));
        this.eventBus.on(EVENTS.create, this.create.bind(this));
        this.eventBus.on(EVENTS.created, this.createdHandler.bind(this));
        this.eventBus.on(EVENTS.beforeUpdate, this.beforeUpdateHandler.bind(this));
        this.eventBus.on(EVENTS.update, (oldProps, newProps) => this.update(oldProps, newProps));
        this.eventBus.on(EVENTS.updated, this.updatedHandler.bind(this));
        this.eventBus.on(EVENTS.beforeRemove, this.beforeRemoveHandler.bind(this));
        this.eventBus.on(EVENTS.render, this.renderInternal.bind(this));
    }
    // CREATE
    create() {
        this.eventBus.emit(EVENTS.render); // first render
        setTimeout(() => {
            this.eventBus.emit(EVENTS.created);
        }, 0);
    }
    // UPDATE
    update(oldProps, newProps) {
        const isRender = this.beforeUpdateHandler(oldProps, newProps);
        if (isRender) {
            this.eventBus.emit(EVENTS.render);
        }
        setTimeout(() => {
            this.eventBus.emit(EVENTS.updated);
        }, 0);
    }
    forceRender() {
        this.eventBus.emit(EVENTS.render);
    }
    // *
    renderInternal() {
        const context = { data: this.props, state: this.getContext() };
        const element = htmlToElement(this.template(context));
        if (element !== null) {
            for (const childName in this.children) {
                if (Object.prototype.hasOwnProperty.call(this.children, childName)) {
                    const slot = element.querySelector(`${TAG_SLOT}[data-slot=${childName}]`);
                    if (slot !== null) {
                        const child = this.children[childName];
                        if (Array.isArray(child)) {
                            const fragment = document.createDocumentFragment();
                            child.forEach((component) => {
                                fragment.appendChild(component === null || component === void 0 ? void 0 : component.getElement());
                            });
                            slot.replaceWith(fragment || '');
                        }
                        else {
                            slot.replaceWith((child === null || child === void 0 ? void 0 : child.getElement()) || '');
                        }
                    }
                }
            }
            if (this.$element === null) {
                this.$element = element;
                this.$element.setAttribute('data-id', this.id);
            }
            else {
                this.eventBus.emit(EVENTS.beforeRemove);
                setTimeout(() => {
                    var _a;
                    (_a = this.$element.firstElementChild) === null || _a === void 0 ? void 0 : _a.replaceWith(element === null || element === void 0 ? void 0 : element.firstElementChild);
                }, 0);
            }
        }
    }
    // Возвращаем текст, теряем все события!
    getContent() {
        var _a;
        return ((_a = this.$element) === null || _a === void 0 ? void 0 : _a.outerHTML) || '';
    }
    getElement() {
        return this.$element;
    }
}
//# sourceMappingURL=index.js.map