type TypeCallback = (...args: any[]) => unknown;
type TypeNewFunction = (...args: any[]) => any;

export function debounce(callback: TypeCallback, ms: number): TypeNewFunction {
  let timeout: number;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => callback(args), ms);
  };
}
