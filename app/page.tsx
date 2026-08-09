import LeadForm from './LeadForm';
import RotatingAudience from './RotatingAudience';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import CaseFiles from './components/CaseFiles';
import Faq from './components/Faq';
import StickyCta from './components/StickyCta';

export default function Home() {
  return (
    <>
      <div className="promo-bar">
        <a href="/pricing">
          Onboarding fees waived through August 31
        </a>
      </div>
      <Nav />

      <header className="hero">
        <div className="yucca-bg yucca-hero" aria-hidden="true">
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
              {/* trunk */}
              <path d="M100 260 L100 150" />
              <path d="M100 190 C100 190 88 180 84 168" opacity=".7" />
              <path d="M100 205 C100 205 112 196 118 184" opacity=".7" />
              {/* lower rosette */}
              <path d="M100 152 L64 132 M100 152 L136 132 M100 152 L58 158 M100 152 L142 158 M100 152 L72 176 M100 152 L128 176" />
              {/* mid trunk branch */}
              <path d="M100 150 L100 96" />
              <path d="M100 120 L74 104 M100 120 L128 108" opacity=".8" />
              {/* upper rosettes */}
              <g>
                <path d="M100 96 L70 74 M100 96 L130 74 M100 96 L62 92 M100 96 L138 92 M100 96 L78 112 M100 96 L122 112 M100 96 L100 62" />
              </g>
              {/* offshoot rosette left */}
              <path d="M74 104 L52 96" />
              <path d="M52 96 L34 84 M52 96 L30 92 M52 96 L40 106 M52 96 L52 78" opacity=".9" />
              {/* offshoot rosette right */}
              <path d="M128 108 L150 100" />
              <path d="M150 100 L168 88 M150 100 L172 96 M150 100 L160 110 M150 100 L150 82" opacity=".9" />
            </g>
          </svg>
        </div>
        <div className="wrap">
          <div className="eyebrow">
            Paid social ads · Lead generation · Revenue &amp; social growth
          </div>
          <h1>
            We fill your <em>calendar</em>. You do the work you&apos;re
            actually good at.
          </h1>
          <p className="hero-sub">
            Paid social ads and everything that happens after the click. For
            appointment-based businesses — dentists, chiropractors, med spas,
            fitness studios, lawyers, and more. No long-term contracts, built
            to return 2&ndash;10x your ad spend.
          </p>
          <RotatingAudience />
          <div className="hero-actions">
            <a href="#consult" className="btn btn-primary">
              Get a free strategy session →
            </a>
          </div>
          <div className="partners">
            <span className="partners-label">Certified</span>
            <img
              src="/partners/google-partner.png"
              alt="Google Partner"
              className="partner-logo"
            />
            <img
              src="/partners/meta-business-partner.png"
              alt="Meta Business Partner"
              className="partner-logo partner-logo--meta"
            />
          </div>
        </div>
      </header>

      <section id="who-for">
        <div className="wrap">
          <div className="sec-eyebrow">Is this you?</div>
          <h2>Built for businesses who&apos;ve tried everything except this.</h2>
          <div className="svc-grid">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>Never run paid social</h3>
              <p>
                You know it works for businesses like yours. You just
                haven&apos;t had someone set it up right yet.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <div className="ix">02</div>
              <h3>Tried it, or tried AI, alone</h3>
              <p>
                You ran the ads yourself, or let an AI tool run them, and the
                leads never showed up. We know why.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <div className="ix">03</div>
              <h3>Priced out by agencies</h3>
              <p>
                Most agencies won&apos;t return your call under a $3,000 to
                $5,000 monthly retainer. We will.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="sec-eyebrow">How it works</div>
          <h2>An agency that does the heavy lifting.</h2>
          <p className="sec-lede">
            You film a few clips on your phone — we tell you exactly what to
            shoot. Then we edit, launch, manage, and track everything. A
            couple hours of your time in month one. (Camera-shy? We offer full
            production too.)
          </p>
          <div className="svc-grid">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>We tell you what to film</h3>
              <p>
                No crew, no studio, no script to memorize. Your phone and a
                window are enough. We send you the exact shot list.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={60}>
              <div className="ix">02</div>
              <h3>We edit, launch, and manage</h3>
              <p>
                Send us the footage. We cut it into ads, run them on Meta,
                Instagram, or TikTok, and manage the spend day to day.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={120}>
              <div className="ix">03</div>
              <h3>We audit everything the ad touches</h3>
              <p>
                Your page, your offer, your follow-up. Great targeting still
                fails if it sends the right person to the wrong place.
              </p>
            </Reveal>
          </div>

          <Reveal className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">What the audit covers</div>
              <div className="highlight-name">
                Where campaigns actually break
              </div>
              <p className="highlight-desc">
                The page your ad points to. The offer sitting on it. How fast
                you reply when a lead comes in. Whether any of it is being
                tracked at all. We check all four before we touch your budget,
                and tell you what we find either way. If something needs
                building or fixing, we can do that too.
              </p>
            </div>
          </Reveal>

          {/* Signature element: three real results across three industries */}
          <div style={{ marginTop: '58px' }}>
            <div className="sec-eyebrow">Case files</div>
            <h2>Featured case studies from real campaigns.</h2>
          </div>
          <div style={{ marginTop: '24px' }}>
            <CaseFiles />
          </div>

          <Reveal className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">
                Included with every plan — free
              </div>
              <div className="highlight-name">The Lead-to-Client System</div>
              <p className="highlight-desc">
                Getting the lead is half the job. Our 5-step playbook covers
                the other half: call scripts, follow-up templates, objection
                handlers, and a no-show prevention checklist. Sent to you free
                once you sign on, no matter the plan.
              </p>
            </div>
          </Reveal>

          <Reveal className="market-note">
            <p>
              <strong>One client per market.</strong> We work with a small
              number of clients at a time, and never two who compete with each
              other, so the strategy we build stays yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <div className="sec-eyebrow">Common questions</div>
          <h2>The things everyone asks before they call.</h2>
          <Faq />
        </div>
      </section>

      <div className="yucca-divider" aria-hidden="true">
        <span className="rule"></span>
        <svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 52 L20 26" />
            <path d="M20 26 L6 16 M20 26 L34 16 M20 26 L4 24 M20 26 L36 24 M20 26 L10 34 M20 26 L30 34 M20 26 L20 8" />
          </g>
        </svg>
        <span className="rule"></span>
      </div>

      <section className="cta-sec" id="consult">
        <div className="wrap cta-grid">
          <div className="cta-left">
            <div className="sec-eyebrow">Free strategy session</div>
            <h2>A quick call. A real plan.</h2>
            <div className="cta-points">
              <Reveal className="cta-point">
                <span className="k">[01]</span>
                <span>
                  We show you how much more revenue your ad investment could
                  generate, and what it takes to dominate your market.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={80}>
                <span className="k">[02]</span>
                <span>
                  We analyze your brand, offer, and current marketing to show
                  you exactly what&apos;s working and what&apos;s not.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={160}>
                <span className="k">[03]</span>
                <span>
                  If we&apos;re a fit, we&apos;ll map out the changes to make
                  and model your numbers before you spend a dollar.
                </span>
              </Reveal>
            </div>
          </div>

          {/* Formspree endpoint — handled via @formspree/react (form ID xkolqpnb) */}
          <LeadForm />
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
