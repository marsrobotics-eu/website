const testimonials = [
  {
    quote: '"MARS transformed how I write. Ideas that used to take hours now take minutes. It feels like having a co-writer who never sleeps."',
    name: 'Sarah K.',
    role: 'Content Strategist',
    avatarBg: '#253040',
  },
  {
    quote: '"The automation features alone saved me three hours a day. I finally feel in control of my workflow rather than buried under it."',
    name: 'James R.',
    role: 'Product Manager',
    avatarBg: '#253530',
  },
  {
    quote: '"I was skeptical about AI tools, but MARS feels different. It\'s subtle, intelligent, and always right there when I need it most."',
    name: 'Mia T.',
    role: 'Freelance Writer',
    avatarBg: '#302538',
  },
]

export default function Testimonials() {
  return (
    <div id="testimonials">
      <div className="section-wrap">
        <p className="label">Testimonials</p>
        <h2 className="section-title">
          <strong>Loved by those who</strong>
          <span className="gray"> think differently.</span>
        </h2>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card" key={t.name}>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.avatarBg }} />
                <div>
                  <p className="testi-name">{t.name}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
