import { about } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

// Única secção em bordô, a pedido do cliente, para destacar o percurso do João.
export function About() {
  return (
    <Section id="sobre" labelledBy="sobre-title" className="bg-plum text-paper">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-14">
        <Reveal>
          <img
            src={about.portrait.src}
            srcSet={about.portrait.srcSet}
            sizes="(min-width: 1024px) 460px, calc(100vw - 2.5rem)"
            alt={about.portrait.alt}
            width={560}
            height={680}
            loading="lazy"
            decoding="async"
            className="aspect-[14/17] w-full object-cover object-[center_15%]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <p className="text-eyebrow font-medium uppercase text-gold">{about.eyebrow}</p>
            <h2 id="sobre-title" className="font-serif text-title text-balance">
              {about.title}
            </h2>
          </div>

          <div className="flex max-w-[58ch] flex-col gap-4 text-[0.9375rem] leading-[1.65]">
            {about.facts.map((fact) => (
              <p key={fact} className="font-light text-mist">
                {fact}
              </p>
            ))}
            <p>{about.closing}</p>
          </div>

          <div aria-hidden className="h-px w-24 bg-gold" />
        </Reveal>
      </div>
    </Section>
  )
}
