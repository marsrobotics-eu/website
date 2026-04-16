import { useState } from 'react'

const leftFaqs = [
  {
    q: 'What is this AI platform designed for?',
    a: 'ARC is designed to be your intelligent companion for writing, productivity, and automation — helping you think clearer and work faster every day.',
  },
  {
    q: 'Do I need technical knowledge to use it?',
    a: 'Not at all. ARC is built for everyone — just type naturally and the AI handles the rest. No coding or technical expertise required.',
  },
  {
    q: 'Which AI models power the tool?',
    a: 'Message uses state-of-the-art language models optimized for speed, accuracy, and contextual understanding across all use cases.',
  },
]

const rightFaqs = [
  {
    q: 'Is there a free plan available?',
    a: 'Yes! Our Starter plan is free forever with 50 messages per month and access to core features to get you started right away.',
  },
  {
    q: 'Can I use this for business purposes?',
    a: 'Absolutely. Our Pro and Team plans are designed for professional and business use, with advanced features and priority support.',
  },
  {
    q: 'How can I get support if I have issues?',
    a: 'You can reach our support team via the in-app chat, email, or our community forum. Pro and Team members get priority response times.',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-plus" aria-hidden="true">+</span>
      </div>
      <div className="faq-a">{a}</div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div id="faq">
      <div className="section-wrap">
        <p className="label">FAQ</p>
        <h2 className="section-title">
          <strong>Your questions,</strong>
          <span className="gray"> answered with clarity</span>
        </h2>

        <div className="faq-cols">
          <div>
            {leftFaqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div>
            {rightFaqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
