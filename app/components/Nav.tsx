import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <div className="wrap nav-in">
        <Link href="/" className="logo">
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
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#consult" className="nav-cta">
            Free consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
