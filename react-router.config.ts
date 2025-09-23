import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  async prerender() {
    return ["/", "/books", "/posts/ts-gadt", "/ai-news"];
  },
} satisfies Config;
