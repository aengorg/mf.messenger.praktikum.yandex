"use strict";
// Разрешили подключить jest. так что как будет время напишу тесты
// import { EventBus } from './index';
// describe('Event bus', () => {
//   it('добавляем обработчик события', () => {
//     const bus = new EventBus();
//     const hendler = () => {};
//     bus.on('event-1', () => {});
//     expect(bus.listeners.hasOwnProperty('event-1')).toBe(true);
//   });
//   it('удаляем обработчик события', () => {
//     const bus = new EventBus();
//     const hendler = () => {};
//     const hendler2 = () => {};
//     bus.on('event-1', hendler);
//     bus.on('event-1', hendler2);
//     bus.off('event-1', hendler);
//     expect(bus.listeners['event-1'].length).toBe(1);
//   });
//   it('нельзя удалить не существующий обработчик', () => {
//     const bus = new EventBus();
//     const hendler = () => {};
//     const expected = () => {
//       bus.off('event-1', hendler);
//     };
//     expect(expected).toThrow(Error);
//   });
//   it('вызываем обработчики события', () => {
//     const bus = new EventBus();
//     const mock = jest.fn();
//     bus.on('event-1', mock);
//     bus.emit('event-1');
//     expect(mock).toBeCalled();
//   });
//   it('удаляем событие', () => {
//     const bus = new EventBus();
//     const hendler = () => {};
//     bus.on('event-1', hendler);
//     bus.off('event-1', hendler);
//     expect(Object.keys(bus.listeners).length).toBe(0);
//   });
// });
//# sourceMappingURL=test.js.map