import { t } from '../../locales/index';
import { generationId } from '../../utils/generationId/index';
import { generationInt } from '../../utils/generationInt/index';
import { PropsSignupPage } from '../../pages/signup/index';
import { rules } from '../../utils/validationRules/index';

// * SignupPage;
export const propsSignupPage: PropsSignupPage = {
  defaultErrorForm: t['defaultErrorForm'],
  formSelector: '#form-signup',
  title: {
    text: t['join'],
    level: 1,
    size: 1,
  },
  linkLogin: {
    url: '#login',
    text: t['logIn'],
    block: true,
  },
  fieldEmail: {
    name: 'email',
    label: t['email'],
    type: 'text',
    placeholder: 'Ivan@yandex.ru',
    initValue: `${generationId()}@example.com`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.email],
    },
  },
  fieldLogin: {
    name: 'login',
    label: t['login'],
    type: 'text',
    placeholder: 'Abracadabra',
    initValue: `${generationId()}`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldFirstName: {
    name: 'first_name',
    label: t['firstName'],
    type: 'text',
    placeholder: 'Ivan',
    initValue: 'Ivan',
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldSecondName: {
    name: 'second_name',
    label: t['secondName'],
    type: 'text',
    placeholder: 'Markov',
    initValue: `Markov`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required],
    },
  },
  fieldPhone: {
    name: 'phone',
    label: t['phone'],
    type: 'text',
    placeholder: '+79008007712',
    initValue: `+7800${generationInt(1000000, 9999999)}`,
    validation: {
      events: ['blur', 'focus'],
      rules: [rules.required, rules.phone],
    },
  },
  fieldPassword: {
    name: 'password',
    label: t['password'],
    type: 'password',
    placeholder: '●●●●●●',
    initValue: `password`,
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  fieldPassword2: {
    name: 'password2',
    label: `${t['password']} (${t['again']})`,
    type: 'password',
    placeholder: '●●●●●●',
    initValue: `password`,
    validation: {
      events: ['blur', 'focus'],
      rules: [(v) => rules.range(v, 8), rules.required],
    },
  },
  buttonSignup: {
    text: t['registration'],
    name: 'submit',
    type: 'submit',
    primary: true,
  },
};
