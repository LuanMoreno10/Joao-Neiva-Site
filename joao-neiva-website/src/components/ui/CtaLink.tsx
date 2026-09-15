import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CtaLinkProps = {
  // Sem href, o botão aparece desativado — usado enquanto não há contacto configurado.
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  external?: boolean
}

const base =
  'inline-flex items-center justify-center border px-7 py-3 text-[0.75rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ease-editorial'

export function CtaLink({ href, children, className, onClick, external = false }: CtaLinkProps) {
  if (!href) {
    return (
      <button
        type="button"
        disabled
        className={cn(base, 'cursor-not-allowed border-plum/30 text-plum/40', className)}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, 'border-plum text-plum hover:bg-plum hover:text-paper', className)}
    >
      {children}
    </a>
  )
}
