'use client'

import { FC } from 'react'
import { useLocale } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const Footer: FC = () => {
  const pathname = usePathname()
  const currentLocale = useLocale()

  return (
    <footer className="flex items-center justify-between w-full mt-[80px] pt-[24px] border-t border-black-12">
      <span className="font-sans text-[12px] uppercase tracking-[1.2px] font-medium text-darkgrey-100">
        Hagi&rsquo;s 2026
      </span>

      <div className="flex items-center gap-[16px]">
        {routing.locales.map((locale) => {
          const isActive = locale === currentLocale

          return (
            <Link
              key={locale}
              href={pathname}
              locale={locale}
              className={`font-sans text-[12px] uppercase tracking-[1.2px] font-medium transition-opacity hover:opacity-70 ${
                isActive ? 'text-black-100' : 'text-darkgrey-100'
              }`}
            >
              {locale.toUpperCase()}
            </Link>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
