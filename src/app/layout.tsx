import type { Metadata } from "next";

import "@/styles/globals.css";
import { openSans, sourceSerif } from "@/fonts";
import classNames from "classnames";
import { ToastProvider } from "@/contexts/toast-context";

export const metadata: Metadata = {
  title: "Josprima.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classList = classNames(
    openSans.className,
    openSans.variable,
    sourceSerif.variable,
  );

  return (
    <html lang="en" className={classList}>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
