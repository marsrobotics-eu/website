'use client'

import { useState } from 'react'

const leftFaqs = [
  {
    q: 'What is MARS?',
    a: 'Makers And Robotics Society, Amsterdam is an open builder community for students, researchers, engineers, professionals, and makers based in Amsterdam. We organise project teams, workshops, reading groups, and competition teams.',
  },
  {
    q: 'Do I need to be a student to join?',
    a: 'No. MARS is open to students, PhD researchers, professionals, industry engineers, and makers. The only requirement is that you\'re genuinely interested in building robotics.',
  },
  {
    q: 'What universities are you connected to?',
    a: 'We have founding members from VU Amsterdam and UvA, and we\'re building cross-institutional links across UvA, VU, AUAS, industry, and the wider Dutch robotics ecosystem.',
  },
]

const rightFaqs = [
  {
    q: 'When is the first event?',
    a: 'We\'re planning our first keynote event for mid-2026. Sign up to be notified and to get early access.',
  },
  {
    q: 'How can my company get involved?',
    a: 'We\'re actively looking for founding sponsors and industry partners. If your company works in robotics or physical AI and wants access to Amsterdam\'s best builders, reach out to us directly.',
  },
  {
    q: 'How do I join?',
    a: 'Fill in the form on this page or reach out directly at karinakalicka@gmail.com. We\'ll be in touch.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
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
          <span className="gray"> answered.</span>
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
