import { motion, useReducedMotion } from 'framer-motion'
import { contactUrl, hero, site } from '../../data/site'
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

// Pré-visualização COM animação de entrada. Versão sem animação (melhor LCP)
// guardada no scratchpad: Hero.sem-animacao.tsx.
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
        srcSet={hero.image.srcSet}
        sizes="(max-aspect-ratio: 2/3) 66vh, 100vw"
        alt=""
        width={1365}
        height={2048}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 -z-20 size-full object-cover object-[center_32%]"
      />
      {/* Véu claro do lado do texto: a fotografia fica nas cores naturais e o texto escuro lê-se */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-paper/90 via-paper/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-linear-to-t from-paper via-paper/80 to-transparent"
      />
      {/* Véu por baixo da barra de navegação, para os links não se perderem sobre o cabelo */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-32 bg-linear-to-b from-paper/85 to-transparent"
      />

      <motion.div {...animation} className="mx-auto w-full max-w-[1280px]">
        <div className="max-w-[720px]">
          <motion.p {...child} className="mb-5 text-eyebrow font-medium uppercase text-plum">
            {site.motto}
          </motion.p>

          <motion.p {...child} className="mb-3 font-serif text-2xl">
            <span className="font-medium">{site.name}</span>
            <span className="mx-2 text-ink-soft">·</span>
            <span className="font-light text-ink-soft">{site.role}</span>
          </motion.p>

          <motion.h1
            {...child}
            id="hero-title"
            className="font-serif text-display text-balance"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            {...child}
            className="mt-4 font-serif text-lead font-light text-ink-soft text-pretty"
          >
            {hero.lead}
          </motion.p>

          <motion.p
            {...child}
            className="mt-4 max-w-[620px] text-sm font-light leading-relaxed text-ink-soft sm:text-base"
          >
            {hero.body}
          </motion.p>
        </div>

        <motion.div {...child} aria-hidden className="mt-8 h-px w-full max-w-[360px] bg-plum" />

        <motion.div
          {...child}
          className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-plum sm:text-[0.8125rem]">
            {site.tagline}
          </p>
          <CtaLink href={contactUrl} external className="w-full sm:w-auto">
            Agendar uma conversa
          </CtaLink>
        </motion.div>
      </motion.div>
    </section>
  )
}
