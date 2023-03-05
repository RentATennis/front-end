import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ResetCSS } from './styles/reset'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS />
    <App />
  </React.StrictMode>,
)
