'use client'

import { FC } from 'react'
import { useLocale } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

const Footer: FC = () => {
  const pathname = usePathname()
  const currentLocale = useLocale()

  return (
    <footer className="px-[6vw] lg:px-[10vw] flex items-center justify-between w-full py-[16px] border-t border-black-12">
      <span className="font-sans text-[11px] uppercase tracking-[1.2px] font-medium text-darkgrey-100">
      © 2026 Hagi’s
      </span>

      <div className="flex items-center gap-[16px]">
        <span className="font-sans text-[11px] uppercase tracking-[1.2px] font-medium text-darkgrey-100">Language :</span>
        <div className="flex flex-row gap-[8px] items-center">
          {routing.locales.map((locale, _i) => {
            const isActive = locale === currentLocale

            return (
              <Link
                key={locale}
                href={pathname}
                locale={locale}
                className={`font-sans text-[11px] uppercase tracking-[1.2px] font-medium transition-opacity hover:opacity-70 ${
                  isActive ? 'text-black-100' : 'text-darkgrey-100'
                }`}
              >
                {locale.toUpperCase()} {_i < routing.locales.length - 1 ? '/' : ''}
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
