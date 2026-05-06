import { useTranslations } from 'next-intl'

import Header from '@/components/Header'

const TermsAndConditions = () => {
  const t = useTranslations('terms_and_conditions')

  return (
    <main className="flex items-center justify-center bg-cream-100 min-h-screen py-[5%] px-[1.6vw]">
      <Header variant="dark" />

      <h1 className="font-serif text-[8.4vw] lg:text-[4vw] text-black-100 leading-[1] lg:leading-[0.9] text-center uppercase">
        {t('title')}
      </h1>
    </main>
  )
}

export default TermsAndConditions
