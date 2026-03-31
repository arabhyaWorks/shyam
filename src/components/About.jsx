import { useInView } from 'react-intersection-observer'
import { CheckCircle2, MapPin, Heart } from 'lucide-react'

const pillars = [
  'Starter inventory of 30–40 essential products',
  '24/7 partner helpline & support',
  'Sales training & customer interaction guidance',
  'Business growth planning & profitability strategy',
  'Ongoing stock supply & replenishment',
  'Trusted by 150+ franchise partners',
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left image collage */}
        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative">
            <img
              src="/growth/stage-3-established-store.jpeg"
              alt="Our established partner store"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
            {/* Overlay card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-5 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center">
                  <Heart size={20} className="text-gold-500 fill-gold-500" />
                </div>
                <div>
                  <div className="font-bold text-navy-900 text-sm">Partner Success</div>
                  <div className="text-gray-400 text-xs">Across Jharkhand</div>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                "Shyama transformed my small shop into a thriving business in just 18 months."
              </p>
            </div>

            {/* Location badge */}
            <div className="absolute -top-4 -left-4 bg-navy-900 text-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
              <MapPin size={14} className="text-gold-500" />
              <span className="text-xs font-semibold">Jamshedpur, Jharkhand</span>
            </div>
          </div>
        </div>

        {/* Right text */}
        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <p className="section-subheading">Who We Are</p>
          <h2 className="section-heading mb-6">
            Empowering India's{' '}
            <span className="text-gradient-gold">Next Generation</span>{' '}
            of Retailers
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Shyama Business Growth is a retail franchise support platform based in
            Jamshedpur, Jharkhand. For 15 years, we have been helping aspiring
            entrepreneurs — especially in rural and semi-urban areas — build
            successful retail businesses from the ground up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our model is simple: we supply the products, the training, and the
            ongoing support. You run the store and grow your income. Together, we
            are building India's most trusted franchise network.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pillars.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#contact" className="btn-primary">
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
