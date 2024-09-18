import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Api from './components/Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api />
  </StrictMode>,
)
