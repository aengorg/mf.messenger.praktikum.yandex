export class EventBus {
    constructor() {
        this.listeners = new Map();
    }
    isExistEvent(event) {
        if (!this.listeners.has(event)) {
            throw new Error(`Нет события: ${event}`);
        }
    }
    on(event, callback) {
        var _a;
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.push(callback);
    }
    off(event, callback) {
        this.isExistEvent(event);
        const filtered = this.listeners
            .get(event)
            .filter((listener) => listener !== callback);
        this.listeners.set(event, filtered);
    }
    emit(event, ...args) {
        var _a;
        this.isExistEvent(event);
        (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
            listener(...args);
        });
    }
}
//# sourceMappingURL=EventBus.js.map