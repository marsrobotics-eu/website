import { useEffect } from 'react'
import Nav          from './components/Nav.jsx'
import Hero         from './components/Hero.jsx'
import Features     from './components/Features.jsx'
import UseCases     from './components/UseCases.jsx'
import HowItWorks   from './components/HowItWorks.jsx'
import Benefits     from './components/Benefits.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing      from './components/Pricing.jsx'
import FAQ          from './components/FAQ.jsx'
import CTABanner    from './components/CTABanner.jsx'
import Footer       from './components/Footer.jsx'
import useReveal    from './hooks/useReveal.js'

export default function App() {
  useReveal()   // wires up scroll-entrance animations site-wide

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}
