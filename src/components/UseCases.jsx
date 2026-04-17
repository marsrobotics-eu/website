import { useState } from 'react'

const tabs = ['Build', 'Learn', 'Compete', 'Connect']

function BuildPanel() {
  return (
    <div className="tab-panel active">
      <div className="tab-img-wrap">
        <div
          className="tab-img-inner"
          style={{ backgroundImage: "url('/assets/images/bg2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.52)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-3.51" /></svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-text">
        <p className="tab-sublabel">HANDS-ON PROJECTS</p>
        <h3>Hackathons, build weeks, and hardware projects with real deadlines and real shipping. No slides-only culture. We make things that move.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>See upcoming builds</a>
      </div>
    </div>
  )
}

function LearnPanel() {
  return (
    <div className="tab-panel active">
      <div className="tab-img-wrap">
        <div className="tab-img-inner" style={{ background: '#0e1218', display: 'flex', alignItems: 'center', padding: '28px' }}>
          <div className="code-block">
            <div className="code-comment">{'// ARC'}</div>
            <div className="code-body">
              <span className="code-kw">function</span> <span className="code-fn">optimize</span>(data) {'{'}<br />
              &nbsp;&nbsp;<span className="code-kw">const</span> result = data.<span className="code-fn">map</span>(x =&gt; x * 2);<br />
              &nbsp;&nbsp;<span className="code-kw">return</span> result.<span className="code-fn">filter</span>(Boolean);<br />
              {'}'}
            </div>
          </div>
        </div>
      </div>
      <div className="tab-text">
        <p className="tab-sublabel">KEYNOTES & WORKSHOPS</p>
        <h3>Talks and workshops from researchers, engineers, and founders at the frontier of physical AI and robotics. ROS2, simulation, world models, and what's actually being built in labs and startups right now.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>See upcoming events</a>
      </div>
    </div>
  )
}

function CompetePanel() {
  return (
    <div className="tab-panel active">
      <div className="tab-img-wrap">
        <div className="tab-img-inner" style={{ background: '#0e1218', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px', gap: '12px' }}>
          <div className="focus-card">
            <div className="focus-title">Research Summary</div>
            <div className="focus-note">Analyzing 47 sources across academic databases, news outlets, and industry reports...</div>
          </div>
          <div className="focus-card">
            <div className="focus-note">Key findings: AI productivity tools show a 34% increase in output quality when used consistently over 30 days.</div>
          </div>
        </div>
      </div>
      <div className="tab-text">
        <p className="tab-sublabel">COMPETITIONS</p>
        <h3>Robotics challenges that push your skills and connect you to the best builders in Europe. Our pipeline leads to ESRA pan-European competitions and events.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>See competitions</a>
      </div>
    </div>
  )
}

function ConnectPanel() {
  return (
    <div className="tab-panel active">
      <div className="tab-img-wrap">
        <div className="tab-img-inner" style={{ background: '#0e1218', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '28px', gap: '12px' }}>
          <div className="focus-card">
            <div className="focus-title">Focus Session: 25:00</div>
            <div className="progress-bar"><div className="progress-fill" /></div>
          </div>
          <div className="focus-card">
            <div className="focus-note">3 tasks completed today. Stay focused, 2 remaining. You're doing great.</div>
          </div>
        </div>
      </div>
      <div className="tab-text">
        <p className="tab-sublabel">THE NETWORK</p>
        <h3>Students, PhD researchers, engineers, and founders in one room. ARC is open to everyone, not just students. The best ideas come from people who wouldn't normally meet.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>Join the Collective</a>
      </div>
    </div>
  )
}

const panels = [BuildPanel, LearnPanel, CompetePanel, ConnectPanel]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const Panel = panels[active]

  return (
    <div id="about">
      <div className="section-wrap">
        <p className="label">WHAT WE DO</p>
        <h2 className="section-title">
          <strong>One community.</strong>
          <span className="gray"> Three ways to get involved.</span>
        </h2>

        <div className="tabs-bar" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`tab-btn${active === i ? ' active' : ''}`}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        <Panel />
      </div>
    </div>
  )
}
