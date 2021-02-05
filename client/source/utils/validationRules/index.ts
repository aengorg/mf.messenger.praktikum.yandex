import { required, range, email, equalPasswords } from './validationRules.js';
export const rules = { required, range, email, equalPasswords };

export type TRule = (...args: any[]) => string;
export type TErrors = string[];
