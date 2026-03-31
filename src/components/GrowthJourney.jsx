import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ArrowRight } from 'lucide-react'

const stages = [
  {
    id: 1,
    stage: 'Stage 01',
    title: 'The Beginning',
    revenue: '₹10K–30K/mo',
    desc: 'A small hardware shop with limited stock. You join Shyama Business Growth with a dream and we provide the first set of 30–40 products to get you started.',
    image: '/growth/stage-1-small-shop.jpeg',
    products: '5–10 products',
    accent: '#6B7280',
    accentBg: '#F3F4F6',
  },
  {
    id: 2,
    stage: 'Stage 02',
    title: 'Growing Confidence',
    revenue: '₹50K–80K/mo',
    desc: 'Your shelves are filling up. Batteries, fans, tyres — customers know your shop. Shyama provides training, restocks, and business guidance to keep you growing.',
    image: '/growth/stage-2-growing-shop.jpeg',
    products: '15–20 products',
    accent: '#0097A7',
    accentBg: '#E5F6F8',
  },
  {
    id: 3,
    stage: 'Stage 03',
    title: 'Established Store',
    revenue: '₹1.5L–2.5L/mo',
    desc: 'A full showroom with coolers, geysers, tyres, electronics — all on display. You are now a trusted name in your area with regular customers.',
    image: '/growth/stage-3-established-store.jpeg',
    products: '30–40 products',
    accent: '#C8860A',
    accentBg: '#FDF4E3',
  },
  {
    id: 4,
    stage: 'Stage 04',
    title: 'Premium Business',
    revenue: '₹5L+/mo',
    desc: 'A premium multi-brand showroom. Staff, glass displays, tyre walls, appliance sections. You are a success story and Shyama celebrates your growth.',
    image: '/growth/stage-4-premium-store.jpeg',
    products: '40+ products',
    accent: '#E8720C',
    accentBg: '#FEF0E6',
  },
]

export default function GrowthJourney() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const s = stages[active]

  return (
    <section id="growth" className="py-28 bg-mesh" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label justify-center">Retailer Growth Story</div>
          <h2 className="section-heading mb-4">
            From Small Shop to<br />
            <span className="text-gradient-gold">₹5L+ Monthly Revenue</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Real journeys of our partners — see how Shyama transforms small shops into thriving businesses.
          </p>
        </div>

        {/* Stage selector */}
        <div className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {stages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                i === active
                  ? 'border-transparent text-white shadow-lg'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
              style={i === active ? { background: s.accent } : {}}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                i === active ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
              }`}>
                {i + 1}
              </span>
              {s.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`grid lg:grid-cols-2 gap-14 items-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} key={active}>

          {/* Image */}
          <div className="relative">
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-[460px] object-cover rounded-3xl shadow-2xl"
            />
            {/* Revenue overlay */}
            <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: s.accentBg }}>
                <TrendingUp size={20} style={{ color: s.accent }} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">Monthly Revenue Potential</div>
                <div className="font-heading font-bold text-navy-900 text-xl">{s.revenue}</div>
              </div>
            </div>

            {/* Stage label */}
            <div
              className="absolute -top-4 -left-4 px-4 py-2 rounded-xl text-white text-xs font-bold shadow-lg"
              style={{ background: s.accent }}
            >
              {s.stage}
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-lg" style={{ background: s.accentBg, color: s.accent }}>
              {s.stage}
            </div>
            <h3 className="font-heading font-bold text-4xl text-navy-900 mb-4">{s.title}</h3>
            <p className="text-gray-500 text-base leading-relaxed mb-8">{s.desc}</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="text-xs text-gray-400 mb-1 font-medium">Products Stocked</div>
                <div className="font-heading font-bold text-navy-900 text-lg">{s.products}</div>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="text-xs text-gray-400 mb-1 font-medium">Monthly Revenue</div>
                <div className="font-heading font-bold text-lg" style={{ color: s.accent }}>{s.revenue}</div>
              </div>
            </div>

            <div className="flex gap-3">
              {active > 0 && (
                <button onClick={() => setActive(active - 1)} className="btn-outline">
                  Previous
                </button>
              )}
              {active < stages.length - 1 ? (
                <button onClick={() => setActive(active + 1)} className="btn-primary">
                  Next Stage <ArrowRight size={15} />
                </button>
              ) : (
                <a
                  href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20start%20my%20journey%20with%20Shyama%20Business%20Growth."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start Your Journey <ArrowRight size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
