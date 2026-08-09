import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import StickyCta from '../components/StickyCta';

export const metadata: Metadata = {
  title: 'About - Yucca Agency',
};

export default function About() {
  return (
    <>
      <Nav />

      <section>
        <div className="wrap about-grid">
          <Reveal className="about-photo">
            <img src="/founder.jpg" alt="Keyhan, founder of Yucca Agency" />
          </Reveal>
          <Reveal className="about-copy" delayMs={90}>
            <div className="sec-eyebrow">About Yucca</div>
            <h2>Why Yucca and why now</h2>
            <p className="about-text">
              I&apos;m Keyhan, founder of Yucca Agency.
            </p>
            <p className="about-text">
              I&apos;ve spent six years running paid ad campaigns for small and
              medium-sized businesses, managing budgets, writing creative,
              optimizing funnels, and turning ad spend into measurable
              revenue.
            </p>
            <p className="about-text">
              Today Yucca works with service businesses: dentists,
              med spas, chiropractors, acupuncturists, fitness studios,
              coaches, salons, and law firms. They all sell the same thing, a
              slot on a calendar, which means the same playbook gets sharper
              with every client we run it for.
            </p>
            <p className="about-text">
              The principle behind it hasn&apos;t changed: deliver the kind of
              campaigns big agencies charge a fortune for, at a price that
              actually makes sense for independent businesses, combined with
              an eye for creative and brand most agencies never bring to the
              table. We work with a small number of clients at a time, one per
              market, so the strategy we build stays yours.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
