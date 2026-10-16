import type { Metadata } from "next";
import { site } from "../site-config";

export const metadata: Metadata = { title: "About" };

export default function About() {
  const c = site.contact;
  return (
    <article className="page">
      <section className="top"><h1>About</h1></section>
      <section style={{ paddingTop: 56 }}>
        <h2>AIESEC in UPM</h2>
        <p className="mute">The Universiti Putra Malaysia chapter of AIESEC, a global, youth-run organisation that develops leadership in young people through hands-on projects. <a href="https://aiesec.my" target="_blank" rel="noopener">aiesec.my</a></p>
      </section>
      <section style={{ paddingTop: 48 }}>
        <h2>Ruang Malaysia</h2>
        <p className="mute">A community health and wellbeing organisation in the Klang Valley, running community-led programmes that help people live healthy, safe lives with dignity, free from stigma. <a href="https://ruangmalaysia.org" target="_blank" rel="noopener">ruangmalaysia.org</a></p>
      </section>
      {c.email && (
        <section style={{ paddingTop: 48 }}>
          <h2>Contact</h2>
          <p className="mute">{[c.name, c.role].filter(Boolean).join(", ")}{(c.name || c.role) && <br />}<a href={`mailto:${c.email}`}>{c.email}</a></p>
        </section>
      )}
    </article>
  );
}
