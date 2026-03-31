import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Dhanbad, Jharkhand',
    initials: 'RK',
    rating: 5,
    revenue: '₹2.8L/month',
    color: '#1B2B5E',
    text: 'Before joining Shyama Business Growth, I had a small tyre shop with only 5–6 products. Now I have a full showroom with batteries, coolers, fans and more. My revenue has gone up 5x in 2 years.',
  },
  {
    name: 'Suresh Mahato',
    location: 'Bokaro, Jharkhand',
    initials: 'SM',
    rating: 5,
    revenue: '₹1.5L/month',
    color: '#0097A7',
    text: 'The training they gave me on how to handle customers was game-changing. I used to be shy about selling — now I run a confident business. Their 24/7 helpline is always there when I need it.',
  },
  {
    name: 'Pradeep Singh',
    location: 'Ranchi, Jharkhand',
    initials: 'PS',
    rating: 5,
    revenue: '₹3.2L/month',
    color: '#C8860A',
    text: 'I started with just ₹50,000 investment. Shyama gave me the first batch of products and guided me step by step. Today I have two shops and planning a third. Best decision of my business life.',
  },
  {
    name: 'Mohan Prasad',
    location: 'Jamshedpur, Jharkhand',
    initials: 'MP',
    rating: 5,
    revenue: '₹5L+/month',
    color: '#4CAF50',
    text: 'The product quality is excellent and customers keep coming back. Shyama ensures we never run out of stock. My shop is now the go-to destination in my area for tyres and home appliances.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const t = testimonials[current]

  return (
    <section className="py-28 bg-mesh" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">

        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="section-label justify-center">Partner Stories</div>
          <h2 className="section-heading mb-4">
            Real Results from <span className="text-gradient-gold">Real Partners</span>
          </h2>
        </div>

        <div
          className={`bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          key={current}
        >
          {/* Stars */}
          <div className="flex gap-1 mb-8">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
            ))}
          </div>

          <p className="text-navy-900 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-3xl">
            "{t.text}"
          </p>

          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-heading font-bold text-lg"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <div className="font-heading font-bold text-navy-900 text-base">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.location}</div>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="text-xs text-gray-400 mb-0.5 font-medium">Monthly Revenue</div>
              <div className="font-heading font-bold text-2xl text-gradient-gold">{t.revenue}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold-500' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
