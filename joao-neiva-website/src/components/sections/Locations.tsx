import { locations } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Locations() {
  return (
    <Section id="localizacao" labelledBy="localizacao-title">
      <Reveal>
        <Eyebrow>{locations.eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={0.08} className="mt-6 flex flex-col items-center gap-4 text-center">
        <h2 id="localizacao-title" className="font-serif text-title">
          {locations.title}
        </h2>

        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-serif text-xl">
          {locations.places.map((place, index) => (
            <li key={place} className="flex items-center gap-4">
              {place}
              {index < locations.places.length - 1 && (
                <span aria-hidden className="text-gold">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="max-w-[560px] text-sm font-light leading-relaxed text-linen">
          {locations.note}
        </p>
      </Reveal>
    </Section>
  )
}
