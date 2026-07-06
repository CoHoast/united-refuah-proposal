import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "United REFUAH Digital Platform Concept",
  description: "A private proposal preview for the United REFUAH digital member platform.",
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
