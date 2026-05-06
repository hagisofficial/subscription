import { FC } from 'react'

import HagisLogo from '@/components/icons/hagis-logo'

import { Link } from '@/i18n/navigation'

interface HeaderProps {
  variant?: 'light' | 'dark'
}

const Header: FC<HeaderProps> = ({ variant = 'light' }) => (
  <header className="absolute left-0 top-0 flex items-center justify-center w-full py-[24px] lg:py-[1.3%] px-[1.6vw] px-[20px] lg:px-[1.6vw] z-20">
    <Link href="/">
      <HagisLogo
        className={`${variant === 'light' ? 'text-cream-100' : 'text-black-100'} w-[16vw] sm:w-[10vw] lg:w-[4.6vw]`}
      />
    </Link>
  </header>
)

export default Header
