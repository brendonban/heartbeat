import type { Metadata } from "next";
import Flip from "../components/Flip";
import Reveal from "../components/Reveal";
import { MYTHS } from "../lib/myths";

export const metadata: Metadata = { title: "Myths & facts" };

export default function Explore() {
  const topics = Object.entries(MYTHS);
  return (
    <article className="page">
      <section className="top">
        <h1>Myths &amp; facts</h1>
        <p className="lede">Common things people believe about health. Tap one to see the fact.</p>
      </section>
      {topics.map(([topic, items], i) => (
        i === 0 ? (
          <section key={topic} style={{ paddingTop: 56 }}><h2>{topic}</h2><Flip items={items} /></section>
        ) : (
          <Reveal key={topic}><h2>{topic}</h2><Flip items={items} /></Reveal>
        )
      ))}
      <section style={{ paddingTop: 48 }}>
        <p className="small mute">General information, not medical advice. For a personal health concern, speak to a doctor or clinic.</p>
      </section>
    </article>
  );
}
