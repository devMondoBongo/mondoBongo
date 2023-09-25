import 'server-only';

const translations = {
    'fr-fr': () =>
        import('@/translations/fr-fr.json').then((module) => module.default),
    'en-us': () =>
        import('@/translations/en-us.json').then((module) => module.default),
};

export const getTranslation = (locale) =>
    translations[locale]?.() ?? translations['fr-fr']();
