import type { Metadata } from 'next';
import LeadForm from '../LeadForm';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import StickyCta from '../components/StickyCta';

export const metadata: Metadata = {
  title: 'Apply - Yucca Agency',
  description:
    'Check whether your territory is still open. Apply to work with Yucca Agency.',
};

export default function Contact() {
  return (
    <>
      <Nav />

      <section className="cta-sec" id="consult">
        <div className="wrap cta-grid">
          <div className="cta-left">
            <div className="sec-eyebrow">Territory application</div>
            <h2>Check whether your territory is still open.</h2>
            <p className="sec-lede">
              We never run the same system for two competing companies in the
              same trade and area. Tell us about your business below, and
              we&apos;ll let you know whether your market is open and whether
              we&apos;re a fit.
            </p>

            <div className="contact-direct">
              <div className="sec-eyebrow">Prefer to reach us directly?</div>
              <ul>
                <li>
                  <span>Phone</span>
                  <a href="tel:+13106947875">(310) 694-7875</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:hello@yuccaagency.com">
                    hello@yuccaagency.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="highlight">
              <div className="highlight-copy">
                <div className="highlight-label">Before you apply</div>
                <div className="highlight-name">
                  Not everyone who applies is accepted.
                </div>
                <p className="highlight-desc">
                  That&apos;s how the model works. With one company per trade
                  in each market, we only take on businesses we believe we can
                  really help, and if that isn&apos;t you, we&apos;ll say so
                  plainly. The form takes about two minutes.
                </p>
              </div>
            </div>

            <div className="sec-eyebrow" style={{ marginTop: '36px' }}>
              What happens next
            </div>
            <div className="cta-points">
              <Reveal className="cta-point">
                <span className="k">[01]</span>
                <span>
                  We study your market: is the territory open, and is there
                  enough demand to make this worthwhile for both of us?
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={80}>
                <span className="k">[02]</span>
                <span>
                  We study your business: your typical project size, how you
                  close, and how leads are handled today.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={160}>
                <span className="k">[03]</span>
                <span>
                  We get on a call and walk you through how the system works
                  and what to expect.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={240}>
                <span className="k">[04]</span>
                <span>
                  You decide. If it makes sense, we lock in your territory and
                  start. If not, no hard feelings.
                </span>
              </Reveal>
            </div>
          </div>

          {/* Formspree endpoint, handled via @formspree/react (form ID xkolqpnb) */}
          <LeadForm />
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
