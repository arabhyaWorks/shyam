import { useInView } from 'react-intersection-observer'
import { Package, GraduationCap, Headphones, BarChart3, Truck, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Starter Inventory',
    desc: 'Get 30–40 essential products to stock your store from day one. No need to source from multiple vendors.',
    color: 'bg-navy-900/10',
    iconColor: 'text-navy-900',
  },
  {
    icon: GraduationCap,
    title: 'Sales Training',
    desc: 'Hands-on training in customer interaction, product knowledge and closing sales. Build confidence fast.',
    color: 'bg-gold-500/10',
    iconColor: 'text-gold-500',
  },
  {
    icon: Headphones,
    title: '24/7 Support Helpline',
    desc: 'Round-the-clock partner helpline for any query — stock, pricing, customers or operations.',
    color: 'bg-brand-teal/10',
    iconColor: 'text-brand-teal',
  },
  {
    icon: Truck,
    title: 'Stock Supply & Restocking',
    desc: 'Ongoing stock replenishment directly to your store. Never run out of bestselling products.',
    color: 'bg-brand-orange/10',
    iconColor: 'text-brand-orange',
  },
  {
    icon: BarChart3,
    title: 'Business Growth Planning',
    desc: 'Structured expansion strategies and profitability planning to help you scale from ₹10K to ₹5L+.',
    color: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'All products are quality-checked before supply. Partner with confidence knowing your stock is reliable.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
]

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">What You Get</p>
          <h2 className="section-heading mb-4">
            Complete Business{' '}
            <span className="text-gradient-gold">Support System</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            You don't just get products — you get a full support ecosystem
            designed to make your retail business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
            <div
              key={title}
              className={`card p-7 group transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={26} className={iconColor} />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
