import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`main-nav${scrolled ? ' main-nav--scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <svg
          className="nav-spark"
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="6.5" fill="#d95f33" />
          <path d="M12 12V5.5M12 5.5h3.5" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
        </svg>

        {/* "MARS" always visible */}
        <span className="logo-short">MARS</span>

        {/* " — Makers And Robotics Society, Amsterdam" slides in on scroll */}
        <span className={`logo-full${scrolled ? ' logo-full--visible' : ''}`}>
          &nbsp;Makers And Robotics Society, Amsterdam
        </span>
      </a>

      <ul className="nav-links">
        <li><a href="#about"        onClick={(e) => scrollTo(e, 'about')}>About</a></li>
        <li><a href="#features"     onClick={(e) => scrollTo(e, 'features')}>What We Do</a></li>
        <li><a href="#testimonials" onClick={(e) => scrollTo(e, 'testimonials')}>Events</a></li>
        <li><a href="#pricing"      onClick={(e) => scrollTo(e, 'pricing')}>Join Us</a></li>
        <li><a href="#faq"          onClick={(e) => scrollTo(e, 'faq')}>Contact</a></li>
      </ul>

      <a href="#" className="nav-cta">Join the Collective</a>

      <div className="hamburger" aria-label="Menu">
        <span /><span /><span />
      </div>
    </nav>
  )
}
