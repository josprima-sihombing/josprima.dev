import { posts } from "@/data/posts/posts";
import { readFile } from "fs/promises";
import css from "./style.module.scss";

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

const getPostContent = async (slug: string) => {
  const postFile = await readFile(`src/data/posts/contents/${slug}.html`, {
    encoding: "utf-8",
  });

  return postFile;
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const content = await getPostContent(params.slug);

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={css.root} />
  );
}
