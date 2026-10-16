import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Follow Project Heartbeat's progress, project updates, and impact reports.",
};

const impactAreas = [
  {
    number: "01",
    title: "Knowledge",
    description:
      "Making reliable health information more accessible to young people.",
  },
  {
    number: "02",
    title: "Conversations",
    description:
      "Creating space for open discussions about health, identity, and stigma.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "Helping young people discover resources, support, and opportunities to participate.",
  },
];

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">OUR IMPACT</p>

          <h1>Progress is more than numbers.</h1>

          <p>
            Meaningful change starts with what people learn, the conversations
            they feel able to have, and the connections they build. This page
            will document Project Heartbeat's progress and what we learn along
            the way.
          </p>
        </section>

        <section className="content-section">
          <p className="eyebrow">WHAT WE HOPE TO CONTRIBUTE</p>

          <h2>Change that matters to people.</h2>

          <p>
            Project Heartbeat aims to make health conversations more
            accessible, encourage informed decisions, and help young people
            find appropriate support.
          </p>

          <p>
            As the project develops, we intend to share evidence of our
            activities and outcomes rather than relying on assumptions about
            our impact.
          </p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">AREAS OF FOCUS</p>
              <h2>What we'll be learning about.</h2>
            </div>
          </div>

          <div className="topic-list">
            {impactAreas.map((area) => (
              <div className="topic-row" key={area.number}>
                <span className="topic-number">{area.number}</span>

                <div className="topic-copy">
                  <span className="topic-title">{area.title}</span>
                  <span className="topic-description">
                    {area.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <p className="eyebrow">PROJECT UPDATES</p>

          <h2>Follow the journey.</h2>

          <p>
            Project milestones, confirmed activities, and reflections will be
            published here as updates become available.
          </p>

          <p>
            No impact figures are displayed yet. We will add verified results
            when project data becomes available.
          </p>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">GROW WITH US</p>

          <h2>Impact starts with participation.</h2>

          <p>
            Join us in creating more open, informed, and supportive health
            conversations for young people.
          </p>

          <Link href="/get-involved" className="text-link">
            Get involved <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
