import { contactUrl, testimonials } from '../../data/site'
import { CtaLink } from '../ui/CtaLink'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Testimonials() {
  return (
    <Section
      id="testemunhos"
      labelledBy="testemunhos-title"
      className="flex flex-1 flex-col justify-center"
    >
      <Reveal className="flex flex-col gap-2">
        <Eyebrow>{testimonials.eyebrow}</Eyebrow>
        <h1 id="testemunhos-title" className="font-serif text-title">
          {testimonials.title}
        </h1>
      </Reveal>

      <ul className="mt-8 grid gap-px bg-plum/15 sm:grid-cols-2">
        {testimonials.items.map((testimonial, index) => (
          <li key={testimonial.author} className="bg-paper p-6">
            <Reveal delay={index * 0.05}>
              <figure className="flex h-full flex-col gap-3">
                <blockquote className="font-serif text-lg leading-[1.45] text-pretty">
                  «{testimonial.quote}»
                </blockquote>
                <figcaption className="mt-auto text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-plum">
                  {testimonial.author}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-xl">{testimonials.invite}</p>
        <CtaLink href={contactUrl} external className="w-full sm:w-auto">
          {testimonials.cta}
        </CtaLink>
      </Reveal>
    </Section>
  )
}
