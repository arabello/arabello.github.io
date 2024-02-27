export type Post = {
  title: string;
  lastUpdate: string;
  description: string;
};

export const posts: Record<string, Post> = {
  "typescript-algebraic-data-types": {
    title: "Practicing Typescript: Generalized Algebraic Data Types",
    lastUpdate: "2023-02-25",
    description:
      "How GADT and Pattern Matching look like in Typescript? Let's find out through an hands-on exercise",
  },
};
