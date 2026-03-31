import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

export default function AllProductsShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Complete Range</p>
          <h2 className="section-heading mb-4">
            Everything Your Store Needs,{' '}
            <span className="text-gradient-gold">In One Partnership</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Tyres for every vehicle. Cooling for every home. Power backup for every need.
            Kitchen essentials. Lighting. Safety. One partner — unlimited products.
          </p>
        </div>

        {/* Full width showcase image */}
        <div
          className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src="/images/all-products-showcase.png"
            alt="All Products Showcase — Tyres, Coolers, Batteries, Appliances and more"
            className="w-full object-cover"
          />

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Category labels row */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Tyres', sub: 'All vehicle sizes', color: 'bg-navy-900' },
            { label: 'Cooling', sub: 'Coolers & AC', color: 'bg-brand-teal' },
            { label: 'Power', sub: 'Batteries & Inverters', color: 'bg-gold-500' },
            { label: 'Kitchen', sub: 'Stoves & Appliances', color: 'bg-brand-orange' },
            { label: 'Lighting & Safety', sub: 'LED & Helmets', color: 'bg-brand-green' },
          ].map(({ label, sub, color }) => (
            <div key={label} className="text-center group cursor-default">
              <div className={`${color} text-white text-xs font-bold px-4 py-2 rounded-full mb-2 inline-block`}>
                {label}
              </div>
              <div className="text-gray-500 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20product%20range."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Full Product Catalogue
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
