import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/explore", label: "Explore" },
  { href: "/stories", label: "Stories" },
  { href: "/programme", label: "Programme" },
  { href: "/impact", label: "Impact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">
        PROJECT HEARTBEAT<span className="wordmark-dot">.</span>
      </Link>

      <nav className="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}

        <details className="more-menu">
          <summary>
            More <span aria-hidden="true">↗</span>
          </summary>

          <div className="more-dropdown">
            <Link href="/resources">Resources</Link>
            <Link href="/get-involved">Get involved</Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
