"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSeen } from "./Reveal";

/** Share of new HIV cases in Malaysia by age (MOH). */
const DATA: [string, number][] = [["13–19", 4], ["20–29", 45], ["Other", 51]];
const MAX = 60;
const NUMS = [
  { n: 3185, f: (k: number) => k.toLocaleString("en-MY"), t: "new HIV cases in Malaysia in 2024" },
  { n: 96, f: (k: number) => `${k}%`, t: "of them passed on through sex" },
  { n: 3, f: (k: number) => `${k} in 4`, t: "were aged 20 to 39" },
];

function Count({ n, f, go, delay }: { n: number; f: (k: number) => string; go: boolean; delay: number }) {
  const [k, setK] = useState(n);
  useEffect(() => {
    if (!go || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, start = 0;
    setK(0);
    const t = setTimeout(() => {
      const tick = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / 1100);
        setK(Math.round(n * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 300 + delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [go, n, delay]);
  return <strong>{f(k)}</strong>;
}

export default function WhyStats() {
  const [ref, seen] = useSeen<HTMLDivElement>();
  return (
    <div ref={ref}>
      <div className="bars">
        {DATA.map(([age, v]) => (
          <div key={age} className={`b ${age !== "Other" ? "hot" : ""}`}>
            <span>{age}</span>
            <div className="t">
              <div className="f" style={{ width: seen ? `${(v / MAX) * 100}%` : 0 }} />
            </div>
            <span className="v">{v}%</span>
          </div>
        ))}
      </div>
      <div className="nums">
        {NUMS.map((x, i) => (
          <div key={i}><Count n={x.n} f={x.f} go={seen} delay={i * 200} /><span>{x.t}</span></div>
        ))}
      </div>
      <p className="small" style={{ marginTop: 24 }}>HIV testing is free at government health clinics. <Link href="/support">See where to get support</Link>.</p>
      <p className="small mute" style={{ marginTop: 8 }}>Ministry of Health Malaysia, via CodeBlue and New Straits Times (2025).</p>
    </div>
  );
}
