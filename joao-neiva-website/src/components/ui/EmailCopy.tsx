import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { site } from '../../data/site'
import { cn } from '../../lib/cn'

type EmailCopyProps = {
  className?: string
}

export function EmailCopy({ className }: EmailCopyProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sem permissão para a área de transferência: o endereço continua visível e clicável.
    }
  }

  return (
    <span className={cn('inline-flex items-center gap-2 text-sm', className)}>
      <a
        href={`mailto:${site.email}`}
        className="underline-offset-4 transition-colors duration-300 hover:text-gold hover:underline"
      >
        {site.email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Endereço copiado' : 'Copiar endereço de email'}
        className="p-1 opacity-70 transition-colors duration-300 hover:text-gold hover:opacity-100"
      >
        {copied ? <Check size={14} strokeWidth={1.5} /> : <Copy size={14} strokeWidth={1.5} />}
      </button>
    </span>
  )
}
