'use client';

import { useEffect, useState } from 'react';

const WORDS = [
  'gyms',
  'dentists',
  'lawyers',
  'contractors',
  'beauty salons',
  'spas',
  'accountants',
  'freelancers',
  'brands',
  'e-commerce',
  'restaurants',
  'musicians',
  'labels',
  'cafes',
  'small businesses',
  'painters',
  'creators',
  'artists',
  'mobile detailing',
  'real estate agents',
  'med spas',
  'photographers',
  'chiropractors',
  'barbershops',
  'coaches',
  'interior designers',
  'auto shops',
];

const TYPE_MS = 45;
const DELETE_MS = 28;
const HOLD_MS = 2400;

export default function RotatingAudience() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Reduced motion: swap whole words on a timer, no letter-by-letter typing.
  useEffect(() => {
    if (!reducedMotion) return;
    setText(WORDS[wordIndex]);
    const t = setTimeout(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [reducedMotion, wordIndex]);

  // Full motion: type in, hold, delete, move to next word.
  useEffect(() => {
    if (reducedMotion) return;
    const word = WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < word.length) {
        timeout = setTimeout(
          () => setText(word.slice(0, text.length + 1)),
          TYPE_MS
        );
      } else {
        timeout = setTimeout(() => setPhase('deleting'), HOLD_MS);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(word.slice(0, text.length - 1)),
          DELETE_MS
        );
      } else {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setPhase('typing');
        return;
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, reducedMotion]);

  return (
    <p className="audience-line">
      <span aria-hidden="true">
        For <span className="audience-word">{text}</span>
        <span className="audience-cursor" />
      </span>
      <span className="sr-only">For {WORDS.join(', ')}</span>
    </p>
  );
}
