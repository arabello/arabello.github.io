import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    return ["/", "/books", "/music", "/quotes", "/posts/ts-gadt", "/ai-news"];
  },
} satisfies Config;
