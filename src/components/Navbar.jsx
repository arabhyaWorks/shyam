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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="https://shyamabusinessgrowth.com/wp-content/uploads/2026/03/cropped-SBG-logo.png"
            alt="Shyama Business Growth"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-navy-900 font-medium text-sm hover:text-gold-500 transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+916201739296"
            className="flex items-center gap-2 text-navy-900 font-semibold text-sm hover:text-gold-500 transition-colors"
          >
            <Phone size={16} className="text-gold-500" />
            +91-6201739296
          </a>
          <a
            href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5 px-6"
          >
            Join Us
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-navy-900 font-medium border-b border-gray-50 hover:text-gold-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/916201739296"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 justify-center w-full"
          >
            Join Us Today
          </a>
        </div>
      )}
    </header>
  )
}
