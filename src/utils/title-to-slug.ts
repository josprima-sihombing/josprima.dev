export default function titleToSlug(title: string) {
  return title
    .trim()
    .replace(/[^a-zA-Z0-9\s]/gi, "")
    .toLowerCase()
    .split(" ")
    .join("-");
}

const title = titleToSlug("Python: A Journey into Data Science");

title;
