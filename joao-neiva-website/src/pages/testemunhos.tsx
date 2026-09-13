import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { PageLayout } from '../components/layout/PageLayout'
import { Testimonials } from '../components/sections/Testimonials'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout subpage>
      <Testimonials />
    </PageLayout>
  </StrictMode>,
)
