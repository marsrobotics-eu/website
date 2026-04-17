const SparkLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="white" />
    <path d="M19 15L19.9 17.6L22.5 18.5L19.9 19.4L19 22L18.1 19.4L15.5 18.5L18.1 17.6L19 15Z" fill="white" opacity="0.6" />
    <path d="M5 3L5.7 5L7.5 5.7L5.7 6.4L5 8.5L4.3 6.4L2.5 5.7L4.3 5L5 3Z" fill="white" opacity="0.6" />
  </svg>
)

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-brand">
          <a href="#" className="nav-logo">
            <SparkLogo />
            ARC
          </a>
          <p className="footer-tagline">
            Amsterdam Robotics Collective. Building things that move.
          </p>
          <div className="footer-socials">
            <div className="soc-icon" aria-label="X / Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="soc-icon" aria-label="GitHub">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <div className="soc-icon" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
          </div>
        </div>

        <nav className="footer-nav-col" aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>Created by</span>
        <div className="author-dot" />
        <span>Arthur in <strong>Framer</strong></span>
      </div>
    </footer>
  )
}
