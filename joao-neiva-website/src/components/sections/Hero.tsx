import { contactUrl, hero, site } from '../../data/site'
import { CtaLink } from '../ui/CtaLink'

// Sem animação de entrada: o título é o elemento LCP e o Google só o conta quando está visível.
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-gutter pb-10 pt-24 lg:pb-16"
    >
      {/* Duotone: o multiply sobre o bordô funde o fundo branco de estúdio na cor da marca */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-plum">
        <img
          src={hero.image.src}
          srcSet={hero.image.srcSet}
          sizes="(max-aspect-ratio: 2/3) 66vh, 100vw"
          alt=""
          width={1365}
          height={2048}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover object-[center_32%] mix-blend-multiply"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-plum-deep/85 via-plum-deep/35 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-plum-deep/90 to-transparent"
      />

      <div className="mx-auto w-full max-w-[1280px]">
        <div className="max-w-[720px]">
          <p className="mb-5 text-eyebrow font-medium uppercase text-gold">{site.motto}</p>

          <h1 id="hero-title" className="font-serif text-display text-balance">
            {hero.headline}
          </h1>

          <p className="mt-4 font-serif text-lead font-light text-linen text-pretty">
            {hero.lead}
          </p>

          <p className="mt-4 max-w-[620px] text-sm font-light leading-relaxed text-bone/85 sm:text-base">
            {hero.body}
          </p>
        </div>

        <div aria-hidden className="mt-8 h-px w-full max-w-[360px] bg-gold" />

        <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-gold sm:text-[0.8125rem]">
            {site.tagline}
          </p>
          <CtaLink href={contactUrl} external className="w-full sm:w-auto">
            Agendar uma conversa
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
