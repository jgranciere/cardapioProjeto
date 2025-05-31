import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarrinhoProvider } from './context/CarrinhoContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </StrictMode>,
)
