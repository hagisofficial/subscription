'use client'

import { useRef, useState, useEffect } from 'react'
import MuxVideo from '@mux/mux-video-react'
import { useTranslations } from 'next-intl'

import Header from '@/components/Header'
import NewsletterForm from '@/components/NewsletterForm'
import IconSound from '@/components/icons/icon-sound'
import IconMute from '@/components/icons/icon-mute'

import { MUX_PLAYBACK_IDS, MUX_THUMBNAILS } from '@/constants/mux'

const DESKTOP_BREAKPOINT = 1024

const Home = () => {
  const t = useTranslations('home')

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(document.documentElement)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [isDesktop])

  const playbackId = isDesktop ? MUX_PLAYBACK_IDS.desktop : MUX_PLAYBACK_IDS.mobile
  const poster = isDesktop ? MUX_THUMBNAILS.desktop : MUX_THUMBNAILS.mobile

  return (
    <main className="relative w-full h-[100dvh] overflow-hidden">
      <Header variant="light" />

      <div className="absolute inset-0">
        <MuxVideo
          key={playbackId}
          ref={videoRef}
          playbackId={playbackId}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          poster={poster}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black-12" />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full px-[1.6vw] z-10">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-[8.4vw] lg:text-[4vw] text-cream-100 leading-[1] lg:leading-[0.9] text-center uppercase mb-[60px]">
          <span className="block">{t('headline_line_0')}</span>
            <span className="block">{t('headline_line_1')}</span>
            <span className="block">{t('headline_line_2')}</span>
            <span className="block">{t('headline_line_3')}</span>
          </h1>

          <NewsletterForm />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center py-[32px] px-[1.6vw] z-20">
        <a
          href="http://hagisbarbering.com"
          target="_blank"
          className="group absolute left-1/2 -translate-x-1/2 flex flex-col items-start gap-[8px]"
        >
          <span className="font-sans-regular text-[11px] uppercase leading-none tracking-[1.1px] text-cream-100">
            {t('cta')}
          </span>
          <span className="h-[1px] w-full bg-cream-100 transition-opacity group-hover:opacity-70" />
        </a>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="ml-auto flex items-center gap-[12px]"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          <span className="font-sans-regular text-[11px] leading-[1.3] text-cream-100">
            {isMuted ? 'Sound on' : 'Sound off'}
          </span>
          {isMuted ? <IconSound className="text-cream-100 w-[12px]" /> : <IconMute className="text-cream-100 w-[12px]" />}
        </button>
      </div>
    </main>
  )
}

export default Home
