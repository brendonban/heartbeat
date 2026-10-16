import type { Metadata } from "next";
import { LINES } from "../lib/lines";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Support" };

export default function Support() {
  return (
    <article className="page">
      <section className="top">
        <h1>Support</h1>
        <p className="lede">If things feel heavy right now, you don&apos;t have to wait for a session. You can reach these lines any time.</p>
        <div className="lines">
          {LINES.map((l) => (
            <a key={l.tel} href={`tel:${l.tel}`}><span>{l.name}<small>{l.note}</small></span><span className="n">{l.num}</span></a>
          ))}
        </div>
      </section>
      <Reveal>
        <h2>Testing and prevention</h2>
        <p className="mute">HIV testing is free at government health clinics (Klinik Kesihatan). PrEP, a daily pill that prevents HIV, is fully subsidised at a growing number of them. Ask at your nearest clinic.</p>
      </Reveal>
    </article>
  );
}
