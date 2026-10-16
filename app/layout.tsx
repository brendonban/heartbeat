import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./global.css";

export const metadata: Metadata = {
  title: "💚 Project Heartbeat",
  description:
    "A youth-led project exploring health and the conversations that matter to young people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
