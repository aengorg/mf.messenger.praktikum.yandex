import { TRule } from './index';

export function validation(value: string | number, rules: TRule[]): string[] {
  const arr = rules.map((rule) => rule(value));
  if (!arr.some((v) => v !== '')) {
    return [];
  }
  return arr.filter((v) => Boolean(v));
}

export function isValid(errors: string[]): boolean {
  return errors.length === 0;
}
