import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore HIV and STIs, sexual health, and emotional health with Project Heartbeat.",
};

const topics = [
  {
    number: "01",
    title: "HIV & STIs",
    description:
      "Understand prevention, testing, treatment, and living without stigma.",
    href: "/explore/hiv-stis",
    tag: "KNOW THE FACTS",
  },
  {
    number: "02",
    title: "Sexual Health",
    description:
      "Explore consent, relationships, safer sex, and making informed choices.",
    href: "/explore/sexual-health",
    tag: "MAKE INFORMED CHOICES",
  },
  {
    number: "03",
    title: "Emotional Health",
    description:
      "Explore emotions, relationships, self-understanding, and finding support.",
    href: "/explore/emotional-health",
    tag: "UNDERSTAND YOURSELF",
  },
];

export default function ExplorePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">EXPLORE</p>
          <h1>Start with what matters to you.</h1>
          <p>
            Health is personal, and everyone has questions. Explore topics,
            learn something new, and find information to help you make informed
            decisions about your health.
          </p>
        </section>

        <section className="section">
          <div className="topic-list">
            {topics.map((topic) => (
              <Link
                href={topic.href}
                className="topic-row"
                key={topic.number}
              >
                <span className="topic-number">{topic.number}</span>

                <span className="topic-copy">
                  <span className="eyebrow">{topic.tag}</span>
                  <span className="topic-title">{topic.title}</span>
                  <span className="topic-description">
                    {topic.description}
                  </span>
                </span>

                <span className="topic-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">A NOTE ON HEALTH INFORMATION</p>
          <h2>Curiosity is a good place to start.</h2>
          <p>
            Our goal is to make health conversations easier to navigate. For
            personal medical concerns, consult a qualified healthcare
            professional.
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
