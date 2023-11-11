import Navbar from "@/components/navbar";

import css from "@/styles/app.module.scss";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={css.root}>
      <Navbar />
      {children}
    </main>
  );
}
