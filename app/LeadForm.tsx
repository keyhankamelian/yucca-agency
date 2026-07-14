'use client';

import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function LeadForm() {
  const [state, handleSubmit] = useForm('xkolqpnb');

  useEffect(() => {
    if (state.succeeded && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <form id="leadForm">
        <div className="form-success" style={{ display: 'block' }}>
          <div className="check">✓</div>
          <h3>Got it — talk soon.</h3>
          <p>
            We&apos;ll review your business and reach out within one business
            day to schedule your consultation.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form id="leadForm" onSubmit={handleSubmit}>
      <div id="formFields">
        <div className="row2">
          <div className="fld">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div className="fld">
            <label htmlFor="biz">Business name</label>
            <input
              id="biz"
              name="business"
              type="text"
              placeholder="Company"
              required
            />
          </div>
        </div>
        <div className="fld">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@business.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="fld">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(000) 000-0000"
          />
        </div>
        <div className="row2">
          <div className="fld">
            <label htmlFor="type">Business type</label>
            <select id="type" name="business_type" defaultValue="" required>
              <option value="" disabled>
                Select one
              </option>
              <option>Dental / orthodontics</option>
              <option>Law firm</option>
              <option>Contractor / home services</option>
              <option>Gym / fitness</option>
              <option>Beauty / salon / spa</option>
              <option>Therapist / wellness</option>
              <option>E-commerce / DTC brand</option>
              <option>Other</option>
            </select>
          </div>
          <div className="fld">
            <label htmlFor="budget">Monthly ad budget</label>
            <select id="budget" name="ad_budget" defaultValue="" required>
              <option value="" disabled>
                Select range
              </option>
              <option>Under $1,000</option>
              <option>$1,000 – $5,000</option>
              <option>$5,000 – $15,000</option>
              <option>$15,000+</option>
              <option>Not sure yet</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={state.submitting}
        >
          Get my free consultation →
        </button>
        <p className="form-fine">No spam. We reply within one business day.</p>
        {state.errors && (
          <p className="form-error" id="formError" style={{ display: 'block' }}>
            Something went wrong. Email us directly at hello@yuccaagency.com.
          </p>
        )}
      </div>
    </form>
  );
}
