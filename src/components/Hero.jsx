import { useInView } from 'react-intersection-observer'
import { ArrowRight, Star, Users, Package, Clock, Phone } from 'lucide-react'

const miniStats = [
  { icon: Users, value: '150+', label: 'Partners' },
  { icon: Package, value: '40+', label: 'Products' },
  { icon: Clock, value: '15 Yrs', label: 'Experience' },
]

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#FAFBFF] pt-20"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-0 h-96 w-96 rounded-full bg-[#1B2B5E]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-10">
        {/* Left */}
        <div
          className={`order-2 lg:order-1 transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9E5FF] bg-[#F6F9FF] px-4 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={11}
                  className="fill-[#2563EB] text-[#2563EB]"
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#1E3A8A]">
              Trusted by 150+ Partners across Jharkhand
            </span>
          </div>

          {/* Headline */}
          <h1
            className="max-w-[640px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#1B2B5E]"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.9rem)' }}
          >
            Your
            <br />
            <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
              Growth Partner
            </span>
            <br />
            in Every Step
          </h1>

          <p className="mt-5 max-w-[560px] text-base leading-8 text-slate-600 md:text-lg">
            Start your own retail business with a proven franchise support model —
            tyres, batteries, coolers, appliances, training, supply support, and a
            clear path to higher monthly revenue.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8860A] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_rgba(200,134,10,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B37809]"
            >
              Become a Partner
              <ArrowRight size={17} />
            </a>

            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2B5E] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
            >
              See Products
            </a>
          </div>

          {/* Contact */}
          <div className="mt-6 inline-flex items-center gap-3 text-sm text-slate-500">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4FF]">
              <Phone size={16} className="text-[#2563EB]" />
            </span>
            <span className="font-medium">+91-6201739296</span>
          </div>

          {/* Mini stats */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200/70 pt-5">
            {miniStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F8FAFC]">
                  <Icon size={16} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-none text-[#1B2B5E]">
                    {value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{label}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFF8EA]">
                <span className="text-sm font-bold text-[#C8860A]">₹</span>
              </div>
              <div>
                <div className="text-sm font-semibold leading-none text-[#C8860A]">
                  ₹5L+
                </div>
                <div className="mt-1 text-xs text-slate-500">Revenue Potential</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="relative mx-auto flex max-w-[640px] items-center justify-center">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D18A00]/[0.08] blur-3xl" />

            {/* Image without box */}
            <img
              src="/images/hero-image.jpeg"
              alt="Tyres, batteries, coolers, appliances — Shyama Business Growth"
              className="relative z-10 max-h-[68vh] w-full object-contain drop-shadow-[0_24px_50px_rgba(16,24,40,0.16)]"
              style={{ mixBlendMode: 'multiply' }}
              draggable={false}
            />

            {/* One clean revenue chip only */}
            <div className="absolute bottom-[5%] right-[4%] z-20 rounded-2xl bg-[#1B2B5E] px-5 py-4 text-white shadow-[0_20px_40px_rgba(27,43,94,0.26)]">
              <div className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                Growth Potential
              </div>
              <div className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#F0C15A]">
                ₹5L+ / mo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}