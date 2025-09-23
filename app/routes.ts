import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("/books", "./books/books.tsx"),
  route("/posts/:slug", "./posts/post.tsx"),
  route("/ai-news", "./ai-news/ai-news.tsx"),
] satisfies RouteConfig;
