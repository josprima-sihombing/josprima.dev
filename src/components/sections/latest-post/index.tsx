import Container from "@/components/atoms/container";
import Typography from "@/components/atoms/typography";

import css from "./style.module.scss";
import PostItem from "./post-item";
import Grid from "@/components/atoms/grid";
import Row from "@/components/atoms/row";

const dummyPosts = [
  {
    id: "abc123",
    author: "Alice Johnson",
    createdAt: 1678900000000,
    readingTime: 320,
    title: "The Art of Code Optimization",
  },
  {
    id: "ghi789",
    author: "Charlie Brown",
    createdAt: 1690123000000,
    readingTime: 750,
    title: "Python: A Journey into Data Science",
  },
  {
    id: "def456",
    author: "Bob Smith",
    createdAt: 1684567000000,
    readingTime: 550,
    title: "Exploring the Wonders of JavaScript ES2022",
  },
  {
    id: "pqr678",
    author: "Fiona Martinez",
    createdAt: 1707092000000,
    readingTime: 880,
    title: "Cybersecurity in the Age of IoT",
  },
  {
    id: "jkl012",
    author: "Diana Williams",
    createdAt: 1695780000000,
    readingTime: 420,
    title: "Responsive Web Design Best Practices",
  },
  {
    id: "mno345",
    author: "Elijah Taylor",
    createdAt: 1701436000000,
    readingTime: 680,
    title: "The Evolution of Frontend Frameworks",
  },
];

export default function LatestPost() {
  return (
    <Container className={css.root}>
      <Row>
        <Typography variant="section-title" style={{ marginBottom: "32px" }}>
          Latest Post
        </Typography>
      </Row>

      <Grid column={3}>
        {dummyPosts.map((post) => (
          <PostItem
            key={post.id}
            author={post.author}
            createdAt={post.createdAt}
            readingTime={post.readingTime}
            title={post.title}
          />
        ))}
      </Grid>
    </Container>
  );
}
