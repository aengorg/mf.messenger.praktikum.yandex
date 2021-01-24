import { TRule, TErrors } from './index.js';

export function validation(value: string | number, rules: TRule[]): TErrors {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== '')) {
    return [];
  }
  return arr.filter((v) => Boolean(v));
}

export function isValid(errors: TErrors): boolean {
  return errors.length === 0;
}
