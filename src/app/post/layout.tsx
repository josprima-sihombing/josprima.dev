import classNames from "classnames";
import BackButton from "@/components/atoms/button/back-button";
import Container from "@/components/atoms/container";
import Footer from "@/components/sections/footer";

import css from "@/styles/app.module.scss";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cn = classNames(css.root);

  return (
    <main className={cn}>
      <article className={css.content}>
        <Container>
          <div style={{ padding: "0.8rem 1.5rem" }}>
            <BackButton style={{ marginTop: "1.5rem" }} />
          </div>

          <div
            style={{
              padding: "0.8rem 1.5rem",
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
