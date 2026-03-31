import { useInView } from 'react-intersection-observer'
import { Phone, Package, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Call or WhatsApp Us',
    desc: 'Reach out to our team on +91-6201739296. Tell us about your area and your goals. We will guide you through the franchise process.',
    color: 'bg-navy-900',
  },
  {
    step: '02',
    icon: Package,
    title: 'Get Your Starter Stock',
    desc: 'We supply your first batch of 30–40 essential products along with pricing, training materials and sales guidance.',
    color: 'bg-gold-500',
  },
  {
    step: '03',
    icon: TrendingUp,
    title: 'Sell, Grow & Scale',
    desc: 'Start selling with our support. We restock, train and plan with you every step of the way until you reach ₹5L+ monthly revenue.',
    color: 'bg-brand-teal',
  },
]

export default function FranchiseSteps() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">How to Join</p>
          <h2 className="section-heading mb-4">
            Start in{' '}
            <span className="text-gradient-gold">3 Simple Steps</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Becoming a Shyama Business Growth partner is simple, fast and
            fully supported from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-navy-900 via-gold-500 to-brand-teal" />

          {steps.map(({ step, icon: Icon, title, desc, color }, i) => (
            <div
              key={step}
              className={`relative text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step circle */}
              <div className="flex justify-center mb-6">
                <div className={`${color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative`}>
                  <Icon size={28} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-navy-900 shadow">
                    {step}
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl text-navy-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm px-4">{desc}</p>

              {i < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ArrowRight size={20} className="text-gold-500 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20become%20a%20Shyama%20Business%20Growth%20partner."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-10 py-4"
          >
            Start Your Journey Today
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
