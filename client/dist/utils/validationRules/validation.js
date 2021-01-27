export function validation(value, rules) {
    const arr = rules.map((rule) => rule(value));
    if (!arr.some((v) => v !== '')) {
        return [];
    }
    return arr.filter((v) => Boolean(v));
}
export function isValid(errors) {
    return errors.length === 0;
}
//# sourceMappingURL=validation.js.map