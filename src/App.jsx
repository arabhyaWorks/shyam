import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import AllProductsShowcase from './components/AllProductsShowcase'
import GrowthJourney from './components/GrowthJourney'
import Services from './components/Services'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import FranchiseSteps from './components/FranchiseSteps'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Brands from './components/Brands'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <AllProductsShowcase />
      <GrowthJourney />
      <Services />
      <Brands />
      <Stats />
      <Testimonials />
      <FranchiseSteps />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
