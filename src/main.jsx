import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

{/* letra */}
<span className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold">A</span>
{/* quadrado branco */}
<span className="text-[70px] leading-[1.7] border-[3px] border-black h-[120px] w-[120px] uppercase bg-white text-black font-bold"></span>