'use client'

import { FC, useState, FormEvent } from 'react'
import { useTranslations } from 'next-intl'

import IconArrow from '@/components/icons/icon-arrow'

import { Link } from '@/i18n/navigation'

const NewsletterForm: FC = () => {
  const t = useTranslations('home')

  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showTermsError, setShowTermsError] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (status === 'loading') return

    if (!agreed) {
      setShowTermsError(true)
      return
    }

    if (!email) return

    setShowTermsError(false)
    setStatus('loading')

    try {
      const companyId = process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_API_KEY
      const listId = process.env.NEXT_PUBLIC_KLAVIYO_LIST_ID

      const res = await fetch(
        `https://a.klaviyo.com/client/subscriptions/?company_id=${companyId}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Revision: '2024-10-15',
          },
          body: JSON.stringify({
            data: {
              type: 'subscription',
              attributes: {
                profile: {
                  data: {
                    type: 'profile',
                    attributes: { email },
                  },
                },
              },
              relationships: {
                list: {
                  data: { type: 'list', id: listId },
                },
              },
            },
          }),
        },
      )

      if (!res.ok) throw new Error('Subscribe failed')

      setStatus('success')
      setEmail('')
      setAgreed(false)
    } catch {
      setStatus('error')
    }
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
        <div
          className={`flex h-[52px] items-center justify-between border px-[20px] ${
            status === 'error' ? 'border-burgundy-100' : 'border-white-100/40'
          }`}
        >
          {status === 'success' ? (
            <p
              className="w-full font-sans text-[14px] leading-[1.5] text-cream-100"
              aria-live="polite"
            >
              {t('success')}
            </p>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('placeholder')}
                className="w-full bg-transparent font-sans text-[14px] leading-[1.5] text-white-100 placeholder:text-white-100 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="ml-[12px] shrink-0 text-cream-100 transition-opacity hover:opacity-70 disabled:opacity-40"
                aria-label={t('submit')}
              >
                <IconArrow className="h-[16px] w-[16px] text-white-100" />
              </button>
            </>
          )}
        </div>

        {status === 'error' && (
          <p className="font-sans-regular text-[10px] leading-[1.3] text-cream-100">
            {t('error')}
          </p>
        )}

        {showTermsError && (
          <p
            className="font-sans-regular text-[10px] leading-[1.3] text-cream-100"
            aria-live="polite"
          >
            {t('terms_required')}
          </p>
        )}

        <label className="flex cursor-pointer items-center gap-[8px]">
          <span className="relative flex h-[14px] w-[14px] shrink-0 items-center justify-center">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked)
                if (e.target.checked) setShowTermsError(false)
              }}
              className={`peer h-full w-full appearance-none border bg-transparent checked:border-white-100 checked:bg-white-100 ${
                showTermsError ? 'border-burgundy-100' : 'border-white-100/40'
              }`}
            />
            <svg
              viewBox="0 0 14 14"
              className="pointer-events-none absolute hidden h-[10px] w-[10px] peer-checked:block"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7.5l2.5 2.5L11 4.5" />
            </svg>
          </span>
          <span className="font-sans-regular text-[11px] leading-[1.3] text-white-100">
            {t.rich('terms', {
              terms: (chunks) => (
                <Link
                  href="/terms-and-conditions"
                  className="underline hover:text-cream-100 text-[#9A9A9A]"
                >
                  {chunks}
                </Link>
              ),
              privacy: (chunks) => (
                <Link
                  href="/privacy-policy"
                  className="underline hover:text-cream-100 text-[#9A9A9A]"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
      </div>
    </form>
  )
}

export default NewsletterForm
