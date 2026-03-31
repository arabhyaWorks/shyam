import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
  Users,
  Package,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react'

const stats = [
  {
    value: 150,
    suffix: '+',
    label: 'Franchise Partners',
    desc: 'Across Jharkhand & beyond',
    icon: Users,
    accent: '#D89B1D',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Products Available',
    desc: 'Tyres to appliances',
    icon: Package,
    accent: '#0097A7',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Training Sessions',
    desc: 'Partners trained so far',
    icon: GraduationCap,
    accent: '#E8720C',
  },
  {
    value: 15,
    suffix: ' Yrs',
    label: 'In Business',
    desc: 'Trusted since day one',
    icon: ShieldCheck,
    accent: '#4CAF50',
  },
]

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0E1A43] py-24 md:py-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06] dot-grid" />
        <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-[#D89B1D]/20 blur-3xl" />
        <div className="absolute right-[-120px] top-12 h-80 w-80 rounded-full bg-[#1AA6B7]/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#D89B1D]/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0C15A]">
            Shyama at a Glance
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            Built on Trust,
            <span className="bg-gradient-to-r from-[#F0C15A] via-[#E0A126] to-[#C8860A] bg-clip-text text-transparent">
              {' '}Scaled by Results
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Over the years, Shyama Business Growth has built a dependable franchise
            ecosystem for retail entrepreneurs through product supply, training, and
            hands-on business support.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, suffix, label, desc, icon: Icon, accent }, i) => (
            <div
              key={label}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Accent top line */}
              <div
                className="absolute left-8 right-8 top-0 h-[2px] rounded-full"
                style={{
                  background: `linear-gradient(to right, transparent, ${accent}, transparent)`,
                }}
              />

              {/* Glow accent */}
              <div
                className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full blur-2xl opacity-20"
                style={{ backgroundColor: accent }}
              />

              {/* Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10"
                  style={{
                    boxShadow: `0 0 0 1px ${accent}20 inset`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} />
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
                  Verified
                </div>
              </div>

              {/* Number */}
              <div className="mb-3">
                <div className="flex items-end justify-center sm:justify-start">
                  <span className="text-5xl font-bold leading-none tracking-[-0.04em] text-white md:text-6xl">
                    {inView ? (
                      <CountUp end={value} duration={2.4} suffix={suffix} />
                    ) : (
                      `0${suffix}`
                    )}
                  </span>
                </div>
              </div>

              {/* Label */}
              <div className="text-lg font-semibold tracking-[-0.02em] text-white">
                {label}
              </div>

              {/* Divider */}
              <div className="my-4 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

              {/* Description */}
              <div className="text-sm leading-6 text-white/55">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}