import type { Metadata } from "next";
import { site } from "../site-config";
import { PHASES } from "../lib/sessions";
import SessionStepper from "../components/SessionStepper";
import SignupButton from "../components/SignupButton";
import Reveal from "../components/Reveal";
import { safeUrl } from "../lib/safe";

export const metadata: Metadata = { title: "Schedule" };

export default function Schedule() {
  return (
    <article className="page">
      <section className="top">
        <h1>Schedule</h1>
        <p className="lede">How Project Heartbeat runs. Dates will be added as they&apos;re confirmed.</p>
        {safeUrl(site.signup.url) && <div className="row"><SignupButton /></div>}
        <div className="phases">
          {PHASES.map((p, i) => (
            <div key={p[1]} className={`ph ${i === site.phase ? "now" : ""}`}>
              <span className="k" />
              <span className="when">{p[0] || "To be confirmed"}</span>
              <div>
                <h3>{p[1]}{i === site.phase && <span className="now-tag">Now</span>}</h3>
                <p>{p[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Reveal>
        <h2>Sessions</h2>
        <p className="mute">One topic at a time, in a space where every question is welcome.</p>
        <SessionStepper dates={site.dates} />
      </Reveal>
    </article>
  );
}
