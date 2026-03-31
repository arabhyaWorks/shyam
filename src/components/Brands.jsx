import { useInView } from 'react-intersection-observer'

const brands = [
  {
    name: 'Apollo Tyres',
    category: 'Tyres',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/RGB_LOGO_APOLLO_TYRES_COMPACT_POS_GTD.jpg',
  },
  {
    name: 'MRF',
    category: 'Tyres',
    logo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyz60qnTRWhmhxXO2S93FxufAqJ1-ddlVxdaRLs-zk3PTBpwQdkN1RJleBtfCnr68YubGdW353Fpm6ldsqquNg9g2rjZ2mr6p-H2bXSoQO6XK97Rl8Y7Ac1gI8aREIRj2PEd7hTtqV2KPe/w1200-h630-p-k-no-nu/asd.jpg',
  },
  {
    name: 'CEAT',
    category: 'Tyres',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CEAT_Logo.svg/960px-CEAT_Logo.svg.png',
  },
  {
    name: 'JK Tyre',
    category: 'Tyres',
    logo: 'https://car-logos.b-cdn.net/wp-content/uploads/2023/04/jk-tyre-logo-present-scaled.webp',
  },

  {
    name: 'Exide',
    category: 'Power',
    logo: 'https://docs.exideindustries.com/pdf/logo-png-hi-resolution.png',
  },
  {
    name: 'Amaron',
    category: 'Power',
    logo: 'https://amaron-beta-images.s3.ap-south-1.amazonaws.com/s3fs-public/Documents/PNG_0.png',
  },
  {
    name: 'Luminous',
    category: 'Power',
    logo: 'https://storage.googleapis.com/pitchonnet-news-photo/news-photo/34736.New-Project---2024-04-18T201527.119.jpg',
  },
  {
    name: 'Microtek',
    category: 'Power',
    logo: 'https://m.media-amazon.com/images/I/41smiHnamSL._AC_UF894,1000_QL80_.jpg',
  },

  {
    name: 'Crompton',
    category: 'Cooling',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Crompton_Greaves_Logo.png',
  },
  {
    name: 'Bajaj',
    category: 'Cooling',
    logo: 'https://vectorseek.com/wp-content/uploads/2023/10/Bajaj-Opem-New-Life-Logo-Vector.svg-.png',
  },
  {
    name: 'Orient Electric',
    category: 'Cooling',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Orient_Electric_logo.svg/3840px-Orient_Electric_logo.svg.png',
  },
  {
    name: 'Havells',
    category: 'Cooling',
    logo: 'https://www.red-dot.org/fileadmin/_processed_/6/f/csm_15-DP04811-2023BC.1003793_CO_5e3c2bf444.jpg',
  },

  {
    name: 'Prestige',
    category: 'Kitchen',
    logo: 'https://upload.wikimedia.org/wikipedia/en/7/7b/TTK_Prestige.svg',
  },
  {
    name: 'Butterfly',
    category: 'Kitchen',
    logo: 'https://blog.leveragedgrowth.in/wp-content/uploads/2023/01/Picture1-1.png',
  },

  {
    name: 'Philips',
    category: 'Lighting',
    logo: 'https://1000logos.net/wp-content/uploads/2017/05/Phillips-Logo-2008.png',
  },
  {
    name: 'Syska',
    category: 'Lighting & Safety',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/greenelectric-dev/media/0918aa8b-cf46-4fc1-991b-8aab563efcb6/syska.png',
  },
]

const categoryColors = {
  Tyres: '#1B2B5E',
  Power: '#C8860A',
  Cooling: '#0097A7',
  Kitchen: '#E8720C',
  Lighting: '#4CAF50',
  'Lighting & Safety': '#4CAF50',
}

export default function BrandsSupplied() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#FFFDF8] to-[#FAFBFF] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-[#F4C66A]/10 blur-3xl" />
        <div className="absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-[#1B2B5E]/[0.05] blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0097A7]/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className={`mx-auto mb-14 max-w-3xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-4 inline-flex items-center rounded-full border border-[#E7D7B0] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C8860A] shadow-sm">
            Trusted Brand Network
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#1B2B5E] md:text-5xl">
            Products Backed by
            <span className="bg-gradient-to-r from-[#D18A00] via-[#E8A11A] to-[#C8860A] bg-clip-text text-transparent">
              {' '}Leading Brands
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            We help our partners stock trusted brands across tyres, power backup,
            cooling, kitchen appliances, and lighting & safety categories —
            giving customers confidence and retailers better sell-through.
          </p>
        </div>

        <div
          className={`rounded-[32px] border border-white/70 bg-white/85 p-5 shadow-[0_30px_80px_rgba(16,24,40,0.10)] backdrop-blur-sm transition-all duration-1000 ${
            inView ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[0.98] opacity-0'
          }`}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#EEF2F7] bg-[#FCFCFD] px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-[#1B2B5E]">
                Multi-category sourcing for franchise partners
              </p>
              <p className="text-xs text-slate-500">
                Brand availability may vary by product line, stock cycle, and region
              </p>
            </div>

            <div className="rounded-full bg-[#1B2B5E]/6 px-3 py-1 text-xs font-medium text-[#1B2B5E]">
              15+ Trusted Brands
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map(({ name, category, logo }, i) => (
              <div
                key={name}
                className={`group rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full shadow-sm"
                    style={{ backgroundColor: categoryColors[category] || '#1B2B5E' }}
                  />
                  <div
                    className="h-px flex-1"
                    style={{
                      background: `linear-gradient(to right, ${(categoryColors[category] || '#1B2B5E')}55, transparent)`,
                    }}
                  />
                </div>

                <div className="flex min-h-[96px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-4 py-5">
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-12 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mt-4 text-center">
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      color: categoryColors[category] || '#1B2B5E',
                      backgroundColor: `${categoryColors[category] || '#1B2B5E'}12`,
                    }}
                  >
                    {category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-10 text-center transition-all duration-700 delay-300 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="mx-auto max-w-3xl text-sm leading-7 text-slate-500 md:text-base">
            From high-demand retail essentials to trusted household and automotive products,
            we help our partners build stores that customers recognize, trust, and return to.
          </p>
        </div>
      </div>
    </section>
  )
}