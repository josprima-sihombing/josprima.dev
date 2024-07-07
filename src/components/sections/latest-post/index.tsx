import Container from "@/components/atoms/container";
import Typography from "@/components/atoms/typography";

import Grid from "@/components/atoms/grid";
import Row from "@/components/atoms/row";
import { posts } from "@/data/posts/posts";
import PostItem from "./post-item";
import css from "./style.module.scss";

export default function LatestPost() {
  return (
    <Container className={css.root}>
      <Row>
        <Typography variant="section-title" style={{ marginBottom: "32px" }}>
          Latest Post
        </Typography>
      </Row>

      <Grid column={3}>
        {posts.map((post) => (
          <PostItem
            key={post.slug}
            createdAt={post.createdAt}
            readingTime={post.readingTime}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </Grid>
    </Container>
  );
}
