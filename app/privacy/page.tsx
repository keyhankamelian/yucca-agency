import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Yucca Agency',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />

      <section>
        <div className="wrap legal">
          <div className="sec-eyebrow">Legal</div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: July 16, 2026</p>

          <p>
            This policy explains what information Yucca Agency
            (&quot;Yucca,&quot; &quot;we,&quot; &quot;us&quot;) collects
            through yuccaagency.com, how we use it, and the choices you
            have. It&apos;s written to reflect what this site actually does
            — not a generic template.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you submit the consultation form, we collect the
            information you provide: your name, business name, work email,
            phone number, and business type. We don&apos;t require any
            information beyond what&apos;s needed to understand your
            business and follow up with you.
          </p>
          <p>
            We also use the Meta Pixel (Facebook/Instagram) on every page
            of this site, which collects standard browser and device
            information and records when a page loads and when the
            consultation form is successfully submitted. This helps us
            measure how our own ad campaigns perform and, if you&apos;ve
            interacted with our ads, may allow Meta to associate your visit
            with your Meta/Instagram account for that purpose.
          </p>

          <h2>How we use your information</h2>
          <p>
            Form submissions are used to respond to your consultation
            request, understand your business before we talk, and follow
            up by phone or email. Pixel data is used to measure and improve
            our own advertising — it does not change anything about the
            service we provide you. We do not sell your information to
            third parties.
          </p>

          <h2>Third-party services</h2>
          <p>
            This site relies on a small number of outside services to
            operate: Formspree processes and delivers form submissions to
            us; Vercel hosts the site; Meta provides the pixel described
            above. Each of these providers processes data under its own
            privacy policy in addition to this one.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            The Meta Pixel sets cookies in your browser to support the
            measurement described above. You can control or block these
            through your browser&apos;s cookie settings, Meta&apos;s own ad
            preferences, or a browser extension — doing so won&apos;t
            affect your ability to use this site or submit the consultation
            form.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep consultation form submissions for as long as needed to
            respond to your inquiry and, if you become a client, for the
            duration of that relationship and as required for our business
            records. You can request deletion at any time — see Contact
            below.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us what information we hold about you, ask us to
            correct it, or ask us to delete it, by emailing us at the
            address below. If you&apos;d rather not be tracked by the Meta
            Pixel, you can use your browser&apos;s tracking-protection
            settings or an ad blocker — the site works the same either way.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy, or requests regarding your data:{' '}
            <a href="mailto:hello@yuccaagency.com">
              hello@yuccaagency.com
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
