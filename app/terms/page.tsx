import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - Yucca Agency',
};

export default function Terms() {
  return (
    <>
      <Nav />

      <section>
        <div className="wrap legal">
          <div className="sec-eyebrow">Legal</div>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-updated">Last updated: October 5, 2026</p>

          <p>
            These terms govern your use of yuccaagency.com and any
            communication with Yucca Agency (&quot;Yucca,&quot;
            &quot;we,&quot; &quot;us&quot;), including our chat widget and
            text messages. By using the site or messaging us, you agree to
            them.
          </p>

          <h2>What we do</h2>
          <p>
            Yucca is a Los Angeles marketing agency that runs paid social
            ads, direct mail, landing pages, and lead follow-up for home
            service companies. This site describes those services and lets
            you apply to work with us. Applying does not create a client
            relationship or reserve a territory. Any engagement is covered
            by a separate written agreement.
          </p>

          <h2>Information you give us</h2>
          <p>
            Please give us accurate information when you submit the
            application form or chat with us. How we handle it is described
            in our <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>Text messaging</h2>
          <p>
            If you start a chat with us or share your mobile number and
            agree to be contacted, we may text you about your inquiry,
            scheduling, and follow-up. Message frequency varies. Message and
            data rates may apply. Reply STOP at any time to stop receiving
            texts, or HELP for help. Consent to receive texts is not a
            condition of purchasing anything from us. Carriers are not
            liable for delayed or undelivered messages. We do not share
            mobile numbers or text-messaging opt-in data with third parties
            for their marketing or promotional purposes.
          </p>

          <h2>Results</h2>
          <p>
            Marketing results vary by business, market, offer, and budget.
            Nothing on this site is a guarantee of leads, appointments, or
            revenue.
          </p>

          <h2>Using the site</h2>
          <p>
            Don&apos;t misuse the site, attempt to disrupt it, or submit
            information that isn&apos;t yours to submit. The content, design,
            and branding on this site belong to Yucca and may not be copied
            without permission.
          </p>

          <h2>Third-party services</h2>
          <p>
            The site uses outside providers, including Formspree, Vercel,
            Meta, LeadConnector, and Calendly. Their own terms and privacy
            policies apply to what they process.
          </p>

          <h2>Liability</h2>
          <p>
            The site and its content are provided as is. To the extent the
            law allows, Yucca is not liable for indirect or consequential
            losses from using the site.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The date above
            shows the latest version, and continued use means you accept it.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:hello@yuccaagency.com">hello@yuccaagency.com</a>
            {' '}or <a href="tel:+14247227052">(424) 722-7052</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
