import 'mocha';
import { expect, assert } from 'chai';
import sinon from 'sinon';

import { EventBus } from './EventBus';

describe('Event bus', () => {
  it('добавляем обработчик события', () => {
    const bus = new EventBus();
    const handler = () => {};

    bus.on('event-1', handler);

    expect(bus.listeners.has('event-1')).to.be.true;
  });

  it('удаляем обработчик события', () => {
    const bus = new EventBus();
    const handler = () => {};
    const handler2 = () => {};

    bus.on('event-1', handler);
    bus.on('event-1', handler2);
    bus.off('event-1', handler);

    expect(bus.listeners.get('event-1').length).to.equal(1);
  });

  it('нельзя удалить не существующий обработчик', () => {
    const bus = new EventBus();
    const handler = () => {};

    const expected = () => {
      bus.off('event-1', handler);
    };

    expect(expected).to.throw(Error);
  });

  it('вызываем обработчики события', () => {
    const bus = new EventBus();
    const stub = sinon.stub();
    const spy = sinon.spy();

    bus.on('event-1', stub);
    bus.emit('event-1');

    assert(stub.calledBefore(spy));
  });

  it('удаляем событие', () => {
    const bus = new EventBus();
    const handler = () => {};

    bus.on('event-1', handler);
    bus.off('event-1', handler);

    expect(bus.listeners.get('event-1').length).to.equal(0);
  });
});
