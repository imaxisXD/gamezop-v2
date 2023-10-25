export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ar', 'fr', 'kn', 'or', 'ru', 'ta', 'te', 'vi']
} as const

export type Locale = (typeof i18n)['locales'][number]