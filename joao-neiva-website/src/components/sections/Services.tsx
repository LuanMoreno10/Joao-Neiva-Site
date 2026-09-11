import { services } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Services() {
  return (
    <Section id="servicos" labelledBy="servicos-title">
      <Reveal className="flex flex-col gap-2">
        <Eyebrow>{services.eyebrow}</Eyebrow>
        <h2 id="servicos-title" className="font-serif text-title">
          {services.title}
        </h2>
      </Reveal>

      <ul className="mt-8 border-b border-gold/30">
        {services.items.map((item, index) => (
          <li key={item.title} className="border-t border-gold/30">
            <Reveal
              delay={index * 0.06}
              className="flex flex-col gap-1.5 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
            >
              <div className="flex items-baseline gap-4 lg:gap-6">
                <span className="w-5 shrink-0 text-[0.6875rem] font-semibold text-gold">
                  {item.numeral}
                </span>
                <h3 className="font-serif text-xl">{item.title}</h3>
              </div>
              <p className="pl-9 text-sm font-light leading-[1.55] text-linen lg:max-w-[520px] lg:flex-1 lg:pl-0">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal>
        <p className="mt-8 text-eyebrow font-medium uppercase text-gold">{services.note}</p>
      </Reveal>
    </Section>
  )
}
