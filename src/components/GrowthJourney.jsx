import { useInView } from 'react-intersection-observer'
import { ArrowRight, TrendingUp } from 'lucide-react'

const stages = [
  {
    level: 'Level 01',
    title: 'Starter Retail Setup',
    investment: '₹5–10 Lakh Stock',
    revenue: '₹30K–80K/month',
    desc: 'Start with a focused product range including tyres, batteries, and essential appliances. Shyama provides the initial stock and business guidance.',
    image: '/growth/stage-1-small-shop.jpeg',
    color: '#6B7280',
  },
  {
    level: 'Level 02',
    title: 'Multi-Category Retail Store',
    investment: '₹15–25 Lakh Stock',
    revenue: '₹1L–3L/month',
    desc: 'Expand your store with cooling, kitchen, and power products. Your shop becomes a known destination in your area.',
    image: '/growth/stage-2-growing-shop.jpeg',
    color: '#0097A7',
  },
  {
    level: 'Level 03',
    title: 'High-Performing Showroom',
    investment: '₹30–60 Lakh Stock',
    revenue: '₹5L–15L/month',
    desc: 'Full product range with strong customer base, repeat buyers, and steady monthly revenue.',
    image: '/growth/stage-3-established-store.jpeg',
    color: '#C8860A',
  },
  {
    level: 'Level 04',
    title: 'Retail Business Powerhouse',
    investment: '₹1Cr+ Inventory',
    revenue: '₹50L–₹5Cr/month',
    desc: 'A premium multi-category showroom with strong brand presence, staff, and large-scale operations.',
    image: '/growth/stage-4-premium-store.jpeg',
    color: '#E8720C',
  },
]

export default function GrowthJourney() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#0E1A43] to-[#1B2B5E] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-20 ${inView ? 'opacity-100' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs tracking-widest uppercase mb-4">
            Business Growth Model
          </div>

          <h2 className="text-5xl font-bold leading-tight">
            From ₹5L Stock to
            <br />
            <span className="text-[#F4C66A]">₹5 Crore Monthly Business</span>
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            This is not just a shop — this is a scalable retail system designed to grow step-by-step into a high-revenue business.
          </p>
        </div>

        {/* Vertical Journey */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/20 hidden md:block" />

          <div className="space-y-16">

            {stages.map((s, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-[80px_1fr] gap-8 items-center ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } transition-all duration-700`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >

                {/* Step indicator */}
                <div className="hidden md:flex justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg"
                    style={{ background: s.color }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-xl">

                  <div className="grid lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative">
                      <img
                        src={s.image}
                        className="w-full h-[280px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      <div className="absolute bottom-4 left-4">
                        <div className="text-xs text-white/70">Monthly Revenue</div>
                        <div className="text-xl font-bold">{s.revenue}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">

                      <div className="text-xs uppercase tracking-widest mb-2 text-white/50">
                        {s.level}
                      </div>

                      <h3 className="text-2xl font-bold mb-3">
                        {s.title}
                      </h3>

                      <p className="text-white/70 mb-6 text-sm leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="flex gap-6 text-sm">
                        <div>
                          <div className="text-white/40">Investment</div>
                          <div className="font-semibold">{s.investment}</div>
                        </div>
                        <div>
                          <div className="text-white/40">Revenue</div>
                          <div className="font-semibold text-[#F4C66A]">{s.revenue}</div>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="https://wa.me/916201739296?text=Hi!%20I%20want%20to%20build%20a%20retail%20business"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#F4C66A] text-[#1B2B5E] px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            Build Your Business with Shyama
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}