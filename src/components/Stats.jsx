import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 150, suffix: '+', label: 'Franchise Partners', desc: 'Across Jharkhand & beyond' },
  { value: 40, suffix: '+', label: 'Products Available', desc: 'Tyres to appliances' },
  { value: 500, suffix: '+', label: 'Training Sessions', desc: 'Partners trained so far' },
  { value: 15, suffix: ' Yrs', label: 'In Business', desc: 'Trusted since day one' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Numbers</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            The Growth We've Powered Together
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label, desc }, i) => (
            <div
              key={label}
              className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-heading font-bold text-5xl md:text-6xl text-gold-500 mb-2">
                {inView ? (
                  <CountUp end={value} duration={2.5} suffix={suffix} />
                ) : (
                  `0${suffix}`
                )}
              </div>
              <div className="text-white font-semibold text-lg mb-1">{label}</div>
              <div className="text-white/50 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
