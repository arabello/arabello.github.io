export type Post = {
  title: string;
  publishDate: string;
  tags: string[];
  lastUpdate: string;
  description: string;
};

export const posts: Record<string, Post> = {
  "ts-gadt": {
    title: "Practicing Typescript: Generalized Algebraic Data Types",
    publishDate: "2024-03-04",
    lastUpdate: "2024-05-04",
    tags: ["typescript", "algebraic data types", "pattern matching", "scala"],
    description:
      "How GADT and Pattern Matching look like in Typescript? Let's find out with an hands-on exercise",
  },
};
