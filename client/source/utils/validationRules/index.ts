import { required, range, email, equalPasswords } from './validationRules.js';

export type TRule = (...args: any) => string;
export type TErrors = string[];

export const rules = { required, range, email, equalPasswords };
