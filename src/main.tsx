import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Contact from './components/Contact.tsx'
import Navbar from './components/navBar/Navbar.tsx'
import About from './components/About.tsx'
import Portfolio from './components/Portfolio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
