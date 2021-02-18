import { t } from '../../locales/index.js';
import { rules } from '../../utils/validationRules/index.js';
// * LoginPage
export const propsLoginPage = {
    defaultErrorForm: t['defaultErrorForm'],
    formSelector: '#form-login',
    title: {
        text: t['welcome'],
        level: 1,
        size: 1,
    },
    linkSignup: {
        url: '#signup',
        text: t['registration'],
        block: true,
    },
    fieldLogin: {
        name: 'login',
        label: t['login'],
        type: 'text',
        placeholder: 'Abracadabra',
        initValue: `Nm31odvlhi20`,
        validation: {
            events: ['blur', 'focus'],
            rules: [rules.required],
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
            rules: [rules.required],
        },
    },
    buttonLogin: {
        text: t['logIn'],
        name: 'submit',
        type: 'submit',
        primary: true,
    },
};
//# sourceMappingURL=props.js.map