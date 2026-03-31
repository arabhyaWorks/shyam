import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const categories = ['All', 'Tyres', 'Power', 'Cooling', 'Kitchen', 'Lighting & Safety']

const products = [
  {
    id: 1,
    name: 'Car Tyre',
    category: 'Tyres',
    image: '/images/tyre.png',
    desc: 'All-season car tyres for sedans, hatchbacks and SUVs. Superior grip and long tread life.',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Bike Tyre',
    category: 'Tyres',
    image: '/images/tyre-bike.png',
    desc: 'High-performance motorcycle and scooter tyres for all road conditions.',
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'Vehicle Battery',
    category: 'Power',
    image: '/images/battery-vehicle.png',
    desc: '12V automotive batteries for cars and bikes. Maintenance-free, long-lasting.',
    tag: 'Top Pick',
  },
  {
    id: 4,
    name: 'Inverter Battery',
    category: 'Power',
    image: '/images/battery-inverter.png',
    desc: 'Tubular inverter batteries for home UPS. 180Ah, maintenance-free, long life cycle.',
    tag: 'High Demand',
  },
  {
    id: 5,
    name: 'Home Inverter',
    category: 'Power',
    image: '/images/inverter.png',
    desc: 'Pure sine wave home inverter UPS with LCD display. Protects all appliances.',
    tag: 'Essential',
  },
  {
    id: 6,
    name: 'Desert Cooler',
    category: 'Cooling',
    image: '/images/cooler.png',
    desc: 'Large capacity desert air cooler with honeycomb pads. Cools large rooms efficiently.',
    tag: 'Summer Must',
  },
  {
    id: 7,
    name: 'Air Conditioner',
    category: 'Cooling',
    image: '/images/ac.png',
    desc: 'Split AC units for home and office. Energy-efficient with fast cooling.',
    tag: 'Premium',
  },
  {
    id: 8,
    name: 'Water Geyser',
    category: 'Cooling',
    image: '/images/geyser.png',
    desc: 'Electric water heaters with temperature control. Instant hot water for home.',
    tag: 'Year Round',
  },
  {
    id: 9,
    name: 'Ceiling Fan',
    category: 'Cooling',
    image: '/images/fan-ceiling.png',
    desc: 'Energy-efficient ceiling fans with high air delivery. Modern designs.',
    tag: 'Everyday',
  },
  {
    id: 10,
    name: 'Mixer Grinder',
    category: 'Kitchen',
    image: '/images/mixer.png',
    desc: 'Powerful mixer grinders with stainless steel jars. Essential kitchen appliance.',
    tag: 'Home Basic',
  },
  {
    id: 11,
    name: 'Gas Stove',
    category: 'Kitchen',
    image: '/images/gas-stove.png',
    desc: '4-burner stainless steel gas stoves. High flame efficiency, easy to clean.',
    tag: 'Home Basic',
  },
  {
    id: 12,
    name: 'Induction Cooktop',
    category: 'Kitchen',
    image: '/images/induction.png',
    desc: 'Touch-control induction cooktops with multiple heat settings. Safe and fast.',
    tag: 'Modern',
  },
  {
    id: 13,
    name: 'LED Bulb',
    category: 'Lighting & Safety',
    image: '/images/led-bulb.png',
    desc: 'Energy-saving LED bulbs with warm and cool white options. Long lifespan.',
    tag: 'Eco Choice',
  },
  {
    id: 14,
    name: 'Motorcycle Helmet',
    category: 'Lighting & Safety',
    image: '/images/helmet.png',
    desc: 'Full-face motorcycle helmets with clear visor. Safety certified.',
    tag: 'Safety',
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-blue-50/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Our Product Range</p>
          <h2 className="section-heading mb-4">
            40+ Products to{' '}
            <span className="text-gradient-gold">Stock Your Store</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From tyres to kitchen appliances — everything your customers need,
            all supplied by Shyama Business Growth.
          </p>
        </div>

        {/* Filter tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-white shadow-md'
                  : 'bg-white text-navy-900 border border-gray-200 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`card p-4 cursor-pointer group transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Tag */}
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold bg-gold-500/10 text-gold-500 px-2 py-0.5 rounded-full">
                  {product.tag}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-36 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`max-h-full max-w-full object-contain transition-transform duration-500 ${
                    hoveredId === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Info */}
              <h3 className="font-bold text-navy-900 text-sm mb-1">{product.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                {product.desc}
              </p>

              {/* Hover CTA */}
              <div className={`mt-3 transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <a
                  href="https://wa.me/916201739296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold-500 hover:underline"
                >
                  Enquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
