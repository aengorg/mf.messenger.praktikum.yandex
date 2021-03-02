import { LANG } from '../constants/index';

import { ru } from './ru';
import { en } from './en';

const locales: { [k: string]: { [k: string]: string } } = {
  ru: ru,
  en: en,
};

export let t = locales[LANG];
