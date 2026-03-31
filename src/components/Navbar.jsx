import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Growth Story', href: '#growth' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5 py-3' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <a href="#home">
          <img
            src="https://shyamabusinessgrowth.com/wp-content/uploads/2026/03/cropped-SBG-logo.png"
            alt="Shyama Business Growth"
            className="h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-150">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+916201739296"
            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            <Phone size={14} className="text-blue-600" />
            +91-6201739296
          </a>
          <a href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
            target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            Join Us
          </a>
        </div>

        <button onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
          {open ? <X size={22} className="text-slate-700" /> : <Menu size={22} className="text-slate-700" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 shadow-xl">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-slate-700 border-b border-slate-50 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/916201739296" target="_blank" rel="noopener noreferrer"
            className="btn-primary mt-5 w-full justify-center">
            Join Us Today
          </a>
        </div>
      )}
    </header>
  )
}
