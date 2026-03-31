import { Phone, Mail, MapPin, Facebook, Youtube, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Growth Story', href: '#growth' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const productsList = [
  'Tyres — All Vehicles',
  'Vehicle Batteries',
  'Inverter Batteries',
  'Home Inverters',
  'Air Coolers',
  'Air Conditioners',
  'Ceiling Fans',
  'Water Geysers',
  'Mixer Grinders',
  'Gas Stoves',
  'Induction Cooktops',
  'LED Lights & Helmets',
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 overflow-hidden">

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-teal via-gold-500 to-brand-orange" />

      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
              Ready to Start Your Business Journey?
            </h3>
            <p className="text-white/50 text-sm">Join 150+ successful partners across Jharkhand</p>
          </div>
          <a
            href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/30 hover:-translate-y-0.5"
          >
            Become a Partner
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand column — wider */}
          <div className="lg:col-span-4">
            {/* Logo on dark background — use original colored logo */}
            <div className="mb-5">
              <img
                src="https://shyamabusinessgrowth.com/wp-content/uploads/2026/03/cropped-SBG-logo.png"
                alt="Shyama Business Growth"
                className="h-16 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(200,134,10,0.3))' }}
              />
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering retail entrepreneurs across Jharkhand and India with
              quality products, hands-on training, and 24/7 partner support.
            </p>

            {/* Contact pills */}
            <div className="space-y-3 mb-7">
              <a href="tel:+916201739296"
                className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 bg-gold-500/15 rounded-lg flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                  <Phone size={14} className="text-gold-500" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-gold-500 transition-colors">+91-6201739296</span>
              </a>
              <a href="mailto:info@shyamabusinessgrowth.com"
                className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 bg-gold-500/15 rounded-lg flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                  <Mail size={14} className="text-gold-500" />
                </div>
                <span className="text-white/70 text-sm group-hover:text-gold-500 transition-colors">info@shyamabusinessgrowth.com</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold-500/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-gold-500" />
                </div>
                <span className="text-white/70 text-sm">Agrico Area, Jamshedpur,<br />Jharkhand 831004</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064687165264"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 border border-white/10 hover:bg-blue-600 hover:border-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook size={15} className="text-white/60 group-hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com/@anantclasses2018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 border border-white/10 hover:bg-red-600 hover:border-red-600 rounded-xl flex items-center justify-center transition-all duration-300 group"
              >
                <Youtube size={15} className="text-white/60 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/55 hover:text-gold-500 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-gold-500/0 group-hover:bg-gold-500 rounded-full transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products in 2 columns */}
          <div className="lg:col-span-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 pb-3 border-b border-white/10">
              Our Products
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {productsList.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold-500/60 rounded-full shrink-0" />
                  <span className="text-white/55 text-sm">{p}</span>
                </div>
              ))}
            </div>

            {/* Trust badges row */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              {[
                { num: '150+', label: 'Partners' },
                { num: '40+', label: 'Products' },
                { num: '15 Yrs', label: 'Experience' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center bg-white/5 rounded-2xl py-3 px-2">
                  <div className="font-heading font-bold text-gold-500 text-xl">{num}</div>
                  <div className="text-white/40 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2024 Shyama Business Growth. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic font-heading">
            "Your Growth Partner in Every Step"
          </p>
        </div>
      </div>
    </footer>
  )
}
