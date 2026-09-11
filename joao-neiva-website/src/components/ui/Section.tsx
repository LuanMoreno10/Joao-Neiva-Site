import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export function Section({ id, children, className, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('px-gutter py-section', className)}>
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  )
}
