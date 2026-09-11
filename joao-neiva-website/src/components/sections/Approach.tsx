import { approach } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Approach() {
  return (
    <Section id="abordagem" labelledBy="abordagem-title" className="bg-plum-soft">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>{approach.eyebrow}</Eyebrow>
        <div className="flex flex-col gap-2">
          <h2 id="abordagem-title" className="font-serif text-title">
            {approach.title}
          </h2>
          <p className="max-w-[52ch] text-[0.9375rem] font-light leading-relaxed text-linen sm:text-base">
            {approach.subtitle}
          </p>
        </div>
      </Reveal>

      <ol className="mt-10 grid gap-px bg-gold/20 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {approach.steps.map((step, index) => (
          <li key={step.step} className="bg-plum-soft p-6">
            <Reveal delay={index * 0.08} className="flex flex-col gap-3">
              <span className="text-[0.6875rem] font-semibold text-gold">{step.step}</span>
              <h3 className="font-serif text-xl">{step.title}</h3>
              <p className="text-sm font-light leading-[1.55] text-linen">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-12 flex flex-col items-center gap-4 text-center lg:mt-16">
        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
          {approach.quote.label}
        </p>
        <blockquote className="max-w-[880px] font-serif text-[clamp(1.5rem,1rem+1.8vw,2rem)] leading-[1.4] text-balance">
          «{approach.quote.text}»
        </blockquote>
      </Reveal>
    </Section>
  )
}
