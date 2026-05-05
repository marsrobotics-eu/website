const founders = [
  { name: 'Karina', role: 'AI Engineer & Robotics Enthusiast', image: '/assets/images/karina.jpg' },
  { name: 'Amina',  role: 'AI Engineer & Robotics Enthusiast', image: '/assets/images/amina.jpeg' },
  { name: 'Artem',  role: 'AI Engineer & Robotics Enthusiast', image: '/assets/images/artem.jpeg' },
]

export default function Team() {
  return (
    <div id="team">
      <div className="section-wrap">
        <p className="label reveal">MEET THE TEAM</p>
        <h2 className="section-title reveal reveal-delay-1">
          <strong>The people</strong>
          <span className="gray"> behind MARS.</span>
        </h2>

        <div className="team-row">
          {founders.map((f) => (
            <div className="team-card reveal" key={f.name}>
              <div className="team-avatar">
                <img src={f.image} alt={f.name} />
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
