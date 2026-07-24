'use client';

import { useRef, useState } from 'react';
import CountUp from './CountUp';

type CaseFile = {
  id: string;
  tab: string;
  vert: string;
  value: number;
  decimals: number;
  currency?: boolean;
  suffix?: string;
  metric: string;
  vs: string;
  revenue: string;
};

const CASES: CaseFile[] = [
  {
    id: 'ortho',
    tab: 'Orthodontics',
    vert: 'Orthodontics · Los Angeles, CA · Meta Ads',
    value: 7.38,
    decimals: 2,
    currency: true,
    metric: 'cost per lead · 42 leads · 30 days (May 2026) · $310 spend',
    vs: 'industry avg ~$77 · ~90% lower',
    revenue: '$10,000+ in patient revenue generated',
  },
  {
    id: 'dealership',
    tab: 'Vehicle Dealership',
    vert: 'Vehicle Dealership · Anaheim, CA · Lead Gen',
    value: 2.2,
    decimals: 2,
    currency: true,
    metric: 'cost per customer lead · ~1,358 leads · 3 months (Feb–May 2026)',
    vs: 'high-intent buyer pipeline',
    revenue: '$2.5M+ in dealership revenue generated',
  },
  {
    id: 'contractor',
    tab: 'Contractor',
    vert: 'Contractor · West Covina, CA · Meta Ads',
    value: 4.3,
    decimals: 1,
    suffix: 'x',
    metric: 'return on ad spend · 32 leads · $750 spend · 1 month (April 2026)',
    vs: '≈$23 cost per lead',
    revenue: '≈$3,225 estimated revenue',
  },
];

export default function CaseFiles() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Roving tabindex: arrows move between tabs, matching the ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (active + 1) % CASES.length;
    else if (e.key === 'ArrowLeft')
      next = (active - 1 + CASES.length) % CASES.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = CASES.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const c = CASES[active];

  return (
    <div className="proof" id="proof">
      <div className="proof-head">
        <span>CASE FILES · THREE INDUSTRIES · REAL CAMPAIGNS</span>
        <span className="live">VERIFIED RESULTS</span>
      </div>

      <div
        className="case-tabs"
        role="tablist"
        aria-label="Case files by industry"
        onKeyDown={onKeyDown}
      >
        {CASES.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`case-tab-${item.id}`}
            aria-selected={i === active}
            aria-controls={`case-panel-${item.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`case-tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div className="proof-body">
        {/* key remounts the panel on switch, replaying the entrance animation
            and re-triggering the CountUp inside it. */}
        <div
          key={c.id}
          role="tabpanel"
          id={`case-panel-${c.id}`}
          aria-labelledby={`case-tab-${c.id}`}
          className="proof-cell case-panel"
        >
          <div className="proof-vert">{c.vert}</div>
          <div className="proof-number">
            {c.currency && <span className="cur">$</span>}
            <CountUp
              value={c.value}
              decimals={c.decimals}
              suffix={c.suffix}
              srPrefix={c.currency ? '$' : ''}
            />
          </div>
          <div className="proof-metric">{c.metric}</div>
          <div className="proof-vs">{c.vs}</div>
          <div className="proof-revenue">{c.revenue}</div>
        </div>
      </div>

      <div className="proof-foot">
        Real campaigns across real industries. Your numbers will differ.
        We&apos;ll model them on the call.
      </div>
    </div>
  );
}
