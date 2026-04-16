export default function HowItWorks() {
  return (
    <div>
      <div className="section-wrap">
        <p className="label">How It Works</p>
        <h2 className="section-title">
          <strong>One prompt to begin,</strong><br />
          <span className="gray">three steps to clarity.</span>
        </h2>

        <div className="how-grid">

          {/* Chat interface mockup */}
          <div className="how-img-wrap">
            <div className="chat-input-box">
              <p className="chat-placeholder">How can we help you?</p>
              <div className="chat-input-row">
                <div className="chat-input-left">
                  <div className="lib-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    Library
                  </div>
                  <div className="chat-input-icons" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                </div>
                <div className="send-btn">Send message</div>
              </div>
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
                <h4>1 — Call</h4>
                <p>Type or speak your request, a thought, a task, a question.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
              <div className="step-body">
                <h4>2 — Awaken</h4>
                <p>The assistant weaves the answer, shaping text or insight in seconds.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="step-body">
                <h4>3 — Embrace</h4>
                <p>Take what appears — refine it, use it, and move forward with ease.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
