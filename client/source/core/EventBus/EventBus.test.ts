import 'mocha';
import { expect } from 'chai';

import { EventBus } from './EventBus';

describe('Event bus', () => {
  it('добавляем обработчик события', () => {
    const bus = new EventBus();
    const handler = () => {};

    bus.on('event-1', handler);

    expect(bus.listeners.hasOwnProperty('event-1')).to.be.true;
  });

  it('удаляем обработчик события', () => {
    const bus = new EventBus();
    const hendler = () => {};
    const hendler2 = () => {};

    bus.on('event-1', hendler);
    bus.on('event-1', hendler2);
    bus.off('event-1', hendler);

    expect(bus.listeners['event-1'].length).to.equal(1);
  });

  // it('нельзя удалить не существующий обработчик', () => {
  //   const bus = new EventBus();
  //   const hendler = () => {};

  //   const expected = () => {
  //     bus.off('event-1', hendler);
  //   };

  //   expect(expected).toThrow(Error);
  // });

  // it('вызываем обработчики события', () => {
  //   const bus = new EventBus();
  //   const mock = jest.fn();

  //   bus.on('event-1', mock);
  //   bus.emit('event-1');

  //   expect(mock).toBeCalled();
  // });

  // it('удаляем событие', () => {
  //   const bus = new EventBus();
  //   const hendler = () => {};

  //   bus.on('event-1', hendler);
  //   bus.off('event-1', hendler);
  //   expect(Object.keys(bus.listeners).length).toBe(0);
  // });
});
