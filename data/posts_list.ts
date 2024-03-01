export type Post = {
  title: string;
  publishDate: string;
  tags: string[];
  lastUpdate: string;
  description: string;
};

export const posts: Record<string, Post> = {
  "typescript-algebraic-data-types": {
    title: "Practicing Typescript: Generalized Algebraic Data Types",
    publishDate: "2023-02-25",
    lastUpdate: "2023-02-25",
    tags: ["typescript", "algebraic data types", "pattern matching", "scala"],
    description:
      "How GADT and Pattern Matching look like in Typescript? Let's find out through an hands-on exercise",
  },
};
