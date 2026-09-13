import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { nav, site } from '../../data/site'
import { cn } from '../../lib/cn'
import { MobileMenu } from './MobileMenu'

type HeaderProps = {
  solid?: boolean
}

export function Header({ solid = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filled = solid || scrolled

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-editorial',
        filled ? 'border-b border-gold/20 bg-plum/95' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-gutter lg:h-20">
        <a
          href="/"
          className="font-serif text-lg font-semibold tracking-[0.16em] text-bone lg:text-xl"
        >
          {site.name.toUpperCase()}
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs uppercase tracking-[0.14em] text-bone/85 transition-colors duration-300 hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          className="-mr-2 p-2 text-bone transition-colors hover:text-gold lg:hidden"
        >
          <Menu size={22} strokeWidth={1.25} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
