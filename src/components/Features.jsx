export default function Features() {
  return (
    <div id="features">
      <div className="section-wrap">
        <p className="label reveal">Introducing Makers And Robotics Society, Amsterdam</p>
        <h2 className="section-title reveal reveal-delay-1">
          <strong>Building the machines that will define the next century.</strong>
          <span className="gray"> Starting in Amsterdam.</span>
        </h2>

        <div className="features-grid">

          {/* Card 1 — Build */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div className="feat-img-bg" style={{ backgroundImage: "url('/assets/images/build.png')", backgroundPosition: 'center 50%' }} />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.25)' }} />
              <div className="feat-chip feat-chip--tl">
                <span className="feat-chip-dot" />
                Project teams
              </div>
            </div>
            <h3>Build</h3>
            <p>Shared workspace, a hardware library, and project teams shipping real robots: drones, manipulators, and autonomous platforms.</p>
          </article>

          {/* Card 2 — Learn */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div className="feat-img-bg" style={{ backgroundImage: "url('/assets/images/learn.png')", backgroundPosition: 'center 50%' }} />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.25)' }} />
              <div className="feat-chip feat-chip--tl">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                84 members
              </div>
            </div>
            <h3>Learn</h3>
            <p>Keynotes, workshops, and demos from researchers, engineers, and founders at the frontier of physical AI and robotics.</p>
          </article>

          {/* Card 3 — Compete */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div className="feat-img-bg" style={{ backgroundImage: "url('/assets/images/compete.png')", backgroundPosition: 'center 50%' }} />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.25)' }} />
              <div className="feat-chip feat-chip--tl">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>
                European teams
              </div>
            </div>
            <h3>Compete</h3>
            <p>Travel teams for ESRA challenges, Eurobot, and RoboCup, giving Amsterdam builders a place in European robotics competitions.</p>
          </article>

        </div>
      </div>
    </div>
  )
}
