import { useTranslations } from 'next-intl'
import { use } from 'react'

import Header from '@/components/Header'
import LegalNav from '@/components/LegalNav'

import PrivacyPolicyDE from './PrivacyPolicyDE'
import PrivacyPolicyEN from './PrivacyPolicyEN'

interface PrivacyPolicyProps {
  params: Promise<{ locale: string }>
}

const PrivacyPolicy = ({ params }: PrivacyPolicyProps) => {
  const { locale } = use(params)
  const t = useTranslations('privacy_policy')

  return (
    <main className="bg-cream-100 min-h-screen pt-[120px] pb-[80px] px-[6vw] lg:px-[10vw]">
      <Header variant="dark" />

      <header className="lg:border-b lg:border-black-12 lg:pb-[48px]">
        <h1 className="font-serif text-[20px] lg:text-[100px] text-center py-[16vw] lg:py-[60px] text-black-100 lg:text-nowrap leading-[1] lg:leading-[0.95] uppercase">
          {t('title')}
        </h1>
      </header>

      <div className="pt-[40px] flex flex-col gap-[40px] lg:flex-row lg:gap-[80px] lg:pt-[60px]">
        <aside className="lg:w-[200px] lg:shrink-0 lg:sticky lg:top-[120px] lg:self-start max-lg:border-b max-lg:py-[24px] max-lg:border-black-12">
          <LegalNav />
        </aside>

        <article
          className="
            flex-1 max-w-[760px] text-black-100 mx-auto
            [&_h2]:font-serif [&_h2]:uppercase [&_h2]:text-[24px] [&_h2]:lg:text-[32px]
            [&_h2]:leading-[1.1] [&_h2]:mt-[48px] [&_h2]:mb-[16px]
            [&_h3]:font-sans [&_h3]:uppercase [&_h3]:text-[11px] [&_h3]:font-normal
            [&_h3]:tracking-[1.1px] [&_h3]:leading-[1.5] [&_h3]:text-black-100
            [&_h3]:mt-[32px] [&_h3]:mb-[12px]
            [&_h4]:font-sans [&_h4]:uppercase [&_h4]:text-[11px] [&_h4]:font-normal
            [&_h4]:tracking-[1.1px] [&_h4]:leading-[1.5] [&_h4]:text-black-100
            [&_h4]:mt-[24px] [&_h4]:mb-[8px]
            [&_p]:font-sans [&_p]:text-[12px] [&_p]:font-normal
            [&_p]:leading-[1.6] [&_p]:text-darkgrey-100 [&_p]:mb-[16px]
            [&_ul]:list-disc [&_ul]:pl-[24px] [&_ul]:mb-[16px]
            [&_li]:font-sans [&_li]:text-[12px] [&_li]:font-normal
            [&_li]:leading-[1.6] [&_li]:text-darkgrey-100 [&_li]:mb-[6px]
            [&_a:hover]:opacity-70
          "
        >
          {locale === 'de' ? <PrivacyPolicyDE /> : <PrivacyPolicyEN />}
        </article>
      </div>
    </main>
  )
}

export default PrivacyPolicy
