import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seemz Like...",
  description: "For kids, By kids.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <nav>

          <Link href="/">Home</Link>

          <Link href="/timeline">Timeline</Link>

          <Link href="/pricing">Pricing</Link>

          <Link href="/goals">Goals</Link>

        </nav>

        <main>{children}</main>

      </body>
    </html>
  );
}
