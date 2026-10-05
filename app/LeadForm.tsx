'use client';

import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = 'https://calendly.com/hello-yuccaagency/30min';

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
          <h3>Application received.</h3>
          <p>
            We&apos;ll check that your area is open and reply within one
            business day. Want to skip ahead? Pick a time now.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={() => {
              // Custom rather than the standard "Schedule" event: this fires on
              // click, not on a confirmed booking, so it must not be mistaken
              // for one when optimising campaigns.
              if (typeof window.fbq === 'function') {
                window.fbq('trackCustom', 'CalendlyOpened');
              }
            }}
          >
            Pick my time →
          </a>
          <p className="form-fine">
            Booking a call doesn&apos;t reserve a territory. We confirm
            availability on the call.
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
        <div className="fld">
          <label htmlFor="location">City or neighborhood</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Where your business is based"
            required
          />
        </div>
        <div className="fld">
          <label htmlFor="type">Business type</label>
          <select id="type" name="business_type" defaultValue="" required>
            <option value="" disabled>
              Select one
            </option>
            <option>Kitchen / bathroom remodeling</option>
            <option>General contractor</option>
            <option>Roofing / exterior</option>
            <option>HVAC / plumbing / electrical</option>
            <option>Other home services</option>
            <option>Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={state.submitting}
        >
          Apply to work with us →
        </button>
        <p className="form-fine">
          We review every application and reply within one business day.
        </p>
        {state.errors && (
          <p className="form-error" id="formError" style={{ display: 'block' }}>
            Something went wrong. Email us directly at hello@yuccaagency.com.
          </p>
        )}
      </div>
    </form>
  );
}
