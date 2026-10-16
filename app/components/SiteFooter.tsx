import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="wordmark">
            PROJECT HEARTBEAT<span className="wordmark-dot">.</span>
          </Link>

          <p className="footer-description">
            Creating space for young people to explore health
            and the conversations that matter.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/about">About</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/programme">Programme</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/get-involved">Get involved</Link>
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Project Heartbeat</span>
        <span>A youth-led health project in Malaysia.</span>
      </div>
    </footer>
  );
}
