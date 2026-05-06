import { FC, ReactNode } from 'react'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { routing } from '@/i18n/routing'

import '@/styles/globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: "Hagi's - Coming Soon",
  description: 'Subscribe to be the first to know when we launch.',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

interface RootLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
