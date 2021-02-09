import {
  required,
  range,
  email,
  equalPasswords,
  phone,
} from './validationRules.js';
export const rules = { required, range, email, equalPasswords, phone };

export type TRule = (...args: any[]) => string;
export type TErrors = string[];
