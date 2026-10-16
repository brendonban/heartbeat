/** [when, title, description]. Leave when "" to show "To be confirmed". */
export const PHASES = [
  ["", "Plan", "AIESEC in UPM and Ruang Malaysia shape the sessions together."],
  ["", "Launch", "An open introductory session for students."],
  ["", "Sessions", "Four sessions, one topic at a time."],
  ["", "Take it further", "Young people lead conversations with their own peers."],
  ["", "Reflect and share", "What we learned, shared openly, and what comes next."],
] as const;

export const SESSIONS = [
  { title: "Introduction to Project Heartbeat", label: "Start here", short: "Introduction", kind: "Open to everyone", desc: "Why health can be hard to talk about, and how to start." },
  { title: "Session 1: HIV & STIs", label: "Session 1", short: "HIV & STIs", kind: "Session", desc: "Prevention, testing, treatment, and living without stigma." },
  { title: "Session 2: Sexual health", label: "Session 2", short: "Sexual health", kind: "Session", desc: "Consent, relationships, and safer sex." },
  { title: "Session 3: Emotional health", label: "Session 3", short: "Emotional health", kind: "Session", desc: "Noticing feelings, and knowing when and where to reach out." },
  { title: "Session 4: Taking it forward", label: "Session 4", short: "Taking it forward", kind: "Session", desc: "Starting these conversations with friends and peers." },
];
