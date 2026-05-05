import { useState } from 'react'

const tabs = ['Build', 'Learn', 'Compete', 'Connect']

function TabImage({ src, position = 'center' }) {
  return (
    <div className="tab-img-wrap">
      <div
        className="tab-img-inner"
        style={{ backgroundImage: `url('${src}')`, backgroundPosition: position }}
      />
    </div>
  )
}

function BuildPanel() {
  return (
    <div className="tab-panel active">
      <TabImage src="/assets/images/orange_robot5.png" position="center" />
      <div className="tab-text">
        <p className="tab-sublabel">HANDS-ON PROJECTS</p>
        <h3>Shared workspace, a hardware library, and project teams that ship real robots: drones, manipulators, and autonomous platforms. No slides-only culture.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>See upcoming builds</a>
      </div>
    </div>
  )
}

function LearnPanel() {
  return (
    <div className="tab-panel active">
      <TabImage src="/assets/images/orange_robot6.png" position="center" />
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
      <TabImage src="/assets/images/orange-robot1.png" position="center" />
      <div className="tab-text">
        <p className="tab-sublabel">COMPETITIONS</p>
        <h3>Travel teams for ESRA challenges, Eurobot, and RoboCup. MARS gives Amsterdam builders a path into serious European robotics competitions.</h3>
        <a href="#" className="pill" style={{ fontSize: '13px', padding: '10px 22px' }}>See competitions</a>
      </div>
    </div>
  )
}

function ConnectPanel() {
  return (
    <div className="tab-panel active">
      <TabImage src="/assets/images/orange_robot7.png" position="center" />
      <div className="tab-text">
        <p className="tab-sublabel">THE NETWORK</p>
        <h3>Students, PhD researchers, engineers, and founders in one room. MARS is open to everyone, not just students. The best ideas come from people who wouldn't normally meet.</h3>
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
          <span className="gray"> Four ways to get involved.</span>
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
