import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { PageLayout } from '../components/layout/PageLayout'
import { Online } from '../components/sections/Online'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout subpage>
      <Online />
    </PageLayout>
  </StrictMode>,
)
