type TRule = (...args: any) => string | boolean;

export function validation(value: string | number, rules: TRule[]) {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== '')) {
    return [];
  }
  return arr.filter((v) => Boolean(v));
}
