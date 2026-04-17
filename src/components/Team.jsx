const founders = [
  { name: 'Karina', role: 'AI Engineer & Robotics Enthusiast' },
  { name: 'Amina',  role: 'AI Engineer & Robotics Enthusiast' },
  { name: 'Artem',  role: 'AI Engineer & Robotics Enthusiast' },
]

function ProfileIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#1e1e1e" />
      <circle cx="32" cy="26" r="10" fill="#2e2e2e" />
      <path d="M12 54c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="#2e2e2e" />
    </svg>
  )
}

export default function Team() {
  return (
    <div id="team">
      <div className="section-wrap">
        <p className="label reveal">MEET THE TEAM</p>
        <h2 className="section-title reveal reveal-delay-1">
          <strong>The people</strong>
          <span className="gray"> behind ARC.</span>
        </h2>

        <div className="team-row">
          {founders.map((f) => (
            <div className="team-card reveal" key={f.name}>
              <div className="team-avatar">
                <ProfileIcon />
              </div>
              <div className="team-name">{f.name}</div>
              <div className="team-role">{f.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
