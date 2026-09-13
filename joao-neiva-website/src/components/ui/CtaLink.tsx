import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CtaLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  external?: boolean
  onLight?: boolean
}

export function CtaLink({
  href,
  children,
  className,
  onClick,
  external = false,
  onLight = false,
}: CtaLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center border px-7 py-3',
        'text-[0.75rem] font-medium uppercase tracking-[0.12em]',
        'transition-colors duration-300 ease-editorial',
        onLight
          ? 'border-plum text-plum hover:bg-plum hover:text-bone'
          : 'border-gold text-bone hover:bg-gold hover:text-plum-deep',
        className,
      )}
    >
      {children}
    </a>
  )
}
