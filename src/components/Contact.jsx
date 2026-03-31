import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi Shyama Business Growth!%0AName: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AMessage: ${form.message}`
    window.open(`https://wa.me/916201739296?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50/30 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading mb-4">
            Ready to{' '}
            <span className="text-gradient-gold">Start Growing?</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Reach out to us and we will get back to you within 24 hours.
            Your future business starts with one message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Phone,
                  label: 'Call / WhatsApp',
                  value: '+91-6201739296',
                  href: 'tel:+916201739296',
                  color: 'bg-green-100 text-green-600',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@shyamabusinessgrowth.com',
                  href: 'mailto:info@shyamabusinessgrowth.com',
                  color: 'bg-blue-100 text-blue-600',
                },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: 'Agrico Area, Jamshedpur, Jharkhand 831004',
                  href: 'https://maps.google.com/?q=Agrico+Jamshedpur+Jharkhand',
                  color: 'bg-red-100 text-red-500',
                },
              ].map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
                    <div className="text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20need%20more%20info%20about%20your%20franchise."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-fit"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <h3 className="font-heading font-bold text-2xl text-navy-900 mb-6">Send an Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Your City</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="City, State"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your current shop or business idea..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  {sent ? '✓ Opening WhatsApp...' : 'Send via WhatsApp'}
                  {!sent && <Send size={16} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
