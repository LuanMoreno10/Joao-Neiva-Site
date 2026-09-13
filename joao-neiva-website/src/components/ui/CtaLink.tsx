import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CtaLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  external?: boolean
}

export function CtaLink({ href, children, className, onClick, external = false }: CtaLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center border border-plum px-7 py-3',
        'text-[0.75rem] font-medium uppercase tracking-[0.12em] text-plum',
        'transition-colors duration-300 ease-editorial hover:bg-plum hover:text-paper',
        className,
      )}
    >
      {children}
    </a>
  )
}
