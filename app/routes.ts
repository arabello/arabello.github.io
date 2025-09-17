import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("/books", "./books/books.tsx"),
  route("/posts/:slug", "./posts/post.tsx"),
] satisfies RouteConfig;
