import { motion, useReducedMotion } from 'framer-motion'
import { hero, site, whatsappUrl } from '../../data/site'
import { editorialEase } from '../../lib/motion'
import { CtaLink } from '../ui/CtaLink'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: editorialEase } },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const animation = prefersReducedMotion
    ? {}
    : { variants: container, initial: 'hidden' as const, animate: 'visible' as const }
  const child = prefersReducedMotion ? {} : { variants: item }

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-gutter pb-10 pt-24 lg:pb-16"
    >
      <img
        src={hero.image.src}
        alt={hero.image.alt}
        width={1264}
        height={848}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_center]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-plum-deep/55" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-linear-to-t from-plum-deep/80 to-transparent"
      />

      <motion.div {...animation} className="mx-auto w-full max-w-[1280px]">
        <div className="max-w-[820px]">
          <motion.h1 {...child} id="hero-title" className="font-serif text-display text-balance">
            {hero.headline}
          </motion.h1>

          <motion.p {...child} className="mt-4 font-serif text-lead font-light text-linen text-pretty">
            {hero.lead}
          </motion.p>

          <motion.p
            {...child}
            className="mt-4 max-w-[620px] text-sm font-light leading-relaxed text-bone/85 sm:text-base"
          >
            {hero.body}
          </motion.p>
        </div>

        <motion.div {...child} aria-hidden className="mt-8 h-px w-full max-w-[360px] bg-gold" />

        <motion.div
          {...child}
          className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[0.8125rem]">
            {site.tagline}
          </p>
          <CtaLink href={whatsappUrl} external className="w-full sm:w-auto">
            Agendar uma conversa
          </CtaLink>
        </motion.div>
      </motion.div>
    </section>
  )
}
