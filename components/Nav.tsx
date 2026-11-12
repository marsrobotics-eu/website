'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`main-nav${scrolled ? ' main-nav--scrolled' : ''}${menuOpen ? ' main-nav--open' : ''}`}>
      <a href="#" className="nav-logo">
        <img className="nav-spark" src="/assets/images/our_logo-removebg-preview.png" alt="" aria-hidden="true" />

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

      <button
        className="hamburger"
        type="button"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
