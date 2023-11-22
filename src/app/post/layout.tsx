import BackButton from "@/components/atoms/button/back-button";
import Container from "@/components/atoms/container";
import Footer from "@/components/sections/footer";

import css from "@/styles/app.module.scss";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={css.root}>
      <article className={css.content}>
        <Container>
          <BackButton style={{ marginTop: "24px" }} />

          <div
            style={{
              marginTop: "24px",
            }}
          >
            {children}
          </div>
        </Container>
      </article>

      <Footer className={css.footer} />
    </main>
  );
}
