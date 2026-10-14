export default function Footer() {
  return (
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
        <div className="foot-icons">
          <a href="mailto:hello@yuccaagency.com" aria-label="Email Yucca Agency">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <p className="foot-phone">
          <a href="tel:+13106947875">(310) 694-7875</a>
        </p>
        <p>
          Yucca Agency · Los Angeles, CA · © 2026 · All
          rights reserved
        </p>
        <p className="foot-legal">
          <a href="/privacy">Privacy Policy</a>
          {' · '}
          <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
