import { closing, contactUrl, site } from '../../data/site'
import { CtaLink } from '../ui/CtaLink'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function ClosingCta() {
  return (
    <Section id="contacto" labelledBy="contacto-title">
      <Reveal className="flex flex-col items-center gap-6 text-center">
        <h2 id="contacto-title" className="max-w-[720px] font-serif text-title text-balance">
          {closing.title}
        </h2>
        <CtaLink href={contactUrl} external>
          {closing.cta}
        </CtaLink>
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-plum">
          {site.tagline}
        </p>
      </Reveal>
    </Section>
  )
}
