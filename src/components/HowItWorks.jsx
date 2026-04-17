export default function HowItWorks() {
  return (
    <div>
      <div className="section-wrap">
        <p className="label">How It Works</p>
        <h2 className="section-title">
          <strong>From zero to builder.</strong><br />
          <span className="gray">Here's how ARC works.</span>
        </h2>

        <div className="how-grid">

          <div className="how-img-wrap">
            <div className="how-img" />

            {/* Overlays on image */}
            <div className="how-overlay how-overlay--tl">
              <div className="how-overlay-dot" />
              <span>47 members attending</span>
            </div>

            <div className="how-overlay how-overlay--br">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              <span>Project submitted</span>
            </div>
          </div>

          {/* Steps */}
          <div className="how-steps">
            <div className="how-step">
              <div className="step-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 9h8M8 13h5" />
                </svg>
              </div>
              <div className="step-body">
                <h4>1. Join</h4>
                <p>Sign up and become part of Amsterdam's first open robotics community. Students, engineers, researchers, everyone is welcome.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <div className="step-body">
                <h4>2. Show up</h4>
                <p>Come to events, workshops, and hackathons. Meet the people building physical AI in the Netherlands and across Europe.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="step-body">
                <h4>3. Build</h4>
                <p>Join a project team, enter a competition, or pitch your own idea. ARC gives you the people, the space, and the network to make it real.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
