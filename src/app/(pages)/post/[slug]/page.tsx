import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

export default function PostDetailPage({ params }: PostDetailPageProps) {
  return <h1>{params.slug}</h1>;
}
