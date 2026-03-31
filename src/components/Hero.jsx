import { useEffect, useRef } from 'react'
import { ArrowRight, Star, Users, Package, Award } from 'lucide-react'

export default function Hero() {
  const tyreRef = useRef(null)

  useEffect(() => {
    let angle = 0
    let animId
    const rotate = () => {
      angle += 0.3
      if (tyreRef.current) {
        tyreRef.current.style.transform = `rotate(${angle}deg)`
      }
      animId = requestAnimationFrame(rotate)
    }
    animId = requestAnimationFrame(rotate)
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-amber-50/40 pt-20"
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left — Text */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-6">
            <Star size={14} className="text-gold-500 fill-gold-500" />
            <span className="text-gold-500 font-semibold text-xs uppercase tracking-wider">
              15 Years of Trusted Growth
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
            Your{' '}
            <span className="text-gradient-gold">Growth Partner</span>
            <br />
            in Every Step
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            Start your own retail business with 40+ products, full training,
            24/7 support and a proven franchise model. From a small shop to
            ₹5L+ monthly revenue — we grow together.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Become a Partner
              <ArrowRight size={18} />
            </a>
            <a href="#products" className="btn-outline">
              View Products
            </a>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Users, value: '150+', label: 'Partners' },
              { icon: Package, value: '40+', label: 'Products' },
              { icon: Award, value: '15 Yrs', label: 'Experience' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-gold-500" />
                  </div>
                </div>
                <div className="font-heading font-bold text-xl text-navy-900">{value}</div>
                <div className="text-gray-500 text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Rotating Tyre + floating products */}
        <div className="order-1 lg:order-2 relative flex items-center justify-center h-[480px]">
          {/* Circular glow */}
          <div className="absolute w-80 h-80 bg-gradient-to-br from-gold-500/20 to-brand-teal/20 rounded-full blur-2xl" />

          {/* Rotating tyre */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            <img
              ref={tyreRef}
              src="/images/tyre.png"
              alt="Tyre"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating product cards */}
          <div className="absolute top-8 right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float">
            <img src="/images/battery-vehicle.png" alt="Battery" className="w-12 h-12 object-contain" />
            <div>
              <div className="text-xs font-bold text-navy-900">Vehicle Battery</div>
              <div className="text-xs text-gray-400">Best Quality</div>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
            <img src="/images/cooler.png" alt="Cooler" className="w-12 h-12 object-contain" />
            <div>
              <div className="text-xs font-bold text-navy-900">Desert Cooler</div>
              <div className="text-xs text-gray-400">Top Selling</div>
            </div>
          </div>

          <div className="absolute top-1/2 -right-2 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float" style={{ animationDelay: '4s' }}>
            <img src="/images/helmet.png" alt="Helmet" className="w-12 h-12 object-contain" />
            <div>
              <div className="text-xs font-bold text-navy-900">Helmet</div>
              <div className="text-xs text-gray-400">Safety First</div>
            </div>
          </div>

          {/* Brand badge */}
          <div className="absolute bottom-4 right-8 bg-navy-900 text-white rounded-xl px-4 py-2 text-xs font-semibold shadow-lg">
            Jamshedpur, Jharkhand
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 text-xs">Scroll to explore</span>
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gold-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
