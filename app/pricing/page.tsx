import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Pricing — Yucca Agency',
};

export default function Pricing() {
  return (
    <>
      <Nav />

      <section>
        <div className="yucca-bg yucca-pricing" aria-hidden="true">
          <svg
            viewBox="0 0 200 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M100 260 L100 150" />
              <path d="M100 152 L64 132 M100 152 L136 132 M100 152 L58 158 M100 152 L142 158 M100 152 L72 176 M100 152 L128 176" />
              <path d="M100 150 L100 96" />
              <path d="M100 96 L70 74 M100 96 L130 74 M100 96 L62 92 M100 96 L138 92 M100 96 L78 112 M100 96 L122 112 M100 96 L100 62" />
            </g>
          </svg>
        </div>
        <div className="wrap">
          <div className="sec-eyebrow">Pricing</div>
          <h2>You don&apos;t need a $3–5k retainer to start.</h2>
          <p className="sec-lede">
            Ad spend is paid directly to the platforms by you and stays
            separate from these fees.{' '}
            <strong>Onboarding fees are waived through July 31.</strong>
          </p>
          <div className="tiers">
            <div className="tier">
              <div className="tier-name">Launch</div>
              <div className="tier-price">
                $1,000<span className="per">/mo</span>
              </div>
              <div className="tier-desc">
                For businesses running their first real paid social campaign.
              </div>
              <ul>
                <li>One platform (Meta, TikTok, or Google Ads)</li>
                <li>Creative direction — we tell you what to shoot</li>
                <li>You shoot &amp; edit, we launch &amp; manage</li>
                <li>Monthly performance report</li>
                <li>Up to ~$3k ad spend managed</li>
                <li>
                  Onboarding: <s>$500</s>{' '}
                  <span className="waived">waived through July 31</span>
                </li>
              </ul>
              <a href="/#consult" className="btn btn-ghost">
                Start here
              </a>
            </div>
            <div className="tier">
              <div className="tier-name">Growth</div>
              <div className="tier-price">
                $2,000<span className="per">/mo</span>
              </div>
              <div className="tier-desc">
                For businesses ready to scale what&apos;s already converting.
              </div>
              <ul>
                <li>Two platforms (Meta, TikTok, or Google Ads)</li>
                <li>Creative direction — we edit your footage</li>
                <li>Trend &amp; AI-assisted targeting</li>
                <li>Monthly strategy call</li>
                <li>Up to ~$10k ad spend managed</li>
                <li>
                  Onboarding: <s>$750</s>{' '}
                  <span className="waived">waived through July 31</span>
                </li>
              </ul>
              <a href="/#consult" className="btn btn-ghost">
                Book my free strategy session
              </a>
            </div>
            <div className="tier">
              <div className="tier-name">Scale</div>
              <div className="tier-price">
                Custom<span className="per"> pricing</span>
              </div>
              <div className="tier-desc">
                Full-funnel for businesses with serious volume.
              </div>
              <ul>
                <li>Multi-platform paid social</li>
                <li>Full production — we shoot &amp; edit for you</li>
                <li>SEO &amp; landing pages available add-on</li>
                <li>Biweekly calls &amp; priority support</li>
                <li>
                  Onboarding:{' '}
                  <span className="waived">waived through July 31</span>
                </li>
              </ul>
              <a href="/#consult" className="btn btn-ghost">
                Talk to us
              </a>
            </div>
          </div>

          <div className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">
                Included with every plan — free
              </div>
              <div className="highlight-name">The Lead-to-Client System</div>
              <p className="highlight-desc">
                Our 5-step playbook for turning a booked consult into a signed
                client — call scripts, follow-up templates, objection
                handlers, and a no-show prevention checklist. Sent to you free
                once you sign on, no matter the tier.
              </p>
            </div>
          </div>

          <p className="tier-note">
            Full video production (shoot + edit): priced per project ·
            Landing pages from $1,000 · SEO available as a monthly add-on.
            Mention it on the call.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
