const plans = [
  {
    tier: 'Starter',
    amount: 'Free',
    period: 'Forever',
    features: ['50 messages per month', 'Basic automations', '1 workspace', 'Community support'],
    featured: false,
  },
  {
    tier: 'Pro',
    amount: '$19',
    amountSub: '/mo',
    period: 'Billed monthly',
    features: ['Unlimited messages', 'Advanced automations', '5 workspaces', 'Priority support'],
    featured: true,
  },
  {
    tier: 'Team',
    amount: '$49',
    amountSub: '/mo',
    period: 'Per team',
    features: ['Everything in Pro', 'Up to 10 members', 'Team analytics', 'Dedicated support'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <div id="pricing">
      <div className="section-wrap">
        <p className="label">Pricing</p>
        <h2 className="section-title">
          <strong>Simple pricing,</strong>
          <span className="gray"> powerful results.</span>
        </h2>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`pricing-card${plan.featured ? ' featured' : ''}`} key={plan.tier}>
              <p className="price-tier">{plan.tier}</p>
              <div className="price-amount">
                {plan.amountSub ? (
                  <>
                    <sup>$</sup>{plan.amount.replace('$', '')}<small>{plan.amountSub}</small>
                  </>
                ) : plan.amount}
              </div>
              <p className="price-period">{plan.period}</p>
              <hr className="price-divider" />
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#"
                className={plan.featured ? 'pill pill-dark' : 'pill'}
                style={{ fontSize: '13px', padding: '10px 22px', display: 'block', textAlign: 'center' }}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
