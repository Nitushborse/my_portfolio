
import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <header className={`fixed w-full z-50 transition ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : ''}`}>
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-indigo-600">Bhavesh</a>


        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#certificates" className="hover:text-indigo-600">Certificates</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>


        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <Menu />
        </button>
      </div>


      {/* mobile */}
      {open && (
        <div className="md:hidden bg-white/95 border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
