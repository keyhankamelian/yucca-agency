'use client';

import { useEffect, useState } from 'react';

/**
 * Mobile-only persistent CTA. On a phone the nav's inline links are collapsed
 * and the next in-page CTA is several screens down, so once the hero scrolls
 * away there is nothing to tap until the form. This fills that gap.
 *
 * Hidden while the hero is visible (the hero has its own button) and again
 * once the form or footer is reached (the real CTA is right there, and the bar
 * would otherwise cover the footer).
 */
export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const consult = document.getElementById('consult');
    const footer = document.querySelector('footer');

    const observers: IntersectionObserver[] = [];

    if (hero) {
      const io = new IntersectionObserver(
        ([e]) => setPastHero(!e.isIntersecting),
        { threshold: 0 }
      );
      io.observe(hero);
      observers.push(io);
    } else {
      // Inner pages have no hero and no inline CTA, so show straight away.
      setPastHero(true);
    }

    // Either the form or the footer being on screen means "we're at the end".
    const endEls = [consult, footer].filter(Boolean) as Element[];
    if (endEls.length) {
      const seen = new Set<Element>();
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) seen.add(e.target);
            else seen.delete(e.target);
          });
          setAtEnd(seen.size > 0);
        },
        { threshold: 0 }
      );
      endEls.forEach((el) => io.observe(el));
      observers.push(io);
    }

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const visible = pastHero && !atEnd;

  return (
    <div className={`sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      {/* Root-relative so it resolves from /about and /pricing too. */}
      <a href="/#consult" className="btn btn-primary" tabIndex={visible ? 0 : -1}>
        Get my free strategy session →
      </a>
    </div>
  );
}
