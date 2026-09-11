import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Approach } from './components/sections/Approach'
import { Hero } from './components/sections/Hero'
import { Locations } from './components/sections/Locations'
import { Online } from './components/sections/Online'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-plum focus:px-4 focus:py-2"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Approach />
        <Services />
        <Online />
        <Testimonials />
        <Locations />
      </main>
      <Footer />
    </>
  )
}
