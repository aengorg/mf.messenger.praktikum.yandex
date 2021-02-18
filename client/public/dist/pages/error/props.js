import { t } from '../../locales/index.js';
// * ErrorPage
// 500
export const propsErrorPage500 = {
    bg: 'error500',
    title: {
        text: `${t['serverError']} 500`,
        level: 1,
        size: 1,
        color: 'red',
    },
    link: {
        url: '#login',
        text: t['backToChats'],
        size: 2,
        block: true,
    },
};
// 404
export const propsErrorPage404 = {
    bg: 'error404',
    title: {
        text: `${t['pageNotFound']} 404`,
        level: 1,
        size: 1,
        color: 'red',
    },
    link: {
        url: '#login',
        text: t['backToChats'],
        size: 2,
        block: true,
    },
};
//# sourceMappingURL=props.js.map