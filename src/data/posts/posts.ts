import titleToSlug from "@/utils/title-to-slug";

export const posts = [
  {
    createdAt: "2023-11-22T14:14:18.039Z",
    readingTime: 320,
    title: "Hello World",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    createdAt: "2023-11-30T14:14:18.039Z",
    readingTime: 320,
    title: "What do I do as a frontend engineer",
    get slug() {
      return titleToSlug(this.title);
    },
  },
];
