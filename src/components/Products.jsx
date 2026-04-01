import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Sparkles } from 'lucide-react'

const categories = ['All', 'Tyres', 'Power', 'Cooling', 'Kitchen', 'Lighting & Safety']

const products = [
  { id: 1, name: 'Car Tyre', category: 'Tyres', image: '/images/tyre.png', desc: 'All-season tyres for cars & SUVs with superior grip.', tag: 'Best Seller' },
  { id: 2, name: 'Bike Tyre', category: 'Tyres', image: '/images/tyre-bike.png', desc: 'High-performance motorcycle & scooter tyres.', tag: 'Popular' },
  { id: 3, name: 'Vehicle Battery', category: 'Power', image: '/images/battery-vehicle.png', desc: '12V automotive batteries, maintenance-free.', tag: 'Top Pick' },
  { id: 4, name: 'Inverter Battery', category: 'Power', image: '/images/battery-inverter.png', desc: 'Tubular inverter batteries 180Ah for home UPS.', tag: 'High Demand' },
  { id: 5, name: 'Home Inverter', category: 'Power', image: '/images/inverter.png', desc: 'Pure sine wave UPS with LCD display.', tag: 'Essential' },
  { id: 6, name: 'Desert Cooler', category: 'Cooling', image: '/images/cooler.png', desc: 'Large capacity desert cooler with honeycomb pads.', tag: 'Summer Must' },
  { id: 7, name: 'Air Conditioner', category: 'Cooling', image: '/images/ac.png', desc: 'Split AC units, energy-efficient fast cooling.', tag: 'Premium' },
  { id: 8, name: 'Water Geyser', category: 'Cooling', image: '/images/geyser.png', desc: 'Electric water heaters with temperature control.', tag: 'Year Round' },
  { id: 9, name: 'Ceiling Fan', category: 'Cooling', image: '/images/fan-ceiling.png', desc: 'Energy-efficient fans with high air delivery.', tag: 'Everyday' },
  { id: 10, name: 'Mixer Grinder', category: 'Kitchen', image: '/images/mixer.png', desc: 'Powerful mixer with stainless steel jars.', tag: 'Home Basic' },
  { id: 11, name: 'Gas Stove', category: 'Kitchen', image: '/images/gas-stove.png', desc: '4-burner SS stoves. High flame, easy to clean.', tag: 'Home Basic' },
  { id: 12, name: 'Induction Cooktop', category: 'Kitchen', image: '/images/induction.png', desc: 'Touch-control induction cooktops. Safe & fast.', tag: 'Modern' },
  { id: 13, name: 'LED Bulb', category: 'Lighting & Safety', image: '/images/led-bulb.png', desc: 'Energy-saving LED bulbs. Long lifespan.', tag: 'Eco Choice' },
  { id: 14, name: 'Motorcycle Helmet', category: 'Lighting & Safety', image: '/images/helmet.png', desc: 'Full-face helmets with clear visor. ISI certified.', tag: 'Safety' },
]

const tagStyles = {
  'Best Seller': 'bg-orange-50 text-orange-600 border-orange-100',
  'Popular': 'bg-blue-50 text-blue-600 border-blue-100',
  'Top Pick': 'bg-purple-50 text-purple-600 border-purple-100',
  'High Demand': 'bg-red-50 text-red-500 border-red-100',
  'Essential': 'bg-green-50 text-green-600 border-green-100',
  'Summer Must': 'bg-cyan-50 text-cyan-600 border-cyan-100',
  'Premium': 'bg-amber-50 text-amber-600 border-amber-100',
  'Year Round': 'bg-teal-50 text-teal-600 border-teal-100',
  'Everyday': 'bg-indigo-50 text-indigo-600 border-indigo-100',
  'Home Basic': 'bg-gray-100 text-gray-600 border-gray-200',
  'Modern': 'bg-violet-50 text-violet-600 border-violet-100',
  'Eco Choice': 'bg-lime-50 text-lime-600 border-lime-100',
  'Safety': 'bg-rose-50 text-rose-600 border-rose-100',
}

const categoryAccent = {
  All: '#1B2B5E',
  Tyres: '#1B2B5E',
  Power: '#C8860A',
  Cooling: '#0097A7',
  Kitchen: '#E8720C',
  'Lighting & Safety': '#4CAF50',
}

export default function Products() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section
      id="products"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#FAFBFF] py-24 md:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-16 h-80 w-80 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-28 h-96 w-96 rounded-full bg-[#1B2B5E]/[0.05] blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0097A7]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#E7D7B0] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8860A] shadow-sm">
            Our Product Range
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#1B2B5E] md:text-5xl lg:text-6xl">
            40+ Products to
            <br />
            <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
              Stock Your Store
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            From tyres and batteries to cooling, kitchen, and safety products —
            everything your retail customers need, supplied through one trusted partner.
          </p>
        </div>

        {/* Filter bar */}
        <div
          className={`mb-12 transition-all duration-700 delay-100 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2 rounded-[24px] border border-slate-200/70 bg-white/80 p-3 shadow-[0_16px_40px_rgba(16,24,40,0.05)] backdrop-blur-sm">
            {categories.map((cat) => {
              const isActive = active === cat
              const accent = categoryAccent[cat] || '#1B2B5E'

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 md:px-5 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                  style={isActive ? { backgroundColor: accent } : {}}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Featured strip */}
        <div
          className={`mb-10 transition-all duration-700 delay-150 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-[#EDE6D6] bg-gradient-to-r from-[#FFF8EA] via-white to-[#F8FAFF] px-6 py-5 shadow-[0_16px_40px_rgba(16,24,40,0.05)]">
            <div>
              <div className="mb-1 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8860A]">
                <Sparkles size={13} />
                Partner-ready inventory
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1B2B5E] md:text-xl">
                Curated product mix designed for high-demand local retail
              </h3>
            </div>

            <a
              href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20product%20range."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8860A] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C8860A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B37809]"
            >
              Get Product Details
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/90 p-5 shadow-[0_15px_40px_rgba(16,24,40,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_28px_70px_rgba(16,24,40,0.14)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              {/* Glow accent */}
              <div className="absolute right-[-18px] top-[-18px] h-24 w-24 rounded-full bg-[#D18A00]/0 blur-2xl transition-all duration-500 group-hover:bg-[#D18A00]/10" />

              {/* Top line */}
              <div className="absolute left-5 right-5 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D9B35F] to-transparent" />

              {/* Top row */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                    tagStyles[p.tag] || 'border-gray-200 bg-gray-100 text-gray-500'
                  }`}
                >
                  {p.tag}
                </span>

                <span className="rounded-full bg-[#1B2B5E]/6 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1B2B5E]">
                  {p.category}
                </span>
              </div>

              {/* Image box */}
              <div className="mb-5 flex h-44 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#FFFDF8] to-[#F8FAFF] p-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#1B2B5E]">
                {p.name}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 line-clamp-3">
                {p.desc}
              </p>

              {/* Footer CTA */}
              <div className="mt-5 flex items-center justify-between">
                <div className="h-[2px] w-10 rounded-full bg-[#D9B35F] transition-all duration-500 group-hover:w-16" />

                <a
                  href={`https://wa.me/916201739296?text=${encodeURIComponent(
                    `Hi! I want to know more about ${p.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#C8860A] opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Enquire
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="https://wa.me/916201739296?text=Hi!%20I%20want%20the%20full%20product%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#D9B35F]/30 bg-white px-6 py-3 text-sm font-semibold text-[#1B2B5E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9B35F] hover:bg-[#FFFDF8]"
          >
            Request Full Catalogue
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}