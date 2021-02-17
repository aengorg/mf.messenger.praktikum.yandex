export function debounce(callback, ms) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = undefined;
            callback(args);
        }, ms);
    };
}
//# sourceMappingURL=index.js.map