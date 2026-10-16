import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Emotional Health",
  description:
    "Explore emotional health, self-understanding, relationships, and finding support.",
};

export default function EmotionalHealthPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">EXPLORE / 03</p>
          <h1>Emotional Health</h1>
          <p>
            Understanding our emotions is part of understanding ourselves.
            Explore how we experience feelings, navigate relationships, respond
            to expectations, and find support when things feel difficult.
          </p>
        </section>

        <section className="content-section">
          <h2>Getting to know yourself.</h2>

          <div className="topic-list">
            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Understanding emotions</span>
                <span className="topic-description">
                  Learn to recognise emotions, understand what they may be
                  communicating, and respond with care.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Identity and belonging</span>
                <span className="topic-description">
                  Reflect on identity, social expectations, acceptance, and
                  the feeling of belonging.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Relationships and connection</span>
                <span className="topic-description">
                  Explore communication, supportive relationships, boundaries,
                  and asking for help.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <div className="topic-copy">
                <span className="topic-title">Finding support</span>
                <span className="topic-description">
                  Understand when to reach out and how professional and
                  community support may help.
                </span>
              </div>
            </div>
          </div>

          <p>
            Everyone's experiences are different. These resources are for
            general education and are not a replacement for counselling,
            psychological care, or medical advice.
          </p>
        </section>

        <section className="impact-preview">
          <h2>You don't have to figure everything out alone.</h2>
          <p>
            Explore available resources and ways to connect with support.
          </p>
          <Link href="/resources" className="text-link">
            Explore resources <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
