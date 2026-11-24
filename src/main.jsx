import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Pages are pre-rendered at build time. Hydrate when the HTML was rendered for
// this exact URL; otherwise (e.g. the shared 404 page, or `npm run dev`) render fresh.
const prerenderedFor = container.dataset.prerendered
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

if (prerenderedFor && prerenderedFor === currentPath) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
