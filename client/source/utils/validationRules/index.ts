export type TRule = (...args: any[]) => string;
export type TErrors = string[];
export { required, range, email, equalPasswords } from './validationRules.js';
