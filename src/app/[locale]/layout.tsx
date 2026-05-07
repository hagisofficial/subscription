import { FC, ReactNode } from 'react'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { routing } from '@/i18n/routing'

import '@/styles/globals.css'

const roxborough = localFont({
  src: '../../../public/assets/RoxboroughCF-Thin.woff2',
  weight: '100',
  style: 'normal',
  variable: '--font-serif',
  display: 'swap',
})

const gtAmerica = localFont({
  src: '../../../public/assets/subset-GTAmerica-Medium.woff2',
  weight: '500',
  style: 'normal',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: "Hagi's - Subscription",
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
      className={`${roxborough.variable} ${gtAmerica.variable}`}
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
