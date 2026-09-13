import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn('text-eyebrow font-medium uppercase text-plum', className)}>{children}</p>
  )
}
