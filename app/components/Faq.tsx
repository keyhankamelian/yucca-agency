'use client';

import { useState } from 'react';
import Reveal from './Reveal';

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: 'How long before I see leads?',
    a: 'Most campaigns start producing inside the first two weeks. The first 30 days are partly the platform learning who your buyer is, so expect it to get cheaper over time, not worse. You get a report every week, so you watch it happen instead of waiting.',
  },
  {
    q: 'What do I actually have to do?',
    a: 'Film a few clips on your phone. We tell you exactly what to shoot, then we edit, launch, and manage everything else. Plan on an hour or two in the first month, and less after that.',
  },
  {
    q: 'How much do I need for ad spend?',
    a: "Budget at least $500 a month for the ads themselves, on top of our fee. That is paid straight to the platforms, not to us. We'll model your real numbers on the strategy call before you commit to anything.",
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No. Month to month, always. Your ad account stays in your name and you keep everything we build in it, so if you leave, you leave with it.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="faq">
      {ITEMS.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <Reveal
            key={item.q}
            className={`faq-item${isOpen ? ' is-open' : ''}`}
            delayMs={i * 70}
          >
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon" aria-hidden="true" />
            </button>
            <div className="faq-panel" id={`faq-panel-${i}`} role="region">
              <div className="faq-panel-inner">
                <p className="faq-a">{item.a}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
