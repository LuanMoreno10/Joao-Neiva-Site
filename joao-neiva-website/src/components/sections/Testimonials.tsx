import { testimonials } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Testimonials() {
  return (
    <Section id="testemunhos" labelledBy="testemunhos-title" className="bg-linen text-plum">
      <Reveal className="flex flex-col gap-2">
        <p className="text-eyebrow font-medium uppercase text-gold">{testimonials.eyebrow}</p>
        <h2 id="testemunhos-title" className="font-serif text-title">
          {testimonials.title}
        </h2>
      </Reveal>

      <ul className="mt-8 grid gap-px bg-plum/15 sm:grid-cols-2">
        {testimonials.items.map((testimonial, index) => (
          <li key={testimonial.author} className="bg-linen p-6">
            <Reveal delay={index * 0.05}>
              <figure className="flex h-full flex-col gap-3">
                <blockquote className="font-serif text-lg leading-[1.45] text-pretty">
                  «{testimonial.quote}»
                </blockquote>
                <figcaption className="mt-auto text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  {testimonial.author}
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
