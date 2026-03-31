import { useInView } from 'react-intersection-observer'
import { ArrowRight, Star, Users, Package, Clock, TrendingUp } from 'lucide-react'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Dot grid — subtle depth */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      {/* Right side soft glow — ties into image warmth */}
      <div
        className="absolute right-0 top-0 w-[55%] h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(200,134,10,0.07) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-4 items-center min-h-[calc(100vh-80px)] py-12">

        {/* ── LEFT: Text ── */}
        <div className={`order-2 lg:order-1 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-8">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-blue-600 text-blue-600" />)}
            </div>
            <span className="text-xs font-semibold text-blue-800">Trusted by 150+ Partners across Jharkhand</span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-bold leading-[1.06] tracking-tight mb-6 text-slate-900"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)' }}
          >
            Your<br />
            <span className="text-gradient-blue">Growth Partner</span><br />
            in Every Step
          </h1>

          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-[420px]">
            Start your own retail shop with 40+ products — tyres, batteries,
            coolers, appliances and more. Full training, 24/7 support, and a
            proven path to ₹5L+ monthly revenue.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20become%20a%20partner."
              target="_blank" rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-[15px]"
            >
              Become a Partner
              <ArrowRight size={17} />
            </a>
            <a href="#products" className="btn-outline px-8 py-4 text-[15px]">
              See Products
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: Users,      value: '150+',  label: 'Active Partners' },
              { icon: Package,    value: '40+',   label: 'Products' },
              { icon: Clock,      value: '15 Yrs',label: 'Experience' },
              { icon: TrendingUp, value: '₹5L+',  label: 'Partner Revenue' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-heading font-bold text-slate-900 text-base leading-none">{value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Product image — blended, no box ── */}
        <div className={`order-1 lg:order-2 flex items-center justify-center transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="relative w-full max-w-[620px]">
            {/*
              mix-blend-mode: multiply makes the image's white background
              completely transparent against the white page — zero visible box.
            */}
            <img
              src="/images/hero-image.jpeg"
              alt="Tyres, Batteries, Coolers, Appliances — Shyama Business Growth"
              className="w-full h-auto object-contain select-none"
              style={{ mixBlendMode: 'multiply' }}
              draggable={false}
            />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-5 h-8 border-2 border-slate-400 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
