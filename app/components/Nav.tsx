'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

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
          {LINKS.map((l) =>
            l.href === '/contact' ? (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ) : (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            )
          )}
          {/* Plain <a>: a full page load keeps the chat widget off /contact. */}
          <a href="/contact" className="nav-cta">
            Apply to work with us
          </a>
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
            {LINKS.map((l) =>
              l.href === '/contact' ? (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              )
            )}
            <a href="/contact" className="nav-panel-cta">
              Apply to work with us →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
