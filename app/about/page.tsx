import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import StickyCta from '../components/StickyCta';

export const metadata: Metadata = {
  title: 'About - Yucca Agency',
  description:
    'Yucca Agency builds done-for-you growth systems for home service companies, especially kitchen and bathroom remodelers.',
};

export default function About() {
  return (
    <>
      <Nav />

      <section>
        <div className="wrap">
          <div className="sec-eyebrow">About Yucca</div>
          <h1 className="page-h1">
            Most agencies hand you leads. We hand you booked estimates.
          </h1>
          <p className="sec-lede">
            Anyone can spend your money on ads and forward you a list of names.
            We built a system that reaches out to each lead right away, gets
            the estimate on the calendar, and keeps following up long after
            most teams would have stopped. The leads were never the valuable
            part. What happens after them is.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow">Why we built this</div>
          <h2>The leads were never the problem.</h2>
          <div className="about-prose">
            <p className="about-text">
              Over and over we saw home service companies pay for ads and see
              little for it. The leads weren&apos;t bad. They just went
              unanswered for hours, got a single text days later, or landed
              with a team that was sharp one day and stretched thin the next.
            </p>
            <p className="about-text">
              Slow replies, missed calls, and quotes that never got a second
              look. That isn&apos;t a lead problem. It&apos;s a process
              problem, and the gap between &quot;someone filled out the
              form&quot; and &quot;the job is booked&quot; is where most of the
              money quietly disappears.
            </p>
            <p className="about-text">
              Yucca exists to close that gap, the same way every time.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow">What sets us apart</div>
          <h2>Three things other agencies skip.</h2>
          <div className="svc-grid">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>We own the whole chain.</h3>
              <p>
                From the first ad or mailer a homeowner sees, to the text they
                get moments after they respond, to the follow-up that lands
                when they&apos;re finally ready. We don&apos;t hand you a lead
                and walk away.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={60}>
              <div className="ix">02</div>
              <h3>Your market is locked.</h3>
              <p>
                One company per trade, within 100 miles. We won&apos;t build
                your whole system and then run it for the competitor across
                town. The strategy is yours alone.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={120}>
              <div className="ix">03</div>
              <h3>Fast, never careless.</h3>
              <p>
                Every lead hears from us right away, and follow-up continues
                until there is a clear yes or no. Speed and consistency
                shouldn&apos;t mean sounding scripted, and we keep it that
                way.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow">Who we work with</div>
          <h2>Not every company is a fit, and that&apos;s fine.</h2>
          <div className="about-prose">
            <p className="about-text">
              We built this for remodelers who aren&apos;t trying to be the
              cheapest bid in town. If your pitch to homeowners opens with
              price, we&apos;re probably not the right match. We focus on
              kitchen and bathroom remodeling, where the work is high-ticket
              and the quality of the company decides the sale.
            </p>
          </div>
          <div className="fit fit--one">
            <Reveal className="fit-col fit-yes">
              <h3>Built for companies that</h3>
              <ul>
                <li>Charge above the average for their market.</li>
                <li>Win on craftsmanship and reputation, not the lowest bid.</li>
                <li>Want growth that doesn&apos;t depend on the owner doing it all.</li>
                <li>Prefer steady follow-up over a flood of unqualified leads.</li>
                <li>Are ready to let a system handle what used to eat their evenings.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-eyebrow">Our standard</div>
          <h2>Done for you doesn&apos;t mean hands off.</h2>
          <p className="sec-lede">
            Most agencies either drop raw leads in your inbox or set up an
            auto-responder customers can spot a mile away. We do neither. We
            stay on it every week.
          </p>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <h3>What we handle</h3>
              <ul>
                <li>An immediate text to every new lead</li>
                <li>Follow-up until a clear yes or no</li>
                <li>Getting estimates booked on your calendar</li>
              </ul>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <h3>What the system covers</h3>
              <ul>
                <li>Paid social ad campaigns</li>
                <li>Funnel and landing page build and optimization</li>
                <li>Mailers to the homes around every job you close</li>
                <li>Weekly reporting in plain language</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <Reveal className="about-photo">
            <img src="/founder.jpg" alt="Keyhan, founder of Yucca Agency" />
          </Reveal>
          <Reveal className="about-copy" delayMs={90}>
            <div className="sec-eyebrow">The founder</div>
            <h2>Hi, I&apos;m Keyhan.</h2>
            <p className="about-text">
              I&apos;m the founder of Yucca Agency. I&apos;ve spent six years
              running paid ad campaigns for small and medium-sized
              businesses: managing budgets, writing creative, optimizing
              funnels, and turning ad spend into measurable revenue.
            </p>
            <p className="about-text">
              We work with a small number of clients at a time, one per
              market, so the strategy we build stays yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cta-sec">
        <div className="wrap final-cta">
          <div className="sec-eyebrow">Apply</div>
          <h2>We&apos;re selective because we can be.</h2>
          <p className="sec-lede">
            You wouldn&apos;t take on a homeowner who&apos;s impossible to deal
            with, and we feel the same about clients. We only work with
            companies that communicate well, show up, and do great work. We
            lock your territory and protect your market. If that sounds like
            you, let&apos;s talk.
          </p>
          <a href="/contact" className="btn btn-primary">
            Apply to work with us →
          </a>
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
