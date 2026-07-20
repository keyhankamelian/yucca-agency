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
          <a href="https://www.instagram.com/yuccaagency" target="_blank" rel="noopener noreferrer" aria-label="Yucca Agency on Instagram">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61592117121636" target="_blank" rel="noopener noreferrer" aria-label="Yucca Agency on Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
        </div>
        <p>Yucca Agency · Digital marketing · Los Angeles, CA · © 2026</p>
        <p className="foot-legal">
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
