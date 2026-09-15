import { footer, site } from '../../data/site'
import { EmailCopy } from '../ui/EmailCopy'

const labelClasses = 'text-eyebrow font-medium uppercase text-plum'

export function Footer() {
  return (
    <footer className="border-t border-plum/15 bg-mist px-gutter py-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <a href="/" className="font-serif text-base font-semibold tracking-[0.16em] text-plum">
          {site.name.toUpperCase()}
        </a>

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-8">
          <p className="flex items-center gap-3">
            <span className={labelClasses}>Email</span>
            <EmailCopy />
          </p>
        </div>
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-[1280px] flex-col gap-1 border-t border-plum/10 pt-5 text-[0.6875rem] text-ink-soft sm:flex-row sm:justify-between">
        <p>{footer.legal}</p>
        <p>{footer.descriptor}</p>
      </div>
    </footer>
  )
}
