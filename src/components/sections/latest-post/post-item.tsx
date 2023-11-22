import Row from "@/components/atoms/row";
import Typography from "@/components/atoms/typography";
import formatDate from "@/utils/format-date";
import Link from "next/link";
import { MdCircle } from "react-icons/md";

import css from "./style.module.scss";

type PostItemProps = {
  title: string;
  createdAt: string | number;
  readingTime: number; // Reading time in seconds;
  slug: string;
};

export default function PostItem({
  createdAt,
  readingTime,
  title,
  slug,
}: PostItemProps) {
  return (
    <Link href={`/post/${slug}`} className={css.item}>
      <Typography variant="card-title" style={{ marginBottom: "8px" }}>
        {title}
      </Typography>

      <Row>
        <Typography variant="caption">{formatDate(createdAt)}</Typography>
        <Typography variant="caption" style={{ fontSize: "4px" }}>
          <MdCircle />
        </Typography>
        <Typography variant="caption">{readingTime}</Typography>
      </Row>
    </Link>
  );
}
