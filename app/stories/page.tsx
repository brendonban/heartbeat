import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Personal experiences, perspectives, and community voices on health, identity, and belonging.",
};

const storyCategories = [
  {
    number: "01",
    title: "Personal Experiences",
    description:
      "Lived experiences that help us understand the human side of health, identity, and wellbeing.",
  },
  {
    number: "02",
    title: "Perspectives",
    description:
      "Reflections on social expectations, relationships, stigma, and the world we live in.",
  },
  {
    number: "03",
    title: "Community Voices",
    description:
      "Conversations with people and communities working towards a more informed and supportive society.",
  },
];

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">STORIES & PERSPECTIVES</p>

          <h1>Every experience has something to teach us.</h1>

          <p>
            Health is personal. Our experiences shape how we understand
            ourselves, connect with others, and navigate the world. This is a
            space for different voices, honest reflections, and stories worth
            listening to.
          </p>
        </section>

        <section className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPLORE THE COLLECTION</p>
              <h2>Different voices. Shared humanity.</h2>
            </div>
          </div>

          <div className="topic-list">
            {storyCategories.map((category) => (
              <div className="topic-row" key={category.number}>
                <span className="topic-number">{category.number}</span>

                <div className="topic-copy">
                  <span className="topic-title">{category.title}</span>
                  <span className="topic-description">
                    {category.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <p className="eyebrow">OUR COMMITMENT</p>

          <h2>Stories shared with care.</h2>

          <p>
            Personal stories deserve respect. We aim to approach every
            contribution with care for the storyteller's dignity, privacy,
            and consent. Contributors should understand how their stories may
            be used and have a say in what they share.
          </p>

          <p>
            We will not publish fabricated testimonials or present fictional
            experiences as real community stories.
          </p>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">HAVE A STORY TO SHARE?</p>

          <h2>Your voice can make a difference.</h2>

          <p>
            If you are interested in contributing a reflection or collaborating
            with Project Heartbeat, we'd love to hear from you.
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
