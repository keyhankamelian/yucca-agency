import LeadForm from './LeadForm';
import RotatingAudience from './RotatingAudience';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import CaseFiles from './components/CaseFiles';

export default function Home() {
  return (
    <>
      <div className="promo-bar">
        <a href="/pricing">
          Onboarding fees waived through July 31. See plans →
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
          <div className="eyebrow">Paid social ads · Lead gen · Market growth</div>
          <h1>
            We don&apos;t just do marketing for your business. We{' '}
            <em>outgrow</em> your competition.
          </h1>
          <p className="hero-sub">
            Paid social campaigns for service businesses and brands: dentists,
            contractors, gyms, spas, and more. Built to grow your ROI, with no
            long-term contracts. SEO and full-funnel optimization or
            build-out available if you need them.
          </p>
          <RotatingAudience />
          <div className="hero-actions">
            <a href="#consult" className="btn btn-primary">
              Book a free consultation →
            </a>
            <a href="#proof" className="btn btn-ghost">
              See the numbers
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
          <div className="sec-eyebrow">What we run</div>
          <h2>Paid social is the core. We&apos;ll add the rest if you need it.</h2>
          <p className="sec-lede">
            Most agencies hand you a media buyer and leave the creative to
            you. We combine campaign experience with an eye for what actually
            performs, and tell you exactly what to shoot.
          </p>
          <div className="svc-grid">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>Paid social advertising</h3>
              <p>
                Meta, Instagram, and TikTok campaigns built around your
                cost-per-lead target, not vanity reach.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={60}>
              <div className="ix">02</div>
              <h3>Creative direction</h3>
              <p>
                We tell you exactly what to shoot. Send us the footage and
                we&apos;ll cut it into ads built to perform.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={120}>
              <div className="ix">03</div>
              <h3>Full production (add-on)</h3>
              <p>
                Don&apos;t want to shoot it yourself? We can shoot and edit
                the whole thing, finalized, for a fee.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={60}>
              <div className="ix">04</div>
              <h3>Advanced targeting</h3>
              <p>
                We pair AI tools with real campaign experience to catch
                trends and audiences before they&apos;re played out.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={120}>
              <div className="ix">05</div>
              <h3>Landing pages (add-on)</h3>
              <p>
                Conversion-first pages built and tested, priced separately if
                your funnel needs one.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={180}>
              <div className="ix">06</div>
              <h3>SEO (add-on)</h3>
              <p>
                Local and organic search work, available add-on for when
                you&apos;re ready to stop renting every customer from ad
                platforms.
              </p>
            </Reveal>
          </div>

          <Reveal className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">Beyond the campaign</div>
              <div className="highlight-name">
                We audit the whole funnel, not just the targeting
              </div>
              <p className="highlight-desc">
                Great targeting can still send the right person to the wrong
                page. We audit your branding, landing page, and offer to make
                sure they&apos;re aligned with the campaign, so the leads we
                bring in convert at the highest intent and the best return.
                Need work? We&apos;ll optimize what you have for a fee, or
                build it from scratch for a fee if you don&apos;t have one
                yet.
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
            <div className="sec-eyebrow">Free consultation</div>
            <h2>A quick call. A real plan. No obligation.</h2>
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
    </>
  );
}
