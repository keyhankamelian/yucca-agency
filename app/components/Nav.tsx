'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Services, About, and Pricing are all hidden for now, leaving the CTA as the
// only nav item. The About and Pricing pages still exist and resolve by URL;
// nothing links to them.
const LINKS: { href: string; label: string }[] = [];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Escape closes the panel, matching standard disclosure behaviour.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav>
      <div className="wrap nav-in">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <svg
            className="mark"
            viewBox="0 2.5 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#7A8B3F">
              <path d="M11.3 21 L12 8 L12.7 21 Z" />
              <path d="M11.3 21 L7 9 L12 20 Z" />
              <path d="M12.7 21 L17 9 L12 20 Z" />
              <path d="M11.5 21 L3.5 13 L12 20.5 Z" />
              <path d="M12.5 21 L20.5 13 L12 20.5 Z" />
            </g>
          </svg>
          Yucca
        </Link>
        <div className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <Link href="/#consult" className="nav-cta">
            Free strategy session
          </Link>
          {/* With no links to collapse, a hamburger would open to reveal only
              the CTA. Mobile keeps the hero button and sticky bar instead. */}
          {LINKS.length > 0 && (
            <button
              type="button"
              className={`nav-toggle${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls="nav-panel"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav-toggle-bars" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile only. Desktop keeps the inline links above. */}
      {LINKS.length > 0 && (
        <div id="nav-panel" className={`nav-panel${open ? ' is-open' : ''}`}>
          <div className="nav-panel-inner">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="/#consult"
              className="nav-panel-cta"
              onClick={() => setOpen(false)}
            >
              Free strategy session →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
