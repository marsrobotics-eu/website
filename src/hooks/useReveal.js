import { useEffect } from 'react'

/**
 * useReveal — attaches an IntersectionObserver to all `.reveal` elements.
 * When an element enters the viewport it gets the `visible` class,
 * triggering the fade-up CSS transition defined in index.css.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)   // fire once
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
