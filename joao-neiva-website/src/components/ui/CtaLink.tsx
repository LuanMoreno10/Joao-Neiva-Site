import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CtaLinkProps = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
}

export function CtaLink({ href, children, className, external = false }: CtaLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center border border-gold px-7 py-3',
        'text-[0.75rem] font-medium uppercase tracking-[0.12em] text-bone',
        'transition-colors duration-300 ease-editorial hover:bg-gold hover:text-plum-deep',
        className,
      )}
    >
      {children}
    </a>
  )
}
