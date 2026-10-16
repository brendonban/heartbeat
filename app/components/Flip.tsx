"use client";
import { useState } from "react";

/** Tap-to-flip cards: [title, before, after]. Same look as the reference's Barriers list. */
export default function Flip({ items, labels = ["myth", "fact"] }: { items: [string, string, string][]; labels?: [string, string] }) {
  const [on, setOn] = useState<boolean[]>(items.map(() => false));
  return (
    <div className="flip">
      {items.map((b, i) => (
        <button key={b[0]} className="fl" aria-pressed={on[i]} onClick={() => setOn(on.map((v, j) => (j === i ? !v : v)))}>
          <span className="a">{b[0]}</span>
          <span className="s"><em className="dn">{b[1]}</em><em className="up">{b[2]}</em></span>
          <span className="side">{on[i] ? labels[1] : labels[0]}</span>
        </button>
      ))}
    </div>
  );
}
