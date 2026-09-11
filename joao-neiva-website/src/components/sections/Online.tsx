import { online, waLink } from '../../data/site'
import { CtaLink } from '../ui/CtaLink'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Online() {
  return (
    <Section id="sessoes-online" labelledBy="online-title" className="bg-plum-soft">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:gap-14">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>{online.eyebrow}</Eyebrow>
            <h2 id="online-title" className="font-serif text-title">
              {online.title}
            </h2>
          </div>

          <p className="font-serif text-[clamp(1.25rem,1rem+0.9vw,1.5rem)] font-light leading-[1.4] text-linen">
            «{online.quote}»
          </p>

          <dl className="flex flex-col gap-2 text-sm">
            {online.details.map((detail) => (
              <div key={detail.label} className="flex flex-wrap gap-3">
                <dt className="font-semibold text-gold">{detail.label}:</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>

          <CtaLink
            href={waLink('Olá João, gostaria de agendar uma sessão online.')}
            external
            className="w-full sm:w-auto sm:self-start"
          >
            {online.cta}
          </CtaLink>
        </Reveal>

        <ul className="flex flex-col gap-3">
          {online.features.map((feature, index) => (
            <li key={feature.title}>
              <Reveal
                delay={index * 0.08}
                className="flex flex-col gap-1.5 border border-gold/20 bg-plum-deep p-5"
              >
                <h3 className="font-serif text-lg">{feature.title}</h3>
                <p className="text-sm font-light leading-[1.5] text-linen">{feature.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
