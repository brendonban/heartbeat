import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { siteConfig } from "./site-config";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero Section */}
        {siteConfig.homepage.hero && (
          <section className="hero container">
            <div className="hero-content">
              <p className="eyebrow">A YOUTH-LED INITIATIVE</p>

              <h1>
                Health conversations
                <br />
                that matter.
              </h1>

              <p className="hero-description">
                A youth-led project creating space for conversations about
                health and the experiences that shape young people's lives.
              </p>

              <Link href="/about" className="text-link">
                Discover our story <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </section>
        )}

        {/* Partners Section */}
        {siteConfig.homepage.partners && (
          <section className="partners-section container">
            <p className="eyebrow">IN COLLABORATION WITH</p>

            <div className="partners-list">
              <a
                href="https://aiesec.my"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-name"
              >
                AIESEC in UPM <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://ruangmalaysia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-name"
              >
                Ruang Malaysia <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        )}

        {/* Explore Section */}
        {siteConfig.homepage.explore && (
          <section className="container">
            {/* Keep your existing Explore homepage section here */}
          </section>
        )}

        {/* Stories Section */}
        {siteConfig.homepage.stories && (
          <section className="container">
            {/* Keep your existing Stories homepage section here */}
          </section>
        )}

        {/* Impact Section */}
        {siteConfig.homepage.impact && (
          <section className="container">
            {/* Keep your existing Impact homepage section here */}
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
