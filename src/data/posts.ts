import titleToSlug from "@/utils/title-to-slug";

export const posts = [
  {
    id: "abc123",
    createdAt: 1678900000000,
    readingTime: 320,
    title: "The Art of Code Optimization",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    id: "ghi789",
    createdAt: 1690123000000,
    readingTime: 750,
    title: "Python: A Journey into Data Science",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    id: "def456",
    createdAt: 1684567000000,
    readingTime: 550,
    title: "Exploring the Wonders of JavaScript ES2022",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    id: "pqr678",
    createdAt: 1707092000000,
    readingTime: 880,
    title: "Cybersecurity in the Age of IoT",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    id: "jkl012",
    createdAt: 1695780000000,
    readingTime: 420,
    title: "Responsive Web Design Best Practices",
    get slug() {
      return titleToSlug(this.title);
    },
  },
  {
    id: "mno345",
    createdAt: 1701436000000,
    readingTime: 680,
    title: "The Evolution of Frontend Frameworks",
    get slug() {
      return titleToSlug(this.title);
    },
  },
];
