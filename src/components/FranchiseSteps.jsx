import { useInView } from 'react-intersection-observer'
import { Phone, Package, TrendingUp, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Phone,
    title: 'Call or WhatsApp Us',
    desc: 'Reach out and tell us about your location and goals. We guide you step-by-step on how to start.',
    color: '#1B2B5E',
    bg: '#EEF1FA',
  },
  {
    num: '02',
    icon: Package,
    title: 'Get Starter Inventory',
    desc: 'Receive 30–40 essential products, pricing strategy, and training materials to launch confidently.',
    color: '#C8860A',
    bg: '#FDF4E3',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Sell, Grow & Scale',
    desc: 'Start selling and expand with our support system until you build a ₹5L → ₹5Cr business.',
    color: '#0097A7',
    bg: '#E5F6F8',
  },
]

export default function FranchiseSteps() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFF] via-white to-[#FFFDF8] py-28 md:py-32"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 h-80 w-80 bg-[#F4C66A]/10 blur-3xl rounded-full" />
        <div className="absolute right-[-120px] top-32 h-96 w-96 bg-[#1B2B5E]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 border border-[#E7D7B0] rounded-full text-xs uppercase tracking-widest text-[#C8860A] bg-white shadow-sm mb-4">
            How to Join
          </div>

          <h2 className="text-5xl font-bold leading-tight text-[#1B2B5E]">
            Start Your Business in
            <br />
            <span className="bg-gradient-to-r from-[#D18A00] to-[#C8860A] text-transparent bg-clip-text">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A guided, step-by-step onboarding process designed to help you start fast and grow confidently.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E2C78C] to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">

            {steps.map(({ num, icon: Icon, title, desc, color, bg }, i) => (
              <div
                key={num}
                className={`relative group transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >

                {/* Step Dot */}
                <div className="hidden md:flex justify-center mb-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                    style={{ background: color }}
                  >
                    {num}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-[28px] p-8 border border-gray-100 shadow-[0_15px_40px_rgba(16,24,40,0.06)] hover:shadow-[0_25px_70px_rgba(16,24,40,0.15)] transition-all duration-500 hover:-translate-y-2">

                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ background: bg }}
                  >
                    <Icon size={28} style={{ color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1B2B5E] mb-3">
                    {title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {desc}
                  </p>

                  {/* Accent line */}
                  <div
                    className="mt-6 h-[2px] w-10 group-hover:w-20 transition-all duration-500 rounded-full"
                    style={{ background: color }}
                  />
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CTA Block */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-[#0E1A43] rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Build Your Retail Business?
              </h3>
              <p className="text-white/70 max-w-lg text-sm">
                Join 150+ partners already growing with Shyama Business Growth. Start your journey today.
              </p>
            </div>

            <a
              href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20become%20a%20partner"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#C8860A] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
              Start Now
              <ArrowRight size={18} />
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}