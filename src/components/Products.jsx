import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

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

const tagColors = {
  'Best Seller': 'bg-orange-50 text-orange-600',
  'Popular': 'bg-blue-50 text-blue-600',
  'Top Pick': 'bg-purple-50 text-purple-600',
  'High Demand': 'bg-red-50 text-red-500',
  'Essential': 'bg-green-50 text-green-600',
  'Summer Must': 'bg-cyan-50 text-cyan-600',
  'Premium': 'bg-amber-50 text-amber-600',
  'Year Round': 'bg-teal-50 text-teal-600',
  'Everyday': 'bg-indigo-50 text-indigo-600',
  'Home Basic': 'bg-gray-100 text-gray-600',
  'Modern': 'bg-violet-50 text-violet-600',
  'Eco Choice': 'bg-lime-50 text-lime-600',
  'Safety': 'bg-rose-50 text-rose-600',
}

export default function Products() {
  const [active, setActive] = useState('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="products" className="py-28 bg-mesh" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label justify-center">Our Product Range</div>
          <h2 className="section-heading mb-4">
            40+ Products to<br />
            <span className="text-gradient-gold">Stock Your Store</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            From tyres to kitchen appliances — everything your customers need, all supplied by us.
          </p>
        </div>

        {/* Filter pills */}
        <div className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-700 delay-100 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-gray-500 hover:text-navy-900 border border-gray-200 hover:border-navy-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`card p-5 group cursor-default transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Tag */}
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[p.tag] || 'bg-gray-100 text-gray-500'}`}>
                {p.tag}
              </span>

              {/* Image */}
              <div className="h-32 flex items-center justify-center my-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-heading font-bold text-navy-900 text-sm mb-1">{p.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{p.desc}</p>

              <a
                href="https://wa.me/916201739296"
                target="_blank" rel="noopener noreferrer"
                className="mt-4 flex items-center gap-1 text-xs font-bold text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Enquire Now <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
