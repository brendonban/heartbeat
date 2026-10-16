import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "HIV & STIs",
  description:
    "Learn about HIV, sexually transmitted infections, prevention, testing, and care.",
};

export default function HIVSTIsPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">EXPLORE / 01</p>
          <h1>HIV & STIs</h1>
          <p>
            Knowledge helps us make informed decisions. Explore the basics of
            HIV and sexually transmitted infections, from prevention and
            testing to treatment and challenging stigma.
          </p>
        </section>

        <section className="content-section">
          <h2>What would you like to understand?</h2>

          <div className="topic-list">
            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Understanding HIV</span>
                <span className="topic-description">
                  Learn what HIV is, how it affects the immune system, and how
                  it differs from AIDS.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">
                  Sexually transmitted infections
                </span>
                <span className="topic-description">
                  Understand common STIs, possible symptoms, and why some
                  infections can be present without noticeable symptoms.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Prevention and testing</span>
                <span className="topic-description">
                  Explore testing, condoms, PrEP, PEP, and other prevention
                  options with reliable health guidance.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Treatment and living with HIV</span>
                <span className="topic-description">
                  Learn about HIV treatment, ongoing care, and how stigma can
                  affect people living with HIV.
                </span>
              </div>
            </div>
          </div>

          <p>
            This section is an introduction, not a substitute for medical
            advice. Detailed educational resources and verified Malaysian
            testing and support services will be added as they are reviewed.
          </p>
        </section>

        <section className="impact-preview">
          <h2>Keep exploring.</h2>
          <p>
            Health includes how we relate to ourselves and others.
          </p>
          <Link href="/explore/sexual-health" className="text-link">
            Explore sexual health <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
