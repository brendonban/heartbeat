import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story, approach, and partnerships behind Project Heartbeat.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="page-intro">
          <p className="eyebrow">ABOUT PROJECT HEARTBEAT</p>

          <h1>
            Health is more than
            <br />
            a conversation.
          </h1>

          <p>
            It is about how we understand ourselves, relate to others, and
            navigate the world around us. Project Heartbeat creates space for
            young people to explore these experiences with curiosity,
            confidence, and care.
          </p>
        </section>

        <section className="content-section">
          <p className="eyebrow">01 / OUR STORY</p>

          <h2>Making space for the conversations that matter.</h2>

          <p>
            Conversations about health can be difficult to start. Questions
            about HIV, sexual health, relationships, and emotional health may
            be shaped by stigma, social expectations, and the information
            available to us.
          </p>

          <p>
            Project Heartbeat is a youth-led initiative that brings these
            conversations into the open. We want young people to have access
            to reliable information, feel comfortable asking questions, and
            find the support they need to make informed decisions about their
            health.
          </p>
        </section>

        <section className="content-section">
          <p className="eyebrow">02 / OUR APPROACH</p>

          <h2>Beyond awareness. Towards meaningful change.</h2>

          <p>
            We believe health education should be accessible, relevant, and
            grounded in young people's lived experiences. Our approach brings
            together learning, storytelling, community engagement, and
            opportunities to take action.
          </p>

          <div className="topic-list">
            <div className="topic-row">
              <span className="topic-number">01</span>
              <div className="topic-copy">
                <span className="topic-title">Learn without stigma</span>
                <span className="topic-description">
                  Make reliable health information easier to understand and
                  access.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <span className="topic-number">02</span>
              <div className="topic-copy">
                <span className="topic-title">Listen to lived experiences</span>
                <span className="topic-description">
                  Create room for different perspectives, personal stories,
                  and honest conversations.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <span className="topic-number">03</span>
              <div className="topic-copy">
                <span className="topic-title">Turn awareness into action</span>
                <span className="topic-description">
                  Connect young people with practical resources, support, and
                  opportunities to contribute.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <p className="eyebrow">03 / OUR PARTNERS</p>

          <h2>Different strengths. A shared commitment.</h2>

          <p>
            Project Heartbeat is a collaborative initiative led by AIESEC in
            UPM and Ruang Malaysia, bringing together youth leadership and
            community-focused health engagement.
          </p>

          <div className="topic-list">
            <div className="topic-row">
              <span className="topic-number">A</span>
              <div className="topic-copy">
                <span className="topic-title">AIESEC in UPM</span>
                <span className="topic-description">
                  Bringing youth leadership, collaboration, and opportunities
                  for young people to take action.
                </span>
              </div>
            </div>

            <div className="topic-row">
              <span className="topic-number">B</span>
              <div className="topic-copy">
                <span className="topic-title">Ruang Malaysia</span>
                <span className="topic-description">
                  Contributing a community-focused perspective on health,
                  wellbeing, and meaningful social impact.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-preview">
          <p className="eyebrow">BE PART OF THE CONVERSATION</p>

          <h2>There is room for you here.</h2>

          <p>
            Explore health topics, hear different perspectives, or find a way
            to get involved with Project Heartbeat.
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
