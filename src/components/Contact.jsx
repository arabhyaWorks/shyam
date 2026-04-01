import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Store,
  IndianRupee,
  Package,
} from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91-6201739296',
    href: 'tel:+916201739296',
    color: '#16A34A',
    bg: '#EAF8EF',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@shyamabusinessgrowth.com',
    href: 'mailto:info@shyamabusinessgrowth.com',
    color: '#2563EB',
    bg: '#EEF4FF',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Agrico Area, Jamshedpur, Jharkhand 831009',
    href: 'https://maps.google.com/?q=Agrico+Area+Jamshedpur+Jharkhand+831009',
    color: '#DC2626',
    bg: '#FEF0F0',
  },
]

const categoryOptions = [
  'Tyres',
  'Power',
  'Cooling',
  'Kitchen',
  'Lighting & Safety',
]

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    state: '',
    businessType: '',
    investment: '',
    categories: [],
    message: '',
  })

  const [sent, setSent] = useState(false)

  const toggleCategory = (category) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Hi Shyama Business Growth!

Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
State: ${form.state}
Business Type: ${form.businessType}
Investment Range: ${form.investment}
Interested Categories: ${form.categories.join(', ') || 'Not specified'}
Message: ${form.message || 'Not provided'}`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/916201739296?text=${encoded}`, '_blank')

    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-white to-[#F8FAFF] py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-0 h-64 w-64 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-100px] top-10 h-72 w-72 rounded-full bg-[#1B2B5E]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-10 max-w-2xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="mb-3 inline-flex items-center rounded-full border border-[#E7D7B0] bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C8860A] shadow-sm">
            Franchise Enquiry
          </div>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#1B2B5E] md:text-5xl">
            Let’s Build Your
            <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
              {' '}Business Journey
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
            Share a few details and our team will connect with you for stock planning,
            franchise guidance, and next steps.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left Panel */}
          <div
            className={`transition-all duration-700 delay-100 ${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'
            }`}
          >
            <div className="h-full rounded-[28px] border border-[#EDE6D6] bg-[#0E1A43] p-6 shadow-[0_20px_60px_rgba(16,24,40,0.14)] md:p-7">
              <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F0C15A]">
                Contact Team
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                Let’s Build Your Store
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Talk to us about your city, investment range, and product interest. We will guide you with the right start.
              </p>

              <div className="mt-6 space-y-3">
                {contactItems.map(({ icon: Icon, label, value, href, color, bg }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:bg-white/10"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: bg }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
                        {label}
                      </div>
                      <div className="truncate text-sm font-semibold text-white md:text-[15px]">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps?q=Agrico%20Area,%20Jamshedpur,%20Jharkhand%20831009&z=15&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agrico Area, Jamshedpur, Jharkhand"
                  className="block w-full"
                />
              </div>

              <a
                href="https://wa.me/916201739296?text=Hi%20Shyama%20Business%20Growth!%20I%20want%20to%20know%20more%20about%20starting%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16A34A]"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
            }`}
          >
            <div className="rounded-[28px] border border-slate-200/70 bg-white/95 shadow-[0_20px_60px_rgba(16,24,40,0.08)]">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#FFF8EA] via-white to-[#F8FAFF] px-6 py-5">
                <div className="inline-flex rounded-full bg-[#1B2B5E]/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1B2B5E]">
                  Send Enquiry
                </div>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#1B2B5E] md:text-2xl">
                  Tell Us About Your Plan
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  A few details will help us guide you better.
                </p>
              </div>

              <div className="p-6 md:p-7">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Basic */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="Your city"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        placeholder="Your state"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <Store size={15} />
                        Business Type
                      </label>
                      <select
                        required
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      >
                        <option value="">Select business type</option>
                        <option value="Existing Shop Owner">Existing Shop Owner</option>
                        <option value="New Entrepreneur">New Entrepreneur</option>
                        <option value="Distributor / Trader">Distributor / Trader</option>
                        <option value="Franchise Enquiry">Franchise Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 flex items-center gap-2 text-sm font-medium text-slate-700">
                        <IndianRupee size={15} />
                        Investment Range
                      </label>
                      <select
                        required
                        value={form.investment}
                        onChange={(e) => setForm({ ...form, investment: e.target.value })}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                      >
                        <option value="">Select investment range</option>
                        <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
                        <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                        <option value="₹10–25 Lakh">₹10–25 Lakh</option>
                        <option value="₹25–50 Lakh">₹25–50 Lakh</option>
                        <option value="₹50 Lakh+">₹50 Lakh+</option>
                      </select>
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Package size={15} />
                      Interested Categories
                    </label>

                    <div className="flex flex-wrap gap-2">
                      {categoryOptions.map((category) => {
                        const active = form.categories.includes(category)
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => toggleCategory(category)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                              active
                                ? 'border-[#C8860A] bg-[#FFF8EA] text-[#C8860A]'
                                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            {category}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your current shop, business idea, or target market..."
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#C8860A] focus:ring-4 focus:ring-[#C8860A]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8860A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C8860A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B37809]"
                  >
                    {sent ? '✓ Opening WhatsApp...' : 'Send via WhatsApp'}
                    {!sent && <Send size={15} />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}