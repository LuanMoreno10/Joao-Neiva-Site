import { contactUrl, footer, site } from '../../data/site'
import { CtaLink } from '../ui/CtaLink'
import { EmailCopy } from '../ui/EmailCopy'
import { Reveal } from '../ui/Reveal'

export function Footer() {
  return (
    <footer id="contacto" className="bg-plum-deep px-gutter py-section">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[720px] font-serif text-title text-balance">{footer.title}</h2>
          <CtaLink href={contactUrl} external>
            {footer.cta}
          </CtaLink>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <EmailCopy />
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
            {site.tagline}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-gold/30 pt-6 text-[0.6875rem] text-bone/70 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <p>{footer.descriptor}</p>
        </div>
      </div>
    </footer>
  )
}
