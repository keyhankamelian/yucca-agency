'use client';

import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  /** Prepended to the screen-reader text only (e.g. the "$" rendered separately). */
  srPrefix?: string;
  durationMs?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  value,
  decimals = 0,
  suffix = '',
  srPrefix = '',
  durationMs = 900,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSettled(true);
      return;
    }

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        setShown(value * easeOut(t));
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setSettled(true);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    // Already on screen (above the fold, or switched to via the case-file
    // tabs): run now rather than waiting on an observer, which stays suspended
    // while the tab is hidden and would leave the figure reading 0.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {(settled ? value : shown).toFixed(decimals)}
        {suffix}
      </span>
      <span className="sr-only">
        {srPrefix}
        {value.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}
