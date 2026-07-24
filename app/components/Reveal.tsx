'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  /**
   * Applied alongside the reveal classes so this element can *be* the grid or
   * flex child instead of wrapping one (wrapping would break .svc-grid etc).
   */
  className?: string;
  delayMs?: number;
  id?: string;
};

export default function Reveal({
  children,
  className = '',
  delayMs = 0,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    // Already in view at mount (above the fold, short page, or a tab that was
    // loaded in the background): reveal straight away. IntersectionObserver is
    // suspended while a tab is hidden, so waiting on it can leave this content
    // stuck at opacity:0 until the user scrolls.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={['reveal', visible ? 'is-visible' : '', className]
        .filter(Boolean)
        .join(' ')}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
