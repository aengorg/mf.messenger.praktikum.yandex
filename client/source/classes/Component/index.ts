import { EventBus } from '../EventBus/index.js';
import { generationId } from '../../utils/generationId.js';

/**
 *   создание компонента
 *   еще нет в доме
 *   рендер не запущен
 *            ↓
 *   проксирование
 *   пропсов и стейта
 *            ↓
 *   регистрация событий
 *            ↓
 *   инициализация компонента
 *            ↓
 *
 */

enum EVENTS {
  beforeCreate,
  create,
  created,

  beforeUpdate,
  update,
  updated,

  beforeDestroy,
  destroy,
  destroyed,

  childUpdated,
}

export abstract class Component<TProps extends object, TState extends object> {
  // для однозначной индификации в dom
  public readonly id: string;
  // шина событий для жизненного цикла компонента
  private readonly eventBus: EventBus<EVENTS>;
  // состояние компонента
  protected state: TState;
  // входные параметры
  private props: TProps;
  // ссылка на dom element
  private $element: HTMLElement;

  constructor(tagName: string = 'div', props: TProps) {
    this.eventBus = new EventBus();

    this.id = generationId();
    this.props = { ...props };

    this.$element = document.createElement(tagName);

    this.registerEvents();
    this.eventBus.emit(EVENTS.create);
  }

  // STATE
  protected getState(): Readonly<TState> {
    return this.state;
  }

  public setState(newState: any): void {
    this.state = Object.assign(this.state, newState);
    this.eventBus.emit(EVENTS.update);
  }

  // PROPS
  public setProps = (nextProps: any): void => {
    Object.assign(this.props, nextProps);
    this.eventBus.emit(EVENTS.update);
  };

  protected getProps(): Readonly<TProps> {
    return this.props;
  }

  // EVENTS
  private registerEvents(): void {
    this.eventBus.on(EVENTS.beforeCreate, this.beforeCreateHandler.bind(this));
    this.eventBus.on(EVENTS.create, this.create.bind(this));
    this.eventBus.on(EVENTS.created, this.createdHandler.bind(this));

    this.eventBus.on(EVENTS.beforeUpdate, this.beforeUpdateHandler.bind(this));
    this.eventBus.on(EVENTS.update, this.update.bind(this));
    this.eventBus.on(EVENTS.updated, this.updatedHandler.bind(this));

    this.eventBus.on(
      EVENTS.beforeDestroy,
      this.beforeDestroyHandler.bind(this),
    );
    this.eventBus.on(EVENTS.destroy, this.destroy.bind(this));
    this.eventBus.on(EVENTS.destroyed, this.destroyedHandler.bind(this));
  }

  // CREATE
  private create(): void {
    this.eventBus.emit(EVENTS.beforeCreate);
    this.renderInternal(); // render
    this.eventBus.emit(EVENTS.created);
  }

  public abstract beforeCreateHandler(): void;
  public abstract createdHandler(): void;

  // UPDATE
  private update(): void {
    // какие-то действия
  }

  public abstract beforeUpdateHandler(): void;
  public abstract updatedHandler(): void;

  // DESTROY
  private destroy(): void {
    this.eventBus.emit(EVENTS.beforeDestroy);
    // какие-то действия
    this.eventBus.emit(EVENTS.destroyed);
  }

  public abstract beforeDestroyHandler(): void;
  public abstract destroyedHandler(): void;

  // RENDER
  public abstract render(props: Readonly<TProps>): { template: string };

  private renderInternal = () => {
    // МАГИЯ
  };
}
