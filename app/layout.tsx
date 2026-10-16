import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./global.css";
import Link from "next/link";
import Nav from "./components/Nav";
import HelpFab from "./components/HelpFab";
import ScrollBar from "./components/ScrollBar";

export const metadata: Metadata = {
  title: { default: "Project Heartbeat", template: "%s · Project Heartbeat" },
  description:
    "Youth-led sessions that help young people in Malaysia talk openly about HIV, sexual health and emotional health. Run by AIESEC in UPM with Ruang Malaysia.",
  icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💚</text></svg>" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#43B649" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/why", label: "Why it matters" },
    { href: "/explore", label: "Myths & facts" },
    { href: "/schedule", label: "Schedule" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ];
  return (
    <html lang="en">
      <body>
        <ScrollBar />
        <header>
          <div className="bar">
            <Link className="logo" href="/"><i />Project Heartbeat</Link>
            <Nav links={links} />
          </div>
        </header>
        <main>{children}</main>
        <HelpFab />
      </body>
    </html>
  );
}
