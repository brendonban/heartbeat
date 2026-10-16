import type { Metadata } from "next";
import WhyStats from "../components/WhyStats";
import Flip from "../components/Flip";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Why it matters" };

const BARRIERS: [string, string, string][] = [
  ["Stigma", "I worry about what people will think if I ask.", "Questions about health are normal. Asking is how we look after ourselves and each other."],
  ["Embarrassment", "“It’s too awkward to talk about.”", "It gets easier with practice. Starting with one trusted person is enough."],
  ["Not knowing where to go", "I don’t know where to get tested or who to talk to.", "HIV testing is free at government health clinics, and support lines are open every day."],
];

export default function Why() {
  return (
    <article className="page">
      <section className="top">
        <h1>Why it matters</h1>
        <p className="lede">Most new HIV cases in Malaysia are among young adults. Share of new cases by age:</p>
        <WhyStats />
      </section>
      <Reveal>
        <h2>What gets in the way</h2>
        <p className="mute">Talking about health can feel hard, for understandable reasons. Tap one to see it in a different light.</p>
        <Flip items={BARRIERS} labels={["what holds us back", "another way to see it"]} />
      </Reveal>
    </article>
  );
}
