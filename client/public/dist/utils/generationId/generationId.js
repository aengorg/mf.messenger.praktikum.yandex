let index = 0;
export function generationId() {
    return `N${Math.random().toString(36).substr(2, 9)}${index++}`;
}
//# sourceMappingURL=generationId.js.map