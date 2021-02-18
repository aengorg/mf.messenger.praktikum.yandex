import { t } from '../../locales/index.js';
import { rules } from '../../utils/validationRules/index.js';
// * SettingPasswordPage;
export const propsSettingPasswordPage = {
    defaultErrorForm: t['defaultErrorForm'],
    formSelector: '#form-setting-password',
    title: {
        text: t['changePassword'],
        level: 1,
        size: 1,
    },
    fieldOldPassword: {
        name: 'oldPassword',
        label: t['oldPassword'],
        type: 'password',
        placeholder: '●●●●●●',
        validation: {
            events: ['blur', 'focus'],
            rules: [rules.required],
        },
    },
    fieldNewPassword: {
        name: 'newPassword',
        label: t['newPassword'],
        type: 'password',
        placeholder: '●●●●●●',
        validation: {
            events: ['blur', 'focus'],
            rules: [rules.required],
        },
    },
    fieldNewPassword2: {
        name: 'newPassword2',
        label: `${t['newPassword']} (${t['again']})`,
        type: 'password',
        placeholder: '●●●●●●',
        validation: {
            events: ['blur', 'focus'],
            rules: [rules.required],
        },
    },
    buttonCancel: {
        text: t['cancel'],
        name: 'cancel',
        type: 'button',
    },
    buttonSave: {
        text: t['save'],
        name: 'submit',
        type: 'submit',
        primary: true,
    },
};
//# sourceMappingURL=props.js.map