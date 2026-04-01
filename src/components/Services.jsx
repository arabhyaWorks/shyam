import { useInView } from 'react-intersection-observer'
import {
  Package,
  GraduationCap,
  Headphones,
  BarChart3,
  Truck,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    icon: Package,
    title: 'Starter Inventory',
    desc: 'Get 30–40 essential products to stock your store from day one. No need to source from multiple vendors.',
    color: '#1B2B5E',
    bg: '#EEF1FA',
    tag: 'Launch Ready',
  },
  {
    icon: GraduationCap,
    title: 'Sales Training',
    desc: 'Hands-on training in customer interaction, product knowledge, and closing sales so your team builds confidence fast.',
    color: '#C8860A',
    bg: '#FDF4E3',
    tag: 'Skill Building',
  },
  {
    icon: Headphones,
    title: '24/7 Support Helpline',
    desc: 'Round-the-clock partner support for stock, pricing, customer issues, and day-to-day business operations.',
    color: '#0097A7',
    bg: '#E5F6F8',
    tag: 'Always Available',
  },
  {
    icon: Truck,
    title: 'Stock Supply & Restocking',
    desc: 'Ongoing stock replenishment directly to your store so you never run out of fast-moving, high-demand products.',
    color: '#E8720C',
    bg: '#FEF0E6',
    tag: 'Reliable Supply',
  },
  {
    icon: BarChart3,
    title: 'Business Growth Planning',
    desc: 'Structured guidance to help you expand product categories, improve margins, and scale from a small shop to a serious business.',
    color: '#4CAF50',
    bg: '#EDF7EE',
    tag: 'Scale Strategy',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Products are quality-checked before supply so you can build trust with customers and operate with confidence.',
    color: '#7C3AED',
    bg: '#F3EDFF',
    tag: 'Trusted Products',
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#FAFBFF] py-28 md:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-16 h-80 w-80 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-96 w-96 rounded-full bg-[#1B2B5E]/[0.05] blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0097A7]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top layout */}
        <div className="mb-16 grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className={`transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="mb-4 inline-flex items-center rounded-full border border-[#E7D7B0] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8860A] shadow-sm">
              What You Get
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#1B2B5E] md:text-5xl lg:text-6xl">
              A Complete Business
              <br />
              <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
                Support System
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              You do not just receive products. You get inventory, training, support,
              supply continuity, business planning, and quality confidence — all designed
              to help your retail business grow faster and operate better.
            </p>
          </div>

          {/* Highlight block */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="rounded-[30px] border border-[#EDE6D6] bg-gradient-to-r from-[#FFF8EA] via-white to-[#F8FAFF] p-7 shadow-[0_20px_60px_rgba(16,24,40,0.08)] md:p-8">
              <div className="grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    Inventory
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#1B2B5E]">
                    30–40 Products
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    Partner Support
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#1B2B5E]">
                    24/7 Assistance
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    Growth Goal
                  </div>
                  <div className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#C8860A]">
                    Scale Faster
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500">
                <ArrowRight size={16} className="text-[#C8860A]" />
                Everything needed to move from startup retail to a stronger multi-category business
              </div>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, color, bg, tag }, i) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/90 p-7 shadow-[0_15px_40px_rgba(16,24,40,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_28px_70px_rgba(16,24,40,0.14)] ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Hover glow */}
              <div
                className="absolute right-[-20px] top-[-20px] h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{ backgroundColor: color }}
              />

              {/* Accent top line */}
              <div
                className="absolute left-7 right-7 top-0 h-[2px] rounded-full"
                style={{
                  background: `linear-gradient(to right, transparent, ${color}, transparent)`,
                }}
              />

              {/* Tag */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{
                    backgroundColor: `${color}12`,
                    color,
                  }}
                >
                  {tag}
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
              </div>

              {/* Icon */}
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-[22px] transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                style={{ backgroundColor: bg }}
              >
                <Icon size={28} style={{ color }} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1B2B5E]">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-[15px]">
                {desc}
              </p>

              {/* Bottom action line */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition-all duration-300 group-hover:text-slate-600">
                <span
                  className="h-[2px] w-8 rounded-full transition-all duration-500 group-hover:w-14"
                  style={{ backgroundColor: color }}
                />
                Business support advantage
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-14 transition-all duration-700 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="rounded-[30px] border border-[#EDE6D6] bg-[#0E1A43] px-8 py-8 shadow-[0_20px_60px_rgba(16,24,40,0.14)] md:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F0C15A]">
                  Built for Partner Success
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                  One partner. Multiple product categories. Full business backing.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
                  From first stock to long-term expansion, Shyama Business Growth supports
                  retailers with the systems, supply, and guidance needed to build a stronger store.
                </p>
              </div>

              <a
                href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20business%20support%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#C8860A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C8860A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B37809] lg:self-center"
              >
                Talk to Our Team
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}