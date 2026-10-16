import Link from "next/link";
import { siteConfig } from "../site-config";

const navigationItems = [
  { label: "Home", href: "/", visible: siteConfig.navigation.home },
  { label: "About", href: "/about", visible: siteConfig.navigation.about },
  {
    label: "Explore",
    href: "/explore",
    visible: siteConfig.navigation.explore,
  },
  {
    label: "Stories",
    href: "/stories",
    visible: siteConfig.navigation.stories,
  },
  {
    label: "Programme",
    href: "/programme",
    visible: siteConfig.navigation.programme,
  },
  {
    label: "Resources",
    href: "/resources",
    visible: siteConfig.navigation.resources,
  },
  {
    label: "Impact",
    href: "/impact",
    visible: siteConfig.navigation.impact,
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    visible: siteConfig.navigation.getInvolved,
  },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="wordmark">
        PROJECT HEARTBEAT<span className="wordmark-dot">.</span>
      </Link>

      <nav className="navigation" aria-label="Main navigation">
        {navigationItems
          .filter((item) => item.visible)
          .map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
      </nav>
    </header>
  );
}
