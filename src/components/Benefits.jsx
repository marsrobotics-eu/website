const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
      </svg>
    ),
    title: 'Real hardware access',
    body: 'Workshop space at Fablab Amsterdam, ZB45, and university labs. Build with actual components, not just simulations.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
    title: 'European network',
    body: 'Direct pipeline to ESRA: 13 clubs, 8 countries. Pan-European hackathons, shared resources, and cross-border collaboration.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Industry connections',
    body: 'Access to Amsterdam\'s 350+ robotics companies and SPRINT Robotics\' global network. Sponsors, mentors, and future employers.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Open to everyone',
    body: 'Not a study association. ARC connects students, PhDs, engineers, and founders. The best projects happen at the intersection.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.77-7.77 1.06-1.06a5.4 5.4 0 0 0-.41-7.82z" />
      </svg>
    ),
    title: 'Builder-first culture',
    body: 'We ship things. Every event, every hackathon, every build week ends with something real. No slides-only culture, ever.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Just getting started',
    body: 'ARC is in its founding stage, which means you get to shape what it becomes. Now is the time to be in the room.',
  },
]

export default function Benefits() {
  return (
    <div>
      <div className="section-wrap">
        <p className="label">WHY ARC</p>
        <h2 className="section-title" style={{ marginBottom: '40px' }}>
          <strong>Amsterdam has the ecosystem.</strong>
          <span className="gray"> ARC connects it.</span>
        </h2>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <div className="benefit-card" key={b.title}>
              <div className="benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
