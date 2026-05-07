'use client'

import { FC } from 'react'
import { useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'

const LEGAL_LINKS = [
  { href: '/privacy-policy', key: 'privacy_policy' },
  { href: '/terms-and-conditions', key: 'terms_and_conditions' },
] as const

const LegalNav: FC = () => {
  const pathname = usePathname()
  const t = useTranslations('legal_nav')

  return (
    <nav className="-mx-[6vw] lg:mx-0">
      <ul
        className="
          flex flex-row gap-[24px] overflow-x-auto snap-x snap-mandatory
          px-[6vw] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          lg:flex-col lg:gap-[2px] lg:overflow-visible lg:px-0
        "
      >
        {LEGAL_LINKS.map(({ href, key }) => {
          const isActive = pathname === href

          return (
            <li key={href} className="shrink-0 snap-start">
              <Link
                href={href}
                className={`font-sans text-[12px] font-medium uppercase leading-[1] tracking-[1.2px] text-center transition-opacity hover:opacity-70 ${
                  isActive ? 'text-black-100' : 'text-darkgrey-100'
                }`}
              >
                {t(key)}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default LegalNav
