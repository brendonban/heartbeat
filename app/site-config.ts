/**
 * Everything you'll want to change lives here.
 * Edit this file, commit, and Vercel redeploys.
 */
export const site = {
  /** Which phase on the Schedule page shows the "Now" tag. -1 = not started, 0–4 = the phases. */
  phase: -1,

  /** Dates for the five sessions on the Schedule page. Leave "" for "Date to be confirmed". */
  dates: ["", "", "", "", ""],

  /** Sign-up form. A button appears on Home and Schedule when url is set (must start with https://). */
  signup: { url: "", label: "Register your interest" },

  /** Contact shown on the About page. Leave email "" to hide it. */
  contact: { name: "", role: "", email: "" },
};

export type Site = typeof site;
