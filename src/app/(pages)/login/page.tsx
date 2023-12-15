import Container from "@/components/atoms/container";
import Typography from "@/components/atoms/typography";

import css from "./style.module.scss";
import GoogleLoginButton from "@/components/atoms/button/google-login-button";

export default function LoginPage() {
  return (
    <Container className={css.root}>
      <Typography variant="sub-heading">Login to Continue</Typography>

      <GoogleLoginButton />
    </Container>
  );
}
