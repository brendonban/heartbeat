import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const topics = [
  {
    number: "01",
    title: "HIV & STIs",
    description:
      "Clear, stigma-free information about prevention, testing, and care.",
    href: "/explore/hiv-stis",
  },
  {
    number: "02",
    title: "Sexual Health",
    description:
      "Explore consent, relationships, safer sex, and informed choices.",
    href: "/explore/sexual-health",
  },
  {
    number: "03",
    title: "Emotional Health",
    description:
      "Make room for conversations about feelings, connection, and wellbeing.",
    href: "/explore/emotional-health",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">A YOUTH-LED HEALTH INITIATIVE</p>

            <h1>
              Health conversations
              <br />
              that matter.
            </h1>

            <p className="hero-description">
              A youth-led initiative exploring health, identity, and the
              conversations that matter to young people.
            </p>

            <Link href="/about" className="text-link">
              Explore the project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Partners */}
        <section className="partners">
          <p className="section-label">IN COLLABORATION WITH</p>

          <div className="partners-list">
            <div className="partner-name">
              AIESEC <span>in UPM</span>
            </div>

            <div className="partner-name">
              Ruang <span>Malaysia</span>
            </div>
          </div>
        </section>

        {/* Explore health topics */}
        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE</p>
              <h2>Start with a conversation.</h2>
            </div>

            <Link href="/explore" className="text-link">
              All topics <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="topic-list">
            {topics.map((topic) => (
              <Link
                href={topic.href}
                className="topic-row"
                key={topic.number}
              >
                <span className="topic-number">{topic.number}</span>

                <span className="topic-copy">
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

        {/* Stories */}
        <section className="stories-band">
          <div>
            <p className="eyebrow">STORIES & PERSPECTIVES</p>
            <h2>
              Health is personal.
              <br />
              Every story matters.
            </h2>
          </div>

          <div className="stories-band-copy">
            <p>
              A space for lived experiences, different perspectives, and
              community voices.
            </p>

            <Link href="/stories" className="text-link">
              Read stories <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* Impact */}
        <section className="impact-preview">
          <p className="eyebrow">LEARNING AS WE GO</p>
          <h2>Listen. Learn. Move forward.</h2>

          <p>
            We’ll share project updates, reflections, and impact reports as
            the work develops.
          </p>

          <Link href="/impact" className="text-link">
            Follow our progress <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
