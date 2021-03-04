import { LANG } from '../constants/index';

import { ru } from './ru';
import { en } from './en';

const locales: { [k: string]: { [k: string]: string } } = {
  ru,
  en,
};

export const t = locales[LANG];
