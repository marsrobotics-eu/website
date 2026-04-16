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

          {/* Card 1 — Time Unfolded */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div
                className="feat-img-bg"
                style={{ backgroundImage: "url('/assets/images/bg_final.png')", backgroundPosition: 'center 60%' }}
              />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.5)' }} />
              <div className="feat-ui">
                <div className="wf-trigger">8:00 AM Trigger</div>
                <div className="wf-step">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 13h4" />
                  </svg>
                  Fetch workout stats
                </div>
                <div className="wf-step">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z" fill="currentColor" opacity="0.7" />
                  </svg>
                  AI generates summary
                </div>
                <div className="wf-step">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                  </svg>
                  Send email
                </div>
              </div>
            </div>
            <h3>Build</h3>
            <p>Hands-on hackathons, build weeks, and real hardware projects. We make things that move.</p>
          </article>

          {/* Card 2 — Words That Flow */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div
                className="feat-img-bg"
                style={{ backgroundImage: "url('/assets/images/bg2.png')", backgroundPosition: 'center 50%' }}
              />
              <div className="feat-img-overlay" style={{ background: 'rgba(0,0,0,0.55)' }} />
              <div className="feat-ui" style={{ justifyContent: 'flex-start', paddingTop: '20px' }}>
                <div className="chat-wrap">
                  <div className="chat-header">
                    <div className="chat-avatar" />
                    <span className="chat-name">ARC</span>
                  </div>
                  <div className="chat-body">
                    <div className="intro-line">Here's a quick draft for your new blog post introduction:</div>
                    In today's fast-paced digital world, finding your unique voice is more important than ever. Whether
                    you're sharing stories, building your brand, or inspiring a community, the right words can turn simple
                    ideas into lasting impact.<br /><br />But writing doesn't have to be...
                  </div>
                  <div className="chat-actions" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" /></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
                  </div>
                </div>
              </div>
            </div>
            <h3>Learn</h3>
            <p>Keynotes, workshops, and demos from researchers, engineers, and founders at the frontier of physical AI and robotics.</p>
          </article>

          {/* Card 3 — A Silent Guide */}
          <article className="feat-card reveal">
            <div className="feat-img">
              <div
                className="feat-img-bg"
                style={{ backgroundImage: "url('/assets/images/bg_final1.png')", backgroundPosition: 'center 55%' }}
              />
              <div className="feat-img-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))' }} />
              <div className="feat-ui" style={{ justifyContent: 'flex-end', paddingBottom: '18px' }}>
                <div className="cap-wrap">
                  <div className="cap-row">
                    <div className="cap-row-inner">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z" fill="currentColor" opacity="0.6" />
                      </svg>
                      <span className="cap-label">Draft tomorrow's update in</span>
                    </div>
                    <span className="cap-badge">Unfold</span>
                  </div>
                  <div className="cap-row">
                    <div className="cap-row-inner">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                      </svg>
                      <span className="cap-label">Ready to turn thoughts</span>
                    </div>
                    <span className="cap-badge">Illuminate</span>
                  </div>
                  <div className="cap-last">
                    <div className="cap-question">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      <span className="cap-question-text">Would you like to capture this moment?</span>
                    </div>
                    <div className="cap-action">
                      <span className="cap-btn">Capture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3>Compete</h3>
            <p>Robotics competitions and challenges that push your skills and connect you to the best builders in Europe.</p>
          </article>

        </div>
      </div>
    </div>
  )
}
