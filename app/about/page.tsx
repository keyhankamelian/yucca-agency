import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'About — Yucca Agency',
};

export default function About() {
  return (
    <>
      <Nav />

      <section>
        <div className="wrap about-grid">
          <div className="about-photo">
            <img src="/founder.jpg" alt="Keyhan, founder of Yucca Agency" />
          </div>
          <div className="about-copy">
            <div className="sec-eyebrow">Who&apos;s behind this</div>
            <h2>Why Yucca and why now</h2>
            <p className="about-text">
              I&apos;m Keyhan, founder of Yucca Agency.
            </p>
            <p className="about-text">
              I&apos;ve spent six years running paid ad campaigns for small
              and medium-sized businesses, managing budgets, writing
              creative, optimizing funnels, and turning ad spend into
              measurable revenue across local service businesses,
              e-commerce brands, and entertainment.
            </p>
            <p className="about-text">
              Yucca is built around one principle: deliver the kind of
              campaigns big agencies charge a fortune for, at a price that
              actually makes sense for independent businesses, combined
              with an eye for creative and brand most agencies never bring
              to the table. We work with a small number of clients at a
              time, one per market, so the strategy we build stays yours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
