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
        <div className="wrap hero-copy">
          <div className="eyebrow">
            Done-for-you growth for kitchen &amp; bath remodelers
          </div>
          <h1>Outgrow your competition.</h1>
          <p className="hero-tagline">
            Qualified estimate appointments on your calendar,{' '}
            <em>without you handling a single lead.</em>
          </p>
          <p className="hero-sub">
            A complete growth system for kitchen and bathroom remodelers. We
            create and run your ad campaigns, call and qualify every lead, and
            book the right homeowners straight into your calendar.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              Apply to work with us →
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/art/hero-desert.svg" alt="" />
        </div>
      </header>

      <div className="wrap hero-stats">
        <div className="stats">
          <div className="stat">
            <div className="stat-n">$60k</div>
            <div className="stat-l">
              In signed jobs for a bathroom remodeler in 30 days, from $1,750
              in ad spend.
            </div>
          </div>
          <div className="stat">
            <div className="stat-n">$583</div>
            <div className="stat-l">
              Cost per signed job on that campaign: 3 jobs from 30 leads.
            </div>
          </div>
          <div className="stat">
            <div className="stat-n">1 per market</div>
            <div className="stat-l">
              We never work with two competing remodelers in the same area.
            </div>
          </div>
        </div>
      </div>

      <section id="problem">
        <Reveal className="side-plant side-plant--right">
          <img src="/art/plant-bloom.svg" alt="" aria-hidden="true" />
        </Reveal>
        <div className="wrap">
          <div className="sec-eyebrow">The problem</div>
          <h2>Where most campaigns quietly fall apart.</h2>
          <p className="sec-lede">
            Most remodelers aren&apos;t short on demand. Their campaigns break
            down in the same four places, and we fix all four.
          </p>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>Generic offers.</h3>
              <p>
                &quot;Free estimate&quot; and &quot;10% off&quot; look like every
                other remodeler in the feed. Homeowners scroll past offers
                they&apos;ve seen a hundred times.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <div className="ix">02</div>
              <h3>Low-quality ads.</h3>
              <p>
                Stock photos and recycled clips don&apos;t show your
                craftsmanship, so they don&apos;t earn attention from the
                homeowners worth working with.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <div className="ix">03</div>
              <h3>Too few inquiries, and the wrong ones.</h3>
              <p>
                Weak offers and weak ads attract price shoppers, and not many
                of them. The calendar stays thin, and the estimates that do
                happen rarely close.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={210}>
              <div className="ix">04</div>
              <h3>Slow follow-up.</h3>
              <p>
                A homeowner who reached out a few hours ago has usually called
                someone else by now. Speed decides who gets the appointment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="services">
        <Reveal className="side-plant side-plant--left">
          <img src="/art/plant-joshua.svg" alt="" aria-hidden="true" />
        </Reveal>
        <div className="wrap">
          <div className="sec-eyebrow">How it works</div>
          <h2>Four parts. One job: booked estimate appointments.</h2>
          <p className="sec-lede">
            We handle the strategy, the scripts, the editing, the launch, and
            the day-to-day. Your part is to record once, using our shot guide
            and script. Don&apos;t want to be on camera? We can shoot it for
            you.
          </p>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <div className="ix">01</div>
              <h3>Paid social ads</h3>
              <p>
                We send you a shot guide and a script, you record once, and we
                turn it into ads, launch them on Meta and Instagram, and manage
                the spend day to day. Built around booked estimates, not
                reach.
              </p>
              <ul>
                <li>Offer, shot guide, and script</li>
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
              <h3>In-house sales team</h3>
              <p>
                Our own trained team calls every inquiry within minutes,
                qualifies the homeowner, and books the estimate appointment on
                your calendar. They connect on a human level, make people
                laugh, and leave a lasting impression that matches your
                brand&apos;s values and tone.
              </p>
              <ul>
                <li>Every inquiry called within minutes</li>
                <li>Qualified and booked as an estimate appointment</li>
                <li>Follow-up until a clear yes or no</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="results">
        <Reveal className="side-plant side-plant--right">
          <img src="/art/plant-twin.svg" alt="" aria-hidden="true" />
        </Reveal>
        <div className="wrap">
          <div className="sec-eyebrow">Case study</div>
          <h2>$60,000 in signed jobs from $1,750 in ad spend.</h2>
          <p className="sec-lede">
            A bathroom remodeling contractor near Downtown LA wanted more
            booked estimates with homeowners ready to remodel. Here is what
            the first 30 days looked like.
          </p>
          <div className="stats stats--4">
            <div className="stat">
              <div className="stat-n">30</div>
              <div className="stat-l">Leads in 30 days, at $58 each.</div>
            </div>
            <div className="stat">
              <div className="stat-n">10</div>
              <div className="stat-l">Consultations booked, at $175 each.</div>
            </div>
            <div className="stat">
              <div className="stat-n">3</div>
              <div className="stat-l">Jobs signed, averaging about $20,000.</div>
            </div>
            <div className="stat">
              <div className="stat-n">34x</div>
              <div className="stat-l">Return on $1,750 in ad spend.</div>
            </div>
          </div>
          <p className="case-note">
            Client name withheld for privacy. Results vary by business and
            market. <a href="/case-studies">See the full case study →</a>
          </p>
        </div>
      </section>

      <section id="standard">
        <div className="wrap">
          <div className="sec-eyebrow">Our standard</div>
          <h2>Measured in booked appointments, not impressions.</h2>
          <p className="sec-lede">
            Every campaign is judged on one number: what it costs to put a
            qualified estimate appointment on your calendar. That number is at
            the top of every weekly report.
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
        <Reveal className="side-plant side-plant--left">
          <img src="/art/plant-rock.svg" alt="" aria-hidden="true" />
        </Reveal>
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
                  Want qualified estimate appointments on the calendar, not a
                  spreadsheet of names to chase.
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
                  You can&apos;t approve ads within a day or two, or show up to
                  the estimate appointments we book.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="changes">
        <Reveal className="side-plant side-plant--right side-plant--flip">
          <img src="/art/plant-joshua.svg" alt="" aria-hidden="true" />
        </Reveal>
        <div className="wrap">
          <div className="sec-eyebrow">What changes</div>
          <h2>What you notice once it&apos;s running.</h2>
          <div className="svc-grid svc-grid--2">
            <Reveal className="svc">
              <h3>Better-fit homeowners</h3>
              <p>
                Homeowners who raised their hand for your specific offer, not
                people hunting for the lowest bid.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={70}>
              <h3>More booked estimates</h3>
              <p>
                Qualified homeowners on your calendar, ready to talk about a
                real project. You just show up and close.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={140}>
              <h3>Faster follow-up</h3>
              <p>
                Every homeowner hears from our team within minutes, not hours
                later and not after they&apos;ve called another contractor.
              </p>
            </Reveal>
            <Reveal className="svc" delayMs={210}>
              <h3>Numbers you can read</h3>
              <p>
                A weekly report in plain language: what each booked estimate
                appointment cost, and what changed since last week.
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

      <section className="cta-sec">
        <div className="wrap final-cta">
          <div className="sec-eyebrow">Apply</div>
          <h2>Check whether your territory is open.</h2>
          <p className="sec-lede">
            We work with one remodeler per market, because we don&apos;t want
            to compete against ourselves. Tell us what you do and where, and
            we&apos;ll tell you whether your area is still available.
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
