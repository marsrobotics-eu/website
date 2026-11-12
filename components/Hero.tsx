'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  /* scroll parallax — background only */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      {/* SVG filter for horizontal-only motion blur on the ghost layer */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="h-blur" x="-50%" width="200%">
            <feGaussianBlur stdDeviation="6 0" />
          </filter>
        </defs>
      </svg>

      <div className="hero-bg" ref={bgRef} />

      <div className="hero-content">
        <h1>
          We build things<br />
          that <span className="word-move" data-word="move.">move.</span>
        </h1>
        <p>
          An open builder community for students, researchers, engineers, and makers.<br />
          Building Amsterdam's robotics layer.
        </p>
        <a href="#" className="pill">Join the Collective</a>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <svg width="13" height="19" viewBox="0 0 13 19" fill="none">
          <rect x="0.75" y="0.75" width="11.5" height="17.5" rx="5.75"
            stroke="currentColor" strokeWidth="1.2" />
          <line x1="6.5" y1="5" x2="6.5" y2="8"
            stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Scroll to explore
      </div>
    </section>
  )
}
