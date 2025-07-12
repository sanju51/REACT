import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card name="sanjana" btn="hello"/>
    <Card name="Spoorthi" btn="heyy"/>
  </StrictMode>,
)
