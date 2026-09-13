import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Footer } from './Footer'
import { Header } from './Header'

type PageLayoutProps = {
  children: ReactNode
  // Subpágina: sem hero por baixo da barra, e o conteúdo ocupa pelo menos o ecrã
  // para o rodapé ficar sempre encostado ao fundo.
  subpage?: boolean
}

export function PageLayout({ children, subpage = false }: PageLayoutProps) {
  return (
    <div className={cn(subpage && 'flex min-h-svh flex-col')}>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-plum focus:px-4 focus:py-2"
      >
        Saltar para o conteúdo
      </a>
      <Header solid={subpage} />
      <main id="conteudo" className={cn(subpage && 'flex flex-1 flex-col pt-16 lg:pt-20')}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
