import LeadForm from './LeadForm';
import RotatingAudience from './RotatingAudience';

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-in">
          <div className="logo">
            <svg
              className="mark"
              viewBox="0 2.5 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#7A8B3F">
                <path d="M11.3 21 L12 8 L12.7 21 Z" />
                <path d="M11.3 21 L7 9 L12 20 Z" />
                <path d="M12.7 21 L17 9 L12 20 Z" />
                <path d="M11.5 21 L3.5 13 L12 20.5 Z" />
                <path d="M12.5 21 L20.5 13 L12 20.5 Z" />
              </g>
            </svg>
            Yucca
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#consult" className="nav-cta">
              Free consultation
            </a>
          </div>
        </div>
      </nav>

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
          <div className="eyebrow">Paid social ads · Lead gen · Social growth</div>
          <h1>
            We don&apos;t just do marketing for your business. We{' '}
            <em>outgrow</em> your competition.
          </h1>
          <p className="hero-sub">
            Paid social campaigns for service businesses and brands —
            dentists, contractors, gyms, spas, and more — built to grow your
            ROI 2–5x, with no long-term contracts. SEO and landing pages
            available if you need them.
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
        </div>
      </header>

      <section id="who-for">
        <div className="wrap">
          <div className="sec-eyebrow">Is this you?</div>
          <h2>Built for businesses who&apos;ve tried everything except this.</h2>
          <div className="svc-grid">
            <div className="svc">
              <div className="ix">01</div>
              <h3>Never run paid social</h3>
              <p>
                You know it works for businesses like yours. You just
                haven&apos;t had someone set it up right yet.
              </p>
            </div>
            <div className="svc">
              <div className="ix">02</div>
              <h3>Tried it — or tried AI — alone</h3>
              <p>
                You ran the ads yourself, or let an AI tool run them, and the
                leads never showed up. We know why.
              </p>
            </div>
            <div className="svc">
              <div className="ix">03</div>
              <h3>Priced out by agencies</h3>
              <p>
                Most shops won&apos;t talk to you under a $3,000–$5,000
                monthly retainer. We will.
              </p>
            </div>
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
            performs — and tell you exactly what to shoot.
          </p>
          <div className="svc-grid">
            <div className="svc">
              <div className="ix">01</div>
              <h3>Paid social advertising</h3>
              <p>
                Meta, Instagram, and TikTok campaigns built around your
                cost-per-lead target — not vanity reach.
              </p>
            </div>
            <div className="svc">
              <div className="ix">02</div>
              <h3>Creative direction</h3>
              <p>
                We tell you exactly what to shoot. Send us the footage and
                we&apos;ll cut it into ads built to perform.
              </p>
            </div>
            <div className="svc">
              <div className="ix">03</div>
              <h3>Full production — add-on</h3>
              <p>
                Don&apos;t want to shoot it yourself? We can shoot and edit
                the whole thing, finalized, for a fee.
              </p>
            </div>
            <div className="svc">
              <div className="ix">04</div>
              <h3>Trend &amp; AI-assisted targeting</h3>
              <p>
                We pair AI tools with real campaign experience to catch
                trends and audiences before they&apos;re played out.
              </p>
            </div>
            <div className="svc">
              <div className="ix">05</div>
              <h3>Landing pages — add-on</h3>
              <p>
                Conversion-first pages built and tested, priced separately if
                your funnel needs one.
              </p>
            </div>
            <div className="svc">
              <div className="ix">06</div>
              <h3>SEO — add-on</h3>
              <p>
                Local and organic search work, available add-on for when
                you&apos;re ready to stop renting every customer from ad
                platforms.
              </p>
            </div>
          </div>

          <div className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">Beyond the campaign</div>
              <div className="highlight-name">
                We audit the whole funnel, not just the targeting
              </div>
              <p className="highlight-desc">
                Great targeting can still send the right person to the wrong
                page. We audit your branding, landing page, and offer to make
                sure they&apos;re aligned with the campaign — so the leads we
                bring in convert at the highest intent and the best return.
                Need work? We&apos;ll optimize what you have for a fee, or
                build it from scratch for a fee if you don&apos;t have one
                yet.
              </p>
            </div>
          </div>

          {/* Signature element: four real results across four industries */}
          <div className="proof" id="proof" style={{ marginTop: '44px' }}>
            <div className="proof-head">
              <span>CASE FILES · FOUR INDUSTRIES · REAL CAMPAIGNS</span>
              <span className="live">VERIFIED RESULTS</span>
            </div>
            <div className="proof-body">
              <div className="proof-cell">
                <div className="proof-vert">Dental · Meta Ads</div>
                <div className="proof-number">
                  <span className="cur">$</span>7.38
                </div>
                <div className="proof-metric">
                  cost per lead · 42 leads · 1 month · $310 spend
                </div>
                <div className="proof-vs">industry avg ~$77 · ~90% lower</div>
              </div>
              <div className="proof-cell">
                <div className="proof-vert">Vehicle Dealership · Lead Gen</div>
                <div className="proof-number">
                  <span className="cur">$</span>2.20
                </div>
                <div className="proof-metric">
                  cost per customer lead · ~1,358 leads · 3 months
                </div>
                <div className="proof-vs">high-intent buyer pipeline</div>
              </div>
              <div className="proof-cell">
                <div className="proof-vert">Country Artist · Streaming</div>
                <div className="proof-number">
                  <span className="cur">$</span>0.07
                </div>
                <div className="proof-metric">
                  cost per DSP stream · 22%+ CTR · US + global
                </div>
                <div className="proof-vs">industry avg ~$0.65 · ~89% lower</div>
              </div>
              <div className="proof-cell">
                <div className="proof-vert">Contractor · Meta Ads</div>
                <div className="proof-number">4x</div>
                <div className="proof-metric">
                  return on ad spend · 32 leads · $1,000 spend · 1 month
                </div>
                <div className="proof-vs">≈$31 cost per lead</div>
              </div>
            </div>
            <div className="proof-foot">
              Real campaigns across real industries. Your numbers will differ —
              we&apos;ll model them on the call.
            </div>
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

      <section id="pricing">
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
                <li>One platform (Meta or TikTok)</li>
                <li>Creative direction — we tell you what to shoot</li>
                <li>You shoot &amp; edit, we launch &amp; manage</li>
                <li>Monthly performance report</li>
                <li>Up to ~$3k ad spend managed</li>
                <li>
                  Onboarding: <s>$500</s>{' '}
                  <span className="waived">waived through July 31</span>
                </li>
              </ul>
              <a href="#consult" className="btn btn-ghost">
                Start here
              </a>
            </div>
            <div className="tier feat">
              <div className="tier-tag">MOST POPULAR</div>
              <div className="tier-name">Growth</div>
              <div className="tier-price">
                $2,000<span className="per">/mo</span>
              </div>
              <div className="tier-desc">
                For businesses ready to scale what&apos;s already converting.
              </div>
              <ul>
                <li>Two platforms (Meta, TikTok, Instagram)</li>
                <li>Creative direction — we edit your footage</li>
                <li>Trend &amp; AI-assisted targeting</li>
                <li>Monthly strategy call</li>
                <li>Up to ~$10k ad spend managed</li>
                <li>
                  Onboarding: <s>$750</s>{' '}
                  <span className="waived">waived through July 31</span>
                </li>
              </ul>
              <a href="#consult" className="btn btn-primary">
                Book a consultation
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
              <a href="#consult" className="btn btn-ghost">
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
            Full video production (shoot + edit): priced per project · Landing
            pages from $1,000 · SEO available as a monthly add-on. Mention it
            on the call.
          </p>
        </div>
      </section>

      <section className="cta-sec" id="consult">
        <div className="wrap cta-grid">
          <div className="cta-left">
            <div className="sec-eyebrow">Free consultation</div>
            <h2>30 minutes. A real plan. No pitch deck.</h2>
            <div className="cta-points">
              <div className="cta-point">
                <span className="k">[01]</span>
                <span>
                  We look at your current numbers and tell you where the money
                  is leaking.
                </span>
              </div>
              <div className="cta-point">
                <span className="k">[02]</span>
                <span>
                  Never run ads, tried it yourself, or tried AI and got
                  burned — we&apos;ll show you what actually changes.
                </span>
              </div>
              <div className="cta-point">
                <span className="k">[03]</span>
                <span>
                  If we&apos;re a fit, we&apos;ll model your likely cost per
                  customer before you spend a dollar.
                </span>
              </div>
            </div>
          </div>

          {/* Formspree endpoint — handled via @formspree/react (form ID xkolqpnb) */}
          <LeadForm />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <svg
            className="yucca-foot"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="currentColor">
              <path d="M11.3 21 L12 8 L12.7 21 Z" />
              <path d="M11.3 21 L7 9 L12 20 Z" />
              <path d="M12.7 21 L17 9 L12 20 Z" />
              <path d="M11.5 21 L3.5 13 L12 20.5 Z" />
              <path d="M12.5 21 L20.5 13 L12 20.5 Z" />
            </g>
          </svg>
          <div className="foot-logo">
            Yucca<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <p>
            Yucca Agency · Paid social advertising · Los Angeles, CA · © 2026
          </p>
        </div>
      </footer>
    </>
  );
}
