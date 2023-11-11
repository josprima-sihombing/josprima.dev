import InitialLetterAvatar from "@/components/atoms/initial-letter-avatar";
import Row from "@/components/atoms/row";
import Typography from "@/components/atoms/typography";
import formatDate from "@/utils/format-date";
import { MdCircle } from "react-icons/md";

type PostItemProps = {
  title: string;
  createdAt: number;
  author: string;
  readingTime: number; // Reading time in seconds;
};

export default function PostItem({
  author,
  createdAt,
  readingTime,
  title,
}: PostItemProps) {
  return (
    <div>
      <Row>
        <InitialLetterAvatar name={author} />
        <Typography variant="card-title-sm">{author}</Typography>
      </Row>

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
    </div>
  );
}
