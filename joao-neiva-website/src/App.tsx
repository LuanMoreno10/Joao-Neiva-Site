import { PageLayout } from './components/layout/PageLayout'
import { About } from './components/sections/About'
import { Approach } from './components/sections/Approach'
import { ClosingCta } from './components/sections/ClosingCta'
import { Hero } from './components/sections/Hero'
import { Locations } from './components/sections/Locations'
import { Services } from './components/sections/Services'

export default function App() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Approach />
      <Services />
      <Locations />
      <ClosingCta />
    </PageLayout>
  )
}
