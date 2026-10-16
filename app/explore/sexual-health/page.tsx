import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Sexual Health",
  description:
    "Explore consent, relationships, safer sex, and informed decisions about sexual health.",
};

export default function SexualHealthPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">EXPLORE / 02</p>
          <h1>Sexual Health</h1>
          <p>
            Sexual health involves more than the absence of illness. It
            includes safety, consent, relationships, respect, and having the
            information to make decisions that feel right for you.
          </p>
        </section>

        <section className="content-section">
          <h2>Conversations worth having.</h2>

          <div className="topic-list">
            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Consent and boundaries</span>
                <span className="topic-description">
                  Understand mutual consent, personal boundaries, and
                  communicating what you are comfortable with.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Relationships and intimacy</span>
                <span className="topic-description">
                  Explore trust, communication, expectations, and respect in
                  relationships.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Safer sex</span>
                <span className="topic-description">
                  Learn about contraception, condoms, STI prevention, and
                  accessing appropriate healthcare.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Sexual health and stigma</span>
                <span className="topic-description">
                  Consider how culture, social expectations, and access to
                  information shape conversations about sexual health.
                </span>
              </div>
            </div>
          </div>

          <p>
            These topics are intended to support learning and reflection.
            Individual healthcare needs should be discussed with a qualified
            healthcare professional.
          </p>
        </section>

        <section className="impact-preview">
          <h2>Make space for yourself, too.</h2>
          <p>
            Our relationships with others can shape how we understand
            ourselves and our emotions.
          </p>
          <Link href="/explore/emotional-health" className="text-link">
            Explore emotional health <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
