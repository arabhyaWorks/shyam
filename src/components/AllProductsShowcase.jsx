import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const categories = [
  { label: 'Tyres', sub: 'All vehicle sizes', color: '#1B2B5E' },
  { label: 'Cooling', sub: 'Coolers & AC', color: '#0097A7' },
  { label: 'Power', sub: 'Batteries & Inverters', color: '#C8860A' },
  { label: 'Kitchen', sub: 'Stoves & Appliances', color: '#E8720C' },
  { label: 'Lighting & Safety', sub: 'LED & Helmets', color: '#4CAF50' },
]

export default function AllProductsShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#FAFBFF] py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-[#1B2B5E]/[0.06] blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0097A7]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div
          className={`mx-auto mb-14 max-w-4xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#E7D7B0] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8860A] shadow-sm">
            Complete Range
          </div>

          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#1B2B5E] md:text-5xl lg:text-6xl">
            Everything Your Store Needs,
            <br />
            <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
              In One Partnership
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            Tyres for every vehicle. Cooling for every home. Power backup for every need.
            Kitchen essentials. Lighting and safety products — all supplied through one trusted partner.
          </p>
        </div>

        {/* Showcase */}
        <div
          className={`transition-all duration-1000 ${
            inView ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[0.98] opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(16,24,40,0.12)] backdrop-blur-sm md:p-5">
            {/* Top info strip */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#EEF2F7] bg-[#FCFCFD] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[#1B2B5E]">40+ Product Categories Ready to Stock</p>
                <p className="text-xs text-slate-500">
                  Built for rural and semi-urban retail stores across Jharkhand
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#1B2B5E]/6 px-3 py-1 text-xs font-medium text-[#1B2B5E]">
                  Tyres
                </span>
                <span className="rounded-full bg-[#0097A7]/6 px-3 py-1 text-xs font-medium text-[#0097A7]">
                  Cooling
                </span>
                <span className="rounded-full bg-[#C8860A]/6 px-3 py-1 text-xs font-medium text-[#C8860A]">
                  Power
                </span>
                <span className="rounded-full bg-[#E8720C]/6 px-3 py-1 text-xs font-medium text-[#E8720C]">
                  Kitchen
                </span>
                <span className="rounded-full bg-[#4CAF50]/6 px-3 py-1 text-xs font-medium text-[#4CAF50]">
                  Lighting & Safety
                </span>
              </div>
            </div>

            {/* Image frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#F1F3F5] bg-gradient-to-br from-[#FFFDF8] to-white">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F7F8FA] to-transparent" />
              <div className="pointer-events-none absolute left-10 top-10 h-40 w-40 rounded-full bg-[#F4C66A]/10 blur-3xl" />
              <div className="pointer-events-none absolute right-10 top-10 h-40 w-40 rounded-full bg-[#1B2B5E]/10 blur-3xl" />

              <img
                src="/images/all-products-showcase.png"
                alt="Full product range — Shyama Business Growth"
                className="relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Category cards */}
        <div
          className={`mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 transition-all duration-700 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {categories.map(({ label, sub, color }) => (
            <div
              key={label}
              className="group rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(to right, ${color}55, transparent)`,
                  }}
                />
              </div>

              <h3 className="text-base font-semibold text-[#1B2B5E]">{label}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">{sub}</p>
            </div>
          ))}
        </div>

        {/* CTA area */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-[28px] border border-[#EDE6D6] bg-gradient-to-r from-[#FFF8EA] via-white to-[#F8FAFF] px-6 py-7 text-center shadow-[0_20px_50px_rgba(16,24,40,0.08)]">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1B2B5E]">
              Want the complete product catalogue for your store?
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Get the full list of categories, product options, and franchise-ready stock support available through Shyama Business Growth.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20product%20range."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C8860A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#C8860A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B37809]"
              >
                Get Full Product Catalogue
                <ArrowRight size={16} />
              </a>

              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-[#1B2B5E]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1B2B5E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B2B5E]/30 hover:bg-[#F8FAFC]"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}