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
          <div style={{ padding: "12px 24px" }}>
            <BackButton style={{ marginTop: "24px" }} />
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "12px 24px",
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
