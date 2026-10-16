import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero Section */}
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

        {/* Partners Section */}
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
      </main>

      <SiteFooter />
    </>
  );
}
