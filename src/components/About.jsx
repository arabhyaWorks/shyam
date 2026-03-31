import { useInView } from 'react-intersection-observer'
import { CheckCircle2, MapPin, TrendingUp } from 'lucide-react'

const pillars = [
  'Starter inventory of 30–40 essential products',
  '24/7 partner helpline & support',
  'Sales training & customer interaction',
  'Business growth & profitability planning',
  'Ongoing stock supply & replenishment',
  'Trusted by 150+ franchise partners',
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Image side */}
        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/growth/stage-3-established-store.jpeg"
              alt="Established partner store"
              className="w-full h-[480px] object-cover"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />

            {/* Bottom info card inside image */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp size={22} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-navy-900 text-base">Partner Success Story</div>
                  <div className="text-gray-500 text-xs">From ₹10K to ₹5L+ monthly revenue</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating location badge */}
          <div className="absolute -top-4 -right-4 bg-navy-900 text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-2">
            <MapPin size={15} className="text-gold-500" />
            <span className="text-sm font-semibold">Jamshedpur, Jharkhand</span>
          </div>

          {/* Years badge */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold-500 rounded-2xl flex flex-col items-center justify-center shadow-xl rotate-3">
            <span className="font-heading font-bold text-white text-3xl leading-none">15</span>
            <span className="text-white/80 text-xs font-medium">Years</span>
          </div>
        </div>

        {/* Text side */}
        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="section-label">Who We Are</div>
          <h2 className="section-heading mb-6">
            Empowering India's Next<br />
            <span className="text-gradient-gold">Generation of Retailers</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Shyama Business Growth is a retail franchise support platform based in Jamshedpur, Jharkhand.
            For <strong className="text-navy-900">15 years</strong>, we have been helping aspiring entrepreneurs
            — especially in rural and semi-urban India — build successful retail businesses.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Our model is simple: <strong className="text-navy-900">we supply the products, training, and support.</strong> You run
            the store and grow your income. Together, we are building India's most trusted franchise network.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {pillars.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <CheckCircle2 size={16} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{p}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
