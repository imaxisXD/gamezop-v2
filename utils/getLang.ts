import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
    ar: () => import('@/dictionaries/ar.json').then(module => module.default),
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    fr: () => import('@/dictionaries/fr.json').then(module => module.default),
    hi: () => import('@/dictionaries/hi.json').then(module => module.default),
    kn: () => import('@/dictionaries/kn.json').then(module => module.default),
    or: () => import('@/dictionaries/or.json').then(module => module.default),
    ru: () => import('@/dictionaries/ru.json').then(module => module.default),
    ta: () => import('@/dictionaries/ta.json').then(module => module.default),
    te: () => import('@/dictionaries/te.json').then(module => module.default),
    vi: () => import('@/dictionaries/vi.json').then(module => module.default)
}

export const getLang = async (locale: Locale) => dictionaries[locale]();