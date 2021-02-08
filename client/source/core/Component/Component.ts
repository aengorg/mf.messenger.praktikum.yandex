import { EventBus } from '../EventBus/index.js';
import { compileTemplate } from '../Template/index.js';
import { generationId } from '../../utils/generationId/index.js';
import { htmlToElement } from '../../utils/htmlToElement/index.js';
import { TAG_SLOT } from '../../constants/index.js';

// export interface Children {
//   [key: string]: Component<any>;
// }
export interface Children {
  [key: string]: any;
}

export interface PropsComponent {
  className?: string;
}

export interface PropsComponentEmpty extends PropsComponent {}

enum Events {
  beforeCreate,
  create, // * INIT
  created, // * FLOW_CDM
  beforeUpdate,
  update, // * FLOW_CDU
  updated,
  beforeRemove,
  render, // * FLOW_RENDER
}
export abstract class Component<TProps extends PropsComponent> {
  readonly id: string;
  readonly eventBus: EventBus<Events>;
  public children: Children;
  public $element: HTMLElement | null;
  public props: TProps;

  template: (data: { data: TProps; state: Object }) => string;

  constructor(props: TProps, children?: Children) {
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

  private makeProxy(props: TProps): TProps {
    const self = this;
    const handler = {
      set(target: TProps, prop: keyof TProps, value: any): boolean {
        target[prop] = value;
        self.eventBus.emit(Events.update, { ...target }, target);
        return true;
      },
      deleteProperty(): never {
        throw new Error('nope');
      },
    };
    return new Proxy(props, handler);
  }

  public setProps = (nextProps: { [P in keyof TProps]?: TProps[P] }): void => {
    this.props = Object.assign(this.props, nextProps);
    this.eventBus.emit(Events.update, this.props, nextProps);
  };

  public getProps(): Readonly<TProps> {
    return this.props;
  }

  // Events
  private registerEvents(): void {
    this.eventBus.on(Events.beforeCreate, this.beforeCreateHandler.bind(this));
    this.eventBus.on(Events.create, this.create.bind(this));
    this.eventBus.on(Events.created, this.createdHandler.bind(this));

    this.eventBus.on(Events.beforeUpdate, this.beforeUpdateHandler.bind(this));
    this.eventBus.on(Events.update, (oldProps: TProps, newProps: TProps) =>
      this.update(oldProps, newProps),
    );
    this.eventBus.on(Events.updated, this.updatedHandler.bind(this));

    this.eventBus.on(Events.beforeRemove, this.beforeRemoveHandler.bind(this));

    this.eventBus.on(Events.render, this.renderInternal.bind(this));
  }

  // CREATE
  private create(): void {
    this.eventBus.emit(Events.render); // first render
    setTimeout(() => {
      this.eventBus.emit(Events.created);
    }, 0);
  }

  public abstract beforeCreateHandler(): void;
  public abstract createdHandler(): void;

  // UPDATE
  private update(oldProps: TProps, newProps: TProps): void {
    const isRender = this.beforeUpdateHandler(oldProps, newProps);
    if (isRender) {
      this.eventBus.emit(Events.render);
    }
    setTimeout(() => {
      this.eventBus.emit(Events.updated);
    }, 0);
  }

  public abstract beforeUpdateHandler(
    oldProps: TProps,
    newProps: TProps,
  ): boolean;
  public abstract updatedHandler(): void;

  public abstract beforeRemoveHandler(): void;

  public abstract getContext(): Object;

  // RENDER
  public abstract render(): string;
  public forceRender(): void {
    this.eventBus.emit(Events.render);
  }

  // *
  private renderInternal(): void {
    const context = { data: this.props, state: this.getContext() };
    const element: HTMLElement = htmlToElement(this.template(context));

    if (element !== null) {
      for (const childName in this.children) {
        if (Object.prototype.hasOwnProperty.call(this.children, childName)) {
          const slot = element.querySelector(
            `${TAG_SLOT}[data-slot=${childName}]`,
          );

          if (slot !== null) {
            const child = this.children[childName];
            if (Array.isArray(child)) {
              const fragment = document.createDocumentFragment();
              child.forEach((component) => {
                fragment.appendChild(component?.getElement());
              });
              slot.replaceWith(fragment || '');
            } else {
              slot.replaceWith(child?.getElement() || '');
            }
          }
        }
      }

      if (this.$element === null) {
        this.$element = element;
        this.$element.setAttribute('data-id', this.id);
      } else {
        this.eventBus.emit(Events.beforeRemove);
        setTimeout(() => {
          this.$element!.firstElementChild?.replaceWith(
            element?.firstElementChild as HTMLElement,
          );
        }, 0);
      }
    }
  }

  // Возвращаем текст, теряем все события!
  public getContent(): string {
    return this.$element?.outerHTML || '';
  }

  public getElement(): HTMLElement {
    return this.$element || document.createElement('error');
  }

  public show(): void {
    // this.$element!.style.visibility = 'visible';
    this.$element!.style.display = 'initial';
  }

  public hide(): void {
    this.$element!.style.display = 'none';
    // this.$element!.style.visibility = 'hidden';
    // this.$element!.style.position = 'absolute';
  }
}