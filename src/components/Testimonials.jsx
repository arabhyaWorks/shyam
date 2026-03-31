import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Dhanbad, Jharkhand',
    image: null,
    initials: 'RK',
    rating: 5,
    revenue: '₹2.8L/month',
    text: 'Before joining Shyama Business Growth, I had a small tyre shop with only 5–6 products. Now I have a full showroom with batteries, coolers, fans and more. My revenue has gone up 5x in 2 years.',
  },
  {
    name: 'Suresh Mahato',
    location: 'Bokaro, Jharkhand',
    image: null,
    initials: 'SM',
    rating: 5,
    revenue: '₹1.5L/month',
    text: 'The training they gave me on how to handle customers was game-changing. I used to be shy about selling — now I run a confident business. Their 24/7 helpline is always there when I need it.',
  },
  {
    name: 'Pradeep Singh',
    location: 'Ranchi, Jharkhand',
    image: null,
    initials: 'PS',
    rating: 5,
    revenue: '₹3.2L/month',
    text: 'I started with just ₹50,000 investment. Shyama gave me the first batch of products and guided me step by step. Today I have two shops and planning a third. Best decision of my business life.',
  },
  {
    name: 'Mohan Prasad',
    location: 'Jamshedpur, Jharkhand',
    image: null,
    initials: 'MP',
    rating: 5,
    revenue: '₹5L+/month',
    text: 'The product quality is excellent and customers keep coming back. Shyama ensures we never run out of stock. My shop is now the go-to destination in my area for tyres and home appliances.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="py-24 bg-gradient-to-b from-amber-50/30 to-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Partner Stories</p>
          <h2 className="section-heading mb-4">
            Real Results from{' '}
            <span className="text-gradient-gold">Real Partners</span>
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 relative transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          key={current}
        >
          {/* Quote icon */}
          <div className="absolute top-8 right-8 opacity-10">
            <Quote size={80} className="text-navy-900" />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={20} className="text-gold-500 fill-gold-500" />
            ))}
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
            "{t.text}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {t.initials}
              </div>
              <div>
                <div className="font-bold text-navy-900">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.location}</div>
              </div>
            </div>
            <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl px-5 py-2 text-center">
              <div className="text-xs text-gray-400">Monthly Revenue</div>
              <div className="font-heading font-bold text-gold-500 text-lg">{t.revenue}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold-500' : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
