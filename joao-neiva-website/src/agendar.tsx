import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SchedulePage } from './pages/SchedulePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SchedulePage />
  </StrictMode>,
)
