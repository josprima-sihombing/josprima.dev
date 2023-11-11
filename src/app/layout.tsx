import type { Metadata } from "next";

import "@/styles/globals.css";
import { openSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Josprima.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
