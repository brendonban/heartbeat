import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Discover Project Heartbeat's health education activities, community engagement, and youth-led initiatives.",
};

const activities = [
  {
    number: "01",
    title: "Health Education",
    description:
      "Accessible learning sessions that help young people understand HIV and STIs, sexual health, and emotional health.",
    status: "PROGRAMME AREA",
  },
  {
    number: "02",
    title: "Community Conversations",
    description:
      "Facilitated conversations that encourage questions, challenge stigma, and make space for different perspectives.",
    status: "PROGRAMME AREA",
  },
  {
    number: "03",
    title: "Youth Engagement",
    description:
      "Opportunities for young people to participate, share perspectives, and contribute to a more informed community.",
    status: "PROGRAMME AREA",
  },
  {
    number: "04",
    title: "Resources and Referrals",
    description:
      "Connections to reliable health information and appropriate support services.",
    status: "PROGRAMME AREA",
  },
];

export default function ProgrammePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">OUR PROGRAMME</p>

          <h1>From conversations to meaningful action.</h1>

          <p>
            Project Heartbeat brings health education and youth engagement
            together to create space for learning, reflection, and informed
            choices. Our programme focuses on making health conversations
            more accessible, relevant, and inclusive.
          </p>
        </section>

        <section className="content-section">
          <p className="eyebrow">WHAT GUIDES US</p>

          <h2>Learning that connects with real life.</h2>

          <p>
            We believe young people should be able to ask questions without
            fear of judgement, access trustworthy information, and understand
            where to find support. Our activities are designed to encourage
            participation rather than simply deliver information.
          </p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PROGRAMME AREAS</p>
              <h2>Different ways to get involved.</h2>
            </div>
          </div>

          <div className="topic-list">
            {activities.map((activity) => (
              <div className="topic-row" key={activity.number}>
                <span className="topic-number">{activity.number}</span>

                <div className="topic-copy">
                  <span className="eyebrow">{activity.status}</span>
                  <span className="topic-title">{activity.title}</span>
                  <span className="topic-description">
                    {activity.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <p className="eyebrow">ACTIVITIES & UPDATES</p>

          <h2>Our work will grow with the community.</h2>

          <p>
            Details of upcoming sessions, activities, and participation
            opportunities will be shared here as they are confirmed.
          </p>

          <p>
            Follow our project updates to learn about new activities and
            opportunities to take part.
          </p>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">TAKE PART</p>

          <h2>Be part of the conversation.</h2>

          <p>
            Whether you are a young person, community organisation, or
            potential partner, there may be a way to contribute.
          </p>

          <Link href="/get-involved" className="text-link">
            Find out how <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
