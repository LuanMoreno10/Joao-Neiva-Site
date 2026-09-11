import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { nav, site, whatsappUrl } from '../../data/site'
import { editorialEase } from '../../lib/motion'
import { CtaLink } from '../ui/CtaLink'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-plum lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: editorialEase }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex h-20 shrink-0 items-center justify-between px-gutter">
            <span className="font-serif text-xl font-semibold tracking-[0.14em]">{site.name}</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="-mr-2 p-2 text-bone/80 transition-colors hover:text-gold"
            >
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>

          <nav aria-label="Navegação principal" className="flex flex-1 flex-col justify-center px-gutter">
            <ul className="flex flex-col gap-7">
              {nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onClose}
                    className="font-serif text-[2rem] leading-none text-bone transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-gutter pb-12">
            <CtaLink href={whatsappUrl} external className="w-full" >
              Agendar uma conversa
            </CtaLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
