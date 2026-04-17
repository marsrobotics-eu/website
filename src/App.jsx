import { useEffect } from 'react'
import Nav        from './components/Nav.jsx'
import Hero       from './components/Hero.jsx'
import Features   from './components/Features.jsx'
import UseCases   from './components/UseCases.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About      from './components/About.jsx'
import Team       from './components/Team.jsx'
import Benefits   from './components/Benefits.jsx'
import FAQ        from './components/FAQ.jsx'
import CTABanner  from './components/CTABanner.jsx'
import Footer     from './components/Footer.jsx'
import useReveal  from './hooks/useReveal.js'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <UseCases />
      <HowItWorks />
      <About />
      <Team />
      <Benefits />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  )
}
