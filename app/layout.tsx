import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Project Heartbeat | Health Conversations That Matter",
  description:
    "A youth-led initiative exploring health, identity, and the conversations that matter to young people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
