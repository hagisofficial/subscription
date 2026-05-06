import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/': {
      en: '/',
      de: '/',
    },
    '/terms-and-conditions': {
      en: '/terms-and-conditions',
      de: '/agb',
    },
  },
})
