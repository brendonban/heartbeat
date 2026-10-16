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

          <h2>Stories shared
