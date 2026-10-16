import Link from "next/link";
import Kicker from "./components/Kicker";
import LineOfChoice from "./components/LineOfChoice";
import SignupButton from "./components/SignupButton";

export default function Home() {
  return (
    <article className="page">
      <section className="top">
        <Kicker />
        <h1 className="h1w" aria-label="Project Heartbeat">
          <span>Project</span> <span>Heartbeat</span>
        </h1>
        <p className="by">Run by <b>AIESEC in UPM</b> with <b>Ruang Malaysia</b>.</p>
        <p className="lede">
          Youth-led sessions that help young people in Malaysia talk openly about HIV, sexual health and emotional health, and know where to find support.
        </p>
        <LineOfChoice />
        <div className="row">
          <SignupButton />
          <Link className="btn line" href="/why">Why it matters</Link>
          <Link className="btn line" href="/schedule">See the schedule</Link>
        </div>
      </section>
    </article>
  );
}
