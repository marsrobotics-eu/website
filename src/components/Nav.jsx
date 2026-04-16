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
          <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="white" />
          <path d="M19 15L19.9 17.6L22.5 18.5L19.9 19.4L19 22L18.1 19.4L15.5 18.5L18.1 17.6L19 15Z" fill="white" opacity="0.6" />
          <path d="M5 3L5.7 5L7.5 5.7L5.7 6.4L5 8.5L4.3 6.4L2.5 5.7L4.3 5L5 3Z" fill="white" opacity="0.6" />
        </svg>

        {/* "ARC" always visible */}
        <span className="logo-short">ARC</span>

        {/* " — Amsterdam Robotics Collective" slides in on scroll */}
        <span className={`logo-full${scrolled ? ' logo-full--visible' : ''}`}>
          &nbsp;Amsterdam Robotics Collective
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
