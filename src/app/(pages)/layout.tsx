import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import css from "@/styles/app.module.scss";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={css.root}>
      <Navbar className={css.navbar} />

      <article className={css.content}>{children}</article>

      <Footer className={css.footer} />
    </main>
  );
}
