import { useInView } from 'react-intersection-observer'
import { Package, GraduationCap, Headphones, BarChart3, Truck, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Starter Inventory',
    desc: 'Get 30–40 essential products to stock your store from day one. No need to source from multiple vendors.',
    color: '#1B2B5E',
    bg: '#EEF1FA',
  },
  {
    icon: GraduationCap,
    title: 'Sales Training',
    desc: 'Hands-on training in customer interaction, product knowledge and closing sales. Build confidence fast.',
    color: '#C8860A',
    bg: '#FDF4E3',
  },
  {
    icon: Headphones,
    title: '24/7 Support Helpline',
    desc: 'Round-the-clock partner helpline for any query — stock, pricing, customers or operations.',
    color: '#0097A7',
    bg: '#E5F6F8',
  },
  {
    icon: Truck,
    title: 'Stock Supply & Restocking',
    desc: 'Ongoing stock replenishment directly to your store. Never run out of bestselling products.',
    color: '#E8720C',
    bg: '#FEF0E6',
  },
  {
    icon: BarChart3,
    title: 'Business Growth Planning',
    desc: 'Structured expansion strategies and profitability planning to help you scale from ₹10K to ₹5L+.',
    color: '#4CAF50',
    bg: '#EDF7EE',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'All products are quality-checked before supply. Partner with confidence knowing your stock is reliable.',
    color: '#7C3AED',
    bg: '#F3EDFF',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className={`max-w-2xl mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label">What You Get</div>
          <h2 className="section-heading mb-4">
            A Complete Business<br />
            <span className="text-gradient-gold">Support System</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            You don't just get products — you get a full ecosystem designed to make
            your retail business succeed from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <div
              key={title}
              className={`group p-7 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 w-14 h-14 group-hover:scale-110 transition-transform duration-300"
                style={{ background: bg }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="font-heading font-bold text-navy-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

              {/* Bottom accent bar on hover */}
              <div className="mt-5 h-0.5 w-0 group-hover:w-12 rounded-full transition-all duration-500" style={{ background: color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
