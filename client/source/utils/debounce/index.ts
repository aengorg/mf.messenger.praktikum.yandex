type TypeCallback = (...args: any[]) => unknown;
type TypeNewFunction = (...args: any[]) => any;

export function debounce(callback: TypeCallback, ms: number): TypeNewFunction {
  let timeout: number | undefined;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
      callback(args);
    }, ms);
  };
}
