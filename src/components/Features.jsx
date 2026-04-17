export default function Features() {
  return (
    <div id="features">
      <div className="section-wrap">
        <p className="label reveal">Introducing Amsterdam Robotics Collective</p>
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
            </div>
            <h3>Build</h3>
            <p>Hands-on hackathons, build weeks, and real hardware projects. We make things that move.</p>
          </article>

          {/* Card 2 — Learn */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div className="feat-img-bg" style={{ backgroundImage: "url('/assets/images/learn.png')", backgroundPosition: 'center 50%' }} />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.25)' }} />
            </div>
            <h3>Learn</h3>
            <p>Keynotes, workshops, and demos from researchers, engineers, and founders at the frontier of physical AI and robotics.</p>
          </article>

          {/* Card 3 — Compete */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div className="feat-img-bg" style={{ backgroundImage: "url('/assets/images/compete.png')", backgroundPosition: 'center 50%' }} />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.25)' }} />
            </div>
            <h3>Compete</h3>
            <p>Robotics competitions and challenges that push your skills and connect you to the best builders in Europe.</p>
          </article>

        </div>
      </div>
    </div>
  )
}
