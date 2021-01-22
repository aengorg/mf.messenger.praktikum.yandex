import { EventBus } from '../EventBus/index.js';
import { compileTemplate } from '../Template/index.js';
import { generationId } from '../../utils/generationId.js';
import { htmlToElement } from '../../utils/htmlToElement.js';
import { TAG_SLOT } from '../../constants/index.js';

export interface Children {
  [key: string]: Component<any>;
}
export interface PropsComponent {}

export interface PropsComponentEmpty extends PropsComponent {}

enum EVENTS {
  beforeCreate,
  create, // * INIT
  created, // * FLOW_CDM
  beforeUpdate,
  update, // * FLOW_CDU
  updated,
  render, // * FLOW_RENDER
}

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

export abstract class Component<TProps extends PropsComponent> {
  readonly id: string;
  readonly eventBus: EventBus<EVENTS>;
  $element: Element | null;
  props: TProps;
  children: Children;

  template: (data: { data: TProps; state: Object }) => string;

  constructor(props: TProps, children?: Children) {
    this.eventBus = new EventBus();

    this.id = generationId();
    this.props = this.makeProxy(props);
    this.children = children || {};

    this.$element = null;
    this.template = compileTemplate(this.render(), Component.name);

    this.registerEvents();
    this.eventBus.emit(EVENTS.beforeCreate);
    this.eventBus.emit(EVENTS.create);
  }

  private makeProxy(props: TProps): TProps {
    const self = this;
    const handler = {
      set(target: TProps, prop: keyof TProps, value: any): boolean {
        target[prop] = value;
        self.eventBus.emit(EVENTS.update, { ...target }, target);
        return true;
      },
      deleteProperty(): never {
        throw new Error('nope');
      },
    };
    return new Proxy(props, handler);
  }

  // TODO PROPS
  // public setProps = (nextProps: { [P in keyof TProps]?: TProps[P] }): void => {
  // Object.assign(this.props, nextProps);
  // this.eventBus.emit(EVENTS.update, this.props, nextProps);
  // };

  protected getProps(): Readonly<TProps> {
    return this.props;
  }

  // EVENTS
  private registerEvents(): void {
    this.eventBus.on(EVENTS.beforeCreate, this.beforeCreateHandler.bind(this));
    this.eventBus.on(EVENTS.create, this.create.bind(this));
    this.eventBus.on(EVENTS.created, this.createdHandler.bind(this));

    this.eventBus.on(EVENTS.beforeUpdate, this.beforeUpdateHandler.bind(this));
    this.eventBus.on(EVENTS.update, (oldProps: TProps, newProps: TProps) =>
      this.update(oldProps, newProps),
    );
    this.eventBus.on(EVENTS.updated, this.updatedHandler.bind(this));

    this.eventBus.on(EVENTS.render, this.renderInternal.bind(this));
  }

  // CREATE
  private create(): void {
    this.eventBus.emit(EVENTS.render); // first render
    this.eventBus.emit(EVENTS.created);
  }

  public abstract beforeCreateHandler(): void;
  public abstract createdHandler(): void;

  // UPDATE
  private update(oldProps: TProps, newProps: TProps): void {
    const isRender = this.beforeUpdateHandler(oldProps, newProps);
    if (isRender) {
      this.eventBus.emit(EVENTS.render);
    }
    this.eventBus.emit(EVENTS.updated);
  }

  public abstract beforeUpdateHandler(
    oldProps: TProps,
    newProps: TProps,
  ): boolean;
  public abstract updatedHandler(): void;

  public abstract getContext(): Object;

  // RENDER
  public abstract render(): string;

  // *
  private renderInternal(): void {
    const context = { data: this.props, state: this.getContext() };
    const element = htmlToElement(this.template(context));

    if (element !== null) {
      for (const childName in this.children) {
        if (Object.prototype.hasOwnProperty.call(this.children, childName)) {
          const slot = element.querySelector(
            `${TAG_SLOT}[data-slot=${childName}]`,
          );
          if (slot !== null) {
            slot.replaceWith(this.children[childName]?.getElement() || '');
          }
        }
      }

      if (this.$element === null) {
        this.$element = element;
        this.$element.setAttribute('data-id', this.id);
      } else {
        // TODO BEFORE DELETE
        this.$element.firstElementChild?.replaceWith(
          element?.firstElementChild as Element,
        );
      }
    }
  }

  // Возвращаем текст, теряем все события!
  public getContent(): string {
    return this.$element?.outerHTML || '';
  }

  public getElement(): Element | null {
    return this.$element;
  }
}