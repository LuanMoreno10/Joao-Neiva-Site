import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type EyebrowProps = {
  children: ReactNode
  className?: string
  onLight?: boolean
}

export function Eyebrow({ children, className, onLight = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        'text-eyebrow font-medium uppercase',
        onLight ? 'text-gold-deep' : 'text-gold',
        className,
      )}
    >
      {children}
    </p>
  )
}
