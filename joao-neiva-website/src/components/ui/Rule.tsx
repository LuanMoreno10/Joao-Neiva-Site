import { cn } from '../../lib/cn'

type RuleProps = {
  className?: string
}

export function Rule({ className }: RuleProps) {
  return <div aria-hidden className={cn('h-px w-full bg-gold/45', className)} />
}
