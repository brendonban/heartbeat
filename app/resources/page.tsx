import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore health information, healthcare services, and support resources in Malaysia.",
};

const resourceSections = [
  {
    number: "01",
    title: "Health Information",
    description:
      "Understand HIV and STIs, sexual health, and emotional health through reliable, evidence-informed information.",
    href: "/explore",
    linkLabel: "Explore health topics",
  },
  {
    number: "02",
    title: "Where to Get Help",
    description:
      "Learn how to find appropriate healthcare, counselling, testing, and other professional support.",
    href: "/explore/emotional-health",
    linkLabel: "Explore emotional health",
  },
  {
    number: "03",
    title: "Malaysian Support Services",
    description:
      "Find local organisations and services that support health, wellbeing, and access to care.",
    href: null,
    linkLabel: null,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">RESOURCES</p>

          <h1>Information is a starting point. Support matters, too.</h1>

          <p>
            Whether you're looking for answers, considering a health check-up,
            or trying to support someone you care about, finding the right
            information can help you take your next step.
          </p>
        </section>

        <section className="section">
          <div className="topic-list">
            {resourceSections.map((item) => (
              <div className="topic-row" key={item.number}>
                <span className="topic-number">{item.number}</span>

                <div className="topic-copy">
                  <span className="topic-title">{item.title}</span>
                  <span className="topic-description">
                    {item.description}
                  </span>

                  {item.href && item.linkLabel && (
                    <Link
                      href={item.href}
                      className="text-link"
                      style={{ marginTop: "12px", width: "fit-content" }}
                    >
                      {item.linkLabel} <span aria-hidden="true">↗</span>
                    </Link>
                  )}

                  {!item.href && (
                    <span className="topic-description" style={{ marginTop: "12px" }}>
                      Local service listings are being prepared and will be
                      added after verification.
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">A REMINDER</p>

          <h2>It's okay to ask for help.</h2>

          <p>
            Online information can support your understanding, but it cannot
            replace individual medical advice or professional care. If you
            have a health concern, consider speaking with a qualified
            healthcare professional.
          </p>

          <Link href="/get-involved" className="text-link">
            Connect with the project <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
