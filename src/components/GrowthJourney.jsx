import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, ChevronRight } from 'lucide-react'

const stages = [
  {
    id: 1,
    stage: 'Stage 1',
    title: 'The Beginning',
    revenue: '₹10K–₹30K/mo',
    revenueNum: 10,
    desc: 'A small hardware shop with limited stock. You join Shyama Business Growth with a dream and we provide the first set of 30–40 products to get you started.',
    image: '/growth/stage-1-small-shop.jpeg',
    color: 'from-gray-100 to-gray-200',
    accent: '#6B7280',
    products: '5–10 products',
    emoji: '🌱',
  },
  {
    id: 2,
    stage: 'Stage 2',
    title: 'Growing Confidence',
    revenue: '₹50K–₹80K/mo',
    revenueNum: 50,
    desc: 'Your shelves are filling up. Batteries, fans, tyres — customers know your shop. Shyama provides training, restocks, and business guidance to keep you growing.',
    image: '/growth/stage-2-growing-shop.jpeg',
    color: 'from-blue-50 to-blue-100',
    accent: '#0097A7',
    products: '15–20 products',
    emoji: '📈',
  },
  {
    id: 3,
    stage: 'Stage 3',
    title: 'Established Store',
    revenue: '₹1.5L–₹2.5L/mo',
    revenueNum: 150,
    desc: 'A full showroom with coolers, geysers, tyres, electronics — all on display. You are now a trusted name in your area and customers come back again and again.',
    image: '/growth/stage-3-established-store.jpeg',
    color: 'from-amber-50 to-amber-100',
    accent: '#C8860A',
    products: '30–40 products',
    emoji: '🏪',
  },
  {
    id: 4,
    stage: 'Stage 4',
    title: 'Premium Business',
    revenue: '₹5L+/mo',
    revenueNum: 500,
    desc: 'A premium multi-brand showroom — almost mall-scale. Staff, glass displays, tyre walls, appliance sections. You are a success story and we celebrate your growth.',
    image: '/growth/stage-4-premium-store.jpeg',
    color: 'from-yellow-50 to-orange-100',
    accent: '#E8720C',
    products: '40+ products',
    emoji: '🏆',
  },
]

export default function GrowthJourney() {
  const [active, setActive] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const current = stages[active]

  return (
    <section id="growth" className="py-24 bg-gradient-to-b from-blue-50/30 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Retailer Growth Story</p>
          <h2 className="section-heading mb-4">
            From Small Shop to{' '}
            <span className="text-gradient-gold">₹5L+ Monthly Revenue</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real journeys of our partners. See how Shyama Business Growth
            transforms small shops into thriving businesses.
          </p>
        </div>

        {/* Progress bar */}
        <div className={`flex items-center justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {stages.map((s, i) => (
            <div key={s.id} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-2 group transition-all duration-300`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 ${
                    i === active
                      ? 'bg-gold-500 border-gold-500 text-white scale-110 shadow-lg'
                      : i < active
                      ? 'bg-navy-900 border-navy-900 text-white'
                      : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  {i < active ? '✓' : i + 1}
                </div>
                <span className={`text-xs font-semibold hidden sm:block transition-colors ${i === active ? 'text-gold-500' : 'text-gray-400'}`}>
                  {s.stage}
                </span>
              </button>
              {i < stages.length - 1 && (
                <div className={`w-16 sm:w-24 h-1 mx-1 rounded-full transition-all duration-500 ${i < active ? 'bg-navy-900' : 'bg-gray-200'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Stage content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          key={active}
        >
          {/* Image */}
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${current.color} rounded-3xl transform rotate-2`} />
            <img
              src={current.image}
              alt={current.title}
              className="relative w-full h-[420px] object-cover rounded-3xl shadow-2xl"
            />
            {/* Revenue badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center gap-3">
              <TrendingUp size={20} style={{ color: current.accent }} />
              <div>
                <div className="text-xs text-gray-400 font-medium">Monthly Revenue</div>
                <div className="font-heading font-bold text-xl text-navy-900">{current.revenue}</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="pt-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-3xl">{current.emoji}</span>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{current.stage}</span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              {current.title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {current.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-xs text-gray-400 mb-1">Products Stocked</div>
                <div className="font-bold text-navy-900">{current.products}</div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="text-xs text-gray-400 mb-1">Monthly Revenue</div>
                <div className="font-bold" style={{ color: current.accent }}>{current.revenue}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              {active > 0 && (
                <button
                  onClick={() => setActive(active - 1)}
                  className="btn-outline py-3 px-6 text-sm"
                >
                  Previous Stage
                </button>
              )}
              {active < stages.length - 1 ? (
                <button
                  onClick={() => setActive(active + 1)}
                  className="btn-primary py-3 px-6 text-sm"
                >
                  Next Stage
                  <ChevronRight size={16} />
                </button>
              ) : (
                <a
                  href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20start%20my%20journey%20with%20Shyama%20Business%20Growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-6 text-sm"
                >
                  Start Your Journey
                  <ChevronRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
