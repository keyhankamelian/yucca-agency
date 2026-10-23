import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import StickyCta from '../components/StickyCta';
import PageHero from '../components/PageHero';
import SidePlant from '../components/SidePlant';

export const metadata: Metadata = {
  title: 'Case Studies - Yucca Agency',
  description:
    'How a bathroom remodeler near Downtown LA turned $1,750 in ad spend into $60,000 in signed jobs in 30 days.',
};

const FUNNEL = [
  { label: 'Leads', value: 30, note: '30' },
  { label: 'Estimates booked', value: 10, note: '10 · 33% of leads' },
  { label: 'Jobs signed', value: 3, note: '3 · 30% of estimates' },
];

const NUMBERS: [string, string][] = [
  ['Period', '30 days'],
  ['Ad spend', '$1,750'],
  ['Leads', '30'],
  ['Cost per lead', '$58.33'],
  ['Estimate appointments booked', '10'],
  ['Cost per booked estimate', '$175'],
  ['Jobs signed', '3'],
  ['Cost per signed job', '$583'],
  ['Average job value', '~$20,000'],
  ['Revenue from signed jobs', '$60,000'],
  ['Return on ad spend', '34x'],
];

export default function CaseStudies() {
  return (
    <>
      <Nav />

      <PageHero
        eyebrow="Case study · Bathroom remodeling · Near Downtown LA"
        title="$60,000 in signed jobs from $1,750 in ad spend."
      >
        <p className="hero-sub">
          A bathroom remodeling contractor near Downtown LA wanted more booked
          estimates with homeowners ready to remodel. Here is what the first
          30 days produced.
        </p>
      </PageHero>

      <div className="wrap hero-stats">
        <div className="stats stats--4">
          <div className="stat">
            <div className="stat-n">10</div>
            <div className="stat-l">Estimate appointments booked in 30 days.</div>
          </div>
          <div className="stat">
            <div className="stat-n">3</div>
            <div className="stat-l">Jobs signed, averaging about $20,000.</div>
          </div>
          <div className="stat">
            <div className="stat-n">$583</div>
            <div className="stat-l">Cost per signed job.</div>
          </div>
          <div className="stat">
            <div className="stat-n">34x</div>
            <div className="stat-l">Return on $1,750 in ad spend.</div>
          </div>
        </div>
      </div>

      <section className="sec-center">
        <SidePlant plant="bloom" side="left" />
        <div className="wrap">
          <div className="sec-eyebrow">The funnel</div>
          <h2>From first click to signed job.</h2>
          <p className="sec-lede">
            One in three homeowners who reached out booked an estimate, and
            three of those estimates became signed bathroom remodels.
          </p>
          <div className="case-grid">
            <Reveal className="case-card">
              <h3>How it narrowed</h3>
              <div className="funnel">
                {FUNNEL.map((row) => (
                  <div className="funnel-row" key={row.label}>
                    <div className="funnel-label">{row.label}</div>
                    <div className="funnel-track">
                      <div
                        className="funnel-bar"
                        style={{ width: `${(row.value / FUNNEL[0].value) * 100}%` }}
                      />
                    </div>
                    <div className="funnel-note">{row.note}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="case-card" delayMs={80}>
              <h3>Every number</h3>
              <table className="case-table">
                <tbody>
                  {NUMBERS.map(([k, v]) => (
                    <tr key={k}>
                      <td>{k}</td>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
          <p className="case-note">
            Client name withheld for privacy. Results vary by business and
            market.{' '}
            <a href="/case-studies/bathroom-remodel-near-downtown-la.pdf">
              Download the one-page PDF
            </a>
            .
          </p>
        </div>
      </section>

      <section className="sec-center">
        <SidePlant plant="joshua" side="right" />
        <div className="wrap">
          <div className="sec-eyebrow">The system</div>
          <h2>What runs behind results like these.</h2>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>An offer worth booking</h3>
              <p>
                A specific, high-value offer built for homeowners planning a
                bathroom remodel, not another &quot;free estimate.&quot;
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <div className="ix">02</div>
              <h3>Ads from one recording session</h3>
              <p>
                The contractor records once from our shot guide and script. We
                turn it into ads that show real craftsmanship.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <div className="ix">03</div>
              <h3>A page that matches the ad</h3>
              <p>
                The ad, the offer, and the landing page say the same thing, so
                the right homeowners raise their hand.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={210}>
              <div className="ix">04</div>
              <h3>Fast, human follow-up</h3>
              <p>
                Every homeowner hears from us quickly, gets qualified, and is
                booked as an estimate appointment on the calendar.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="wrap final-cta">
          <div className="sec-eyebrow">Your market</div>
          <h2>Want results like these in your area?</h2>
          <p className="sec-lede">
            We work with one remodeler per market, because we don&apos;t want
            to compete against ourselves. Apply to see whether your territory
            is still open.
          </p>
          <a href="/contact" className="btn btn-primary">
            Check if your territory is available →
          </a>
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
