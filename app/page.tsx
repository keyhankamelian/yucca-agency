import LeadForm from './LeadForm';

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
          <div className="eyebrow">Performance marketing · Los Angeles</div>
          <h1>
            We don&apos;t market your business. We <em>outgrow</em> your
            competition.
          </h1>
          <p className="hero-sub">
            Paid ads, SEO, landing pages, and content strategy — built and
            managed by one team measured on the only thing that matters: your
            cost per customer.
          </p>
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

      <section id="services">
        <div className="wrap">
          <div className="sec-eyebrow">What we run</div>
          <h2>
            One team across the whole funnel — not five vendors who blame each
            other.
          </h2>
          <p className="sec-lede">
            Most businesses stitch together an ads person, an SEO person, and a
            web person who never talk. We own the path from click to customer,
            so nothing falls between the cracks.
          </p>
          <div className="svc-grid">
            <div className="svc">
              <div className="ix">01</div>
              <h3>Paid advertising</h3>
              <p>
                Meta, Google, and TikTok campaigns built around your
                cost-per-customer target — not vanity reach.
              </p>
            </div>
            <div className="svc">
              <div className="ix">02</div>
              <h3>Landing pages</h3>
              <p>
                Conversion-first pages built and tested so the traffic you pay
                for actually turns into bookings.
              </p>
            </div>
            <div className="svc">
              <div className="ix">03</div>
              <h3>SEO</h3>
              <p>
                Local and organic search work that compounds — so you stop
                renting every customer from ad platforms.
              </p>
            </div>
            <div className="svc">
              <div className="ix">04</div>
              <h3>Content strategy</h3>
              <p>
                A posting system tied to your offers, not a content calendar
                that looks busy and sells nothing.
              </p>
            </div>
            <div className="svc">
              <div className="ix">05</div>
              <h3>Consultation</h3>
              <p>
                A clear read on where your money leaks and what to fix first —
                useful whether or not you hire us.
              </p>
            </div>
            <div className="svc">
              <div className="ix">06</div>
              <h3>Reporting</h3>
              <p>
                One number-first dashboard. Leads, cost per lead, and what it
                cost to get them. No fluff slides.
              </p>
            </div>
          </div>

          {/* Signature element: three real results across three industries */}
          <div className="proof" id="proof" style={{ marginTop: '44px' }}>
            <div className="proof-head">
              <span>CASE FILES · THREE INDUSTRIES · REAL CAMPAIGNS</span>
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
          <h2>Priced on the engagement, not by the hour.</h2>
          <p className="sec-lede">
            Ad spend is paid directly to the platforms by you and stays separate
            from these fees. A one-time setup fee applies to your first month.
          </p>
          <div className="tiers">
            <div className="tier">
              <div className="tier-name">Launch</div>
              <div className="tier-price">
                $1,000<span className="per">/mo</span>
              </div>
              <div className="tier-desc">
                For solo operators getting their first channel working.
              </div>
              <ul>
                <li>One ad platform (Meta or Google)</li>
                <li>Campaign setup &amp; management</li>
                <li>Monthly performance report</li>
                <li>Up to ~$3k ad spend managed</li>
                <li>One-time setup: $500</li>
              </ul>
              <a href="#consult" className="btn btn-ghost">
                Start here
              </a>
            </div>
            <div className="tier feat">
              <div className="tier-tag">MOST POPULAR</div>
              <div className="tier-name">Growth</div>
              <div className="tier-price">
                $3,000<span className="per">/mo</span>
              </div>
              <div className="tier-desc">
                For businesses ready to scale what&apos;s already converting.
              </div>
              <ul>
                <li>Two ad platforms</li>
                <li>Landing page build &amp; optimization</li>
                <li>Foundational SEO</li>
                <li>Monthly strategy call</li>
                <li>Up to ~$10k ad spend managed</li>
                <li>One-time setup: $750</li>
              </ul>
              <a href="#consult" className="btn btn-primary">
                Book a consultation
              </a>
            </div>
            <div className="tier">
              <div className="tier-name">Scale</div>
              <div className="tier-price">
                $5,500<span className="per">/mo+</span>
              </div>
              <div className="tier-desc">
                Full-funnel for businesses with serious volume.
              </div>
              <ul>
                <li>Multi-platform paid ads</li>
                <li>SEO + content strategy</li>
                <li>Landing pages &amp; ongoing testing</li>
                <li>Biweekly calls &amp; priority support</li>
                <li>One-time setup: $1,000</li>
              </ul>
              <a href="#consult" className="btn btn-ghost">
                Talk to us
              </a>
            </div>
          </div>
          <p className="tier-note">
            Standalone landing page build (no retainer): from $1,500 ·
            Multi-location, e-commerce, or heavy-spend accounts → custom
            retainer. Mention it on the call.
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
                  You leave with the first three things to fix — whether you
                  hire us or not.
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
            Yucca Agency · Performance marketing · Los Angeles, CA · © 2026
          </p>
        </div>
      </footer>
    </>
  );
}
