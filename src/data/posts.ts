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
];
