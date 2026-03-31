import { useInView } from 'react-intersection-observer'
import { Phone, Package, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Call or WhatsApp Us',
    desc: 'Reach out on +91-6201739296. Tell us about your area and goals. We guide you through the franchise process.',
    color: '#1B2B5E',
    bg: '#EEF1FA',
  },
  {
    num: '02',
    icon: Package,
    title: 'Get Your Starter Stock',
    desc: 'We supply your first batch of 30–40 essential products with pricing, training materials and sales guidance.',
    color: '#C8860A',
    bg: '#FDF4E3',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Sell, Grow & Scale',
    desc: 'Start selling with our support. We restock, train and plan with you until you reach ₹5L+ monthly revenue.',
    color: '#0097A7',
    bg: '#E5F6F8',
  },
]

export default function FranchiseSteps() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">

        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label justify-center">How to Join</div>
          <h2 className="section-heading mb-4">
            Start in <span className="text-gradient-gold">3 Simple Steps</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Becoming a Shyama Business Growth partner is simple, fast and fully supported from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map(({ num, icon: Icon, title, desc, color, bg }, i) => (
            <div
              key={num}
              className={`relative p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-300 group ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Step number background */}
              <div className="absolute top-6 right-6 font-heading font-bold text-6xl text-gray-50 group-hover:text-gray-100 transition-colors leading-none select-none">
                {num}
              </div>

              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative" style={{ background: bg }}>
                <Icon size={24} style={{ color }} />
              </div>

              <h3 className="font-heading font-bold text-navy-900 text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>

              <div className="mt-6 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-16" style={{ background: color }} />
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20become%20a%20Shyama%20Business%20Growth%20partner."
            target="_blank" rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-base"
          >
            Start Your Journey Today
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
