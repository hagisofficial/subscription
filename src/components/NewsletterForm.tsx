'use client'

import { FC, useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'

import IconArrow from '@/components/icons/icon-arrow'

import { Link } from '@/i18n/navigation'

const NewsletterForm: FC = () => {
  const t = useTranslations('home')

  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!email || !agreed) return
    // TODO: integrate newsletter API
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[378px] flex-col gap-[40px] md:max-w-[378px]"
    >
      <p className="text-center font-sans text-[10px] uppercase leading-[1.2] tracking-[0.4px] text-cream-100 md:text-[12px] md:tracking-[0.48px]">
        {t('subtitle_line_1')}
        <br />
        {t('subtitle_line_2')}
      </p>

      <div className="flex flex-col gap-[12px]">
        <div className="flex h-[52px] items-center justify-between border border-white-100/40 px-[20px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            className="w-full bg-transparent font-sans text-[14px] leading-[1.5] text-white-100 placeholder:text-grey-100 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="ml-[12px] shrink-0 text-cream-100 transition-opacity hover:opacity-70"
            aria-label={t('submit')}
          >
            <IconArrow className="h-[16px] w-[16px] text-white-100" />
          </button>
        </div>

        <label className="flex cursor-pointer items-center gap-[8px]">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="h-[14px] w-[14px] shrink-0 appearance-none border border-white-100/40 bg-transparent checked:bg-white-100/20"
          />
          <span className="font-sans text-[10px] leading-[1.3] text-grey-100">
            {t('terms_prefix')}{' '}
            <Link
              href="/terms-and-conditions"
              className="underline hover:text-cream-100"
            >
              {t('terms_link')}
            </Link>{' '}
            {t('terms_suffix')}
          </span>
        </label>
      </div>
    </form>
  )
}

export default NewsletterForm
