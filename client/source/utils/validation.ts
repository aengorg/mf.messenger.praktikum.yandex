export function validation(value: string | number, rules: Function[]) {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== '')) {
    return [];
  }
  return arr.filter((v) => Boolean(v));
}
