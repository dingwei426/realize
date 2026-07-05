import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cursor } from 'animal-island-ui'
// @ts-ignore
import 'animal-island-ui/style'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cursor>
      <App />
    </Cursor>
  </StrictMode>,
)

