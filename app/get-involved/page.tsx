import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Discover ways to participate, volunteer, and collaborate with Project Heartbeat.",
};

const opportunities = [
  {
    number: "01",
    title: "Participate",
    description:
      "Take part in health conversations, learning activities, and community initiatives designed for young people.",
  },
  {
    number: "02",
    title: "Volunteer",
    description:
      "Contribute your time, skills, ideas, and perspectives to help create more accessible health conversations.",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "Explore opportunities for organisations, educators, healthcare professionals, and community groups to collaborate.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">GET INVOLVED</p>

          <h1>There is a place for you in this conversation.</h1>

          <p>
            Better health conversations happen when people come together.
            Whether you want to learn, contribute your skills, or collaborate
            with us, your perspective can help shape Project Heartbeat.
          </p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WAYS TO CONTRIBUTE</p>
              <h2>Find your way to get involved.</h2>
            </div>
          </div>

          <div className="topic-list">
            {opportunities.map((opportunity) => (
              <div className="topic-row" key={opportunity.number}>
                <span className="topic-number">{opportunity.number}</span>

                <div className="topic-copy">
                  <span className="topic-title">{opportunity.title}</span>
                  <span className="topic-description">
                    {opportunity.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <p className="eyebrow">LET'S COLLABORATE</p>

          <h2>Good work starts with a conversation.</h2>

          <p>
            We welcome conversations with people and organisations interested
            in youth health education, HIV and STI awareness, sexual health,
            emotional health, and community wellbeing.
          </p>

          <p>
            Share your interests and ideas with the team so we can explore
            whether there is an opportunity to work together.
          </p>

          <p>
            Our participation opportunities and collaboration arrangements
            will be updated as they are confirmed.
          </p>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">PROJECT HEARTBEAT</p>

          <h2>Health conversations that matter.</h2>

          <p>
            Explore our work and discover the conversations we're creating
            space for.
          </p>

          <Link href="/explore" className="text-link">
            Explore health topics <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
