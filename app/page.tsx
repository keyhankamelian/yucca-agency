import LeadForm from './LeadForm';
import RotatingAudience from './RotatingAudience';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import StickyCta from './components/StickyCta';

// The territory rule the copy below commits to. The site promises it, so change
// it here if the real policy changes.
const TERRITORY_MILES = 100;

export default function Home() {
  return (
    <>
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
            Paid social ads · Direct mail · Home service growth
          </div>
          <h1>
            We fill your <em>calendar</em>. You do the work you&apos;re
            actually good at.
          </h1>
          <p className="hero-sub">
            Paid social ads, direct mail to local homeowners, a funnel built
            to convert, and follow-up on every lead. Built for home service
            companies, especially kitchen and bathroom remodelers.
          </p>
          <RotatingAudience />
          <div className="hero-actions">
            <a href="#consult" className="btn btn-primary">
              Apply to work with us →
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

          <div className="stats">
            <div className="stat">
              <div className="stat-n">4-Part</div>
              <div className="stat-l">
                One system: ads, mail, funnel, and follow-up.
              </div>
            </div>
            <div className="stat">
              <div className="stat-n">1 per market</div>
              <div className="stat-l">
                We don&apos;t work with two competing businesses in the same
                category and area.
              </div>
            </div>
            <div className="stat">
              <div className="stat-n">0</div>
              <div className="stat-l">
                Long-term contracts. Everything is month to month.
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="problem">
        <div className="wrap">
          <div className="sec-eyebrow">The problem</div>
          <h2>Where most campaigns quietly fall apart.</h2>
          <p className="sec-lede">
            The ad is rarely the only problem. Most estimates and consultations
            are lost somewhere between the click and the calendar.
          </p>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>The ads bring clicks, not appointments.</h3>
              <p>
                Boosted posts and generic campaigns optimize for cheap
                engagement. The people who respond to those aren&apos;t the
                people who book.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <div className="ix">02</div>
              <h3>The page doesn&apos;t match the promise.</h3>
              <p>
                Someone taps an ad about one thing and lands on a page about
                everything. The ad, the offer, and the page have to say the
                same thing.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <div className="ix">03</div>
              <h3>Leads go cold before anyone replies.</h3>
              <p>
                Someone who filled out a form a few hours ago has often
                already contacted another business. Speed is a big part of who
                gets the appointment.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={210}>
              <div className="ix">04</div>
              <h3>Nobody follows up after the first no.</h3>
              <p>
                Plenty of appointments come from the third or fourth touch,
                and most businesses never make one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="sec-eyebrow">How it works</div>
          <h2>Four parts. One job: booked appointments.</h2>
          <p className="sec-lede">
            We handle the strategy, the creative direction, the editing, the
            launch, and the day-to-day. Expect a couple of hours of your time
            in month one, and less after that. Don&apos;t want to be on
            camera? We can shoot it for you.
          </p>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>Paid social ads</h3>
              <p>
                We tell you exactly what to film, edit it into ads, launch
                them on Meta and Instagram, and manage the spend day to day.
                Built around the cost of a qualified lead, not reach.
              </p>
              <ul>
                <li>Creative direction and a shot list</li>
                <li>Editing, launch, and daily management</li>
                <li>Weekly reporting in plain language</li>
              </ul>
            </Reveal>
            <Reveal className="svc" delayMs={60}>
              <div className="ix">02</div>
              <h3>Funnel build and optimization</h3>
              <p>
                We audit the page your ad points to, the offer on it, and how
                conversions are tracked. If something is broken or missing, we
                fix it or build it.
              </p>
              <ul>
                <li>Funnel and offer audit</li>
                <li>Landing page build or optimization</li>
                <li>Conversion tracking set up properly</li>
              </ul>
            </Reveal>
            <Reveal className="svc" delayMs={120}>
              <div className="ix">03</div>
              <h3>Direct mail to local homeowners</h3>
              <p>
                When we close a job for you, we mail the homes around it. Your
                neighbors see the finished work, with the same offer as your
                ads, so the mailer and the online ad reinforce each other.
              </p>
              <ul>
                <li>Mailers sent to every nearby home of a closed job</li>
                <li>Design and offer matched to your ads</li>
                <li>We handle the printing and postage</li>
              </ul>
            </Reveal>
            <Reveal className="svc" delayMs={180}>
              <div className="ix">04</div>
              <h3>Follow-up on every lead</h3>
              <p>
                Every new lead gets an immediate text from us, then follow-up
                until they book or give a clear no. You also get our
                Lead-to-Client playbook for the calls your team takes.
              </p>
              <ul>
                <li>An immediate text to every new lead</li>
                <li>Follow-up until a clear yes or no</li>
                <li>Scripts, templates, and a no-show checklist</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="standard">
        <div className="wrap">
          <div className="sec-eyebrow">Our standard</div>
          <h2>Measured in booked appointments, not impressions.</h2>
          <p className="sec-lede">
            Every campaign is judged on one number: what it costs to get a
            qualified lead onto your calendar. That number is at the top of
            every weekly report.
          </p>
          <div className="commit">
            <Reveal className="commit-item">
              Weekly reporting in plain language.
            </Reveal>
            <Reveal className="commit-item" delayMs={60}>
              No long-term contracts. Month to month.
            </Reveal>
            <Reveal className="commit-item" delayMs={120}>
              Your ad account stays in your name, and you keep everything we
              build.
            </Reveal>
            <Reveal className="commit-item" delayMs={180}>
              You approve every ad before it runs.
            </Reveal>
          </div>

          <Reveal className="highlight">
            <div className="highlight-copy">
              <div className="highlight-label">Territory</div>
              <div className="highlight-name">
                One business per category, per market.
              </div>
              <p className="highlight-desc">
                We don&apos;t run this system for two competing businesses in
                the same category within {TERRITORY_MILES} miles of each
                other. When you take your territory, the creative, the
                targeting, and the offer are yours. Apply to see whether your
                area is still open.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="fit">
        <div className="wrap">
          <div className="sec-eyebrow">Is this for you?</div>
          <h2>Who this works for, and who it doesn&apos;t.</h2>
          <div className="fit">
            <Reveal className="fit-col fit-yes">
              <h3>This works for businesses that</h3>
              <ul>
                <li>
                  Sell high-ticket home projects, like kitchen and bathroom
                  remodeling, and book estimates or in-home consultations.
                </li>
                <li>Compete on quality and craftsmanship, not the lowest bid.</li>
                <li>
                  Want qualified people on the calendar, not a spreadsheet of
                  raw leads.
                </li>
                <li>
                  Want steady monthly growth instead of feast-or-famine
                  months.
                </li>
              </ul>
            </Reveal>
            <Reveal className="fit-col fit-no" delayMs={80}>
              <h3>This isn&apos;t for you if</h3>
              <ul>
                <li>You compete mainly on being the cheapest option.</li>
                <li>You need results this week.</li>
                <li>
                  You&apos;re not ready to take on more jobs than you handle
                  today.
                </li>
                <li>
                  You can&apos;t approve ads or respond to handed-off leads
                  within a day or two.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="changes">
        <div className="wrap">
          <div className="sec-eyebrow">What changes</div>
          <h2>What you notice once it&apos;s running.</h2>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <h3>Better-qualified leads</h3>
              <p>
                Homeowners who raised their hand for your specific offer, not
                people hunting for the lowest bid.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <h3>More booked appointments</h3>
              <p>
                Qualified homeowners on your calendar, ready to talk about a
                real project.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <h3>Faster follow-up</h3>
              <p>
                Every new lead hears from you right away, not hours later and
                not after they&apos;ve called another contractor.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={210}>
              <h3>Numbers you can read</h3>
              <p>
                A weekly report in plain language: what it cost to get a
                qualified lead, and what changed since last week.
              </p>
            </Reveal>
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
            <div className="sec-eyebrow">Apply</div>
            <h2>Check whether your area is open.</h2>
            <p className="sec-lede">
              We take one business per category in a market. Tell us what you
              do and where, and we&apos;ll tell you whether your area is still
              available.
            </p>
            <div className="cta-points">
              <Reveal className="cta-point">
                <span className="k">[01]</span>
                <span>
                  We check your territory and look at your current marketing.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={80}>
                <span className="k">[02]</span>
                <span>
                  If it&apos;s open and a fit, we map out the plan and model
                  your numbers before you spend a dollar.
                </span>
              </Reveal>
              <Reveal className="cta-point" delayMs={160}>
                <span className="k">[03]</span>
                <span>If it isn&apos;t a fit, we&apos;ll tell you that too.</span>
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
