import { MetadataRoute } from "next";
import { posts } from "../data/posts_list";

function makeUrl(...paths: string[]): string {
  const path = paths.join("/");
  return `https://www.matteopellegrino.dev/${path}${paths.length > 0 ? "/" : ""}`;
}

function postSitemap([slug, post]: [string, (typeof posts)[0]]): MetadataRoute.Sitemap[0] {
  return {
    url: makeUrl(slug),
    lastModified: post.lastUpdate,
    changeFrequency: "yearly",
    priority: 1,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.entries(posts).map(postSitemap),
    {
      url: makeUrl(),
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.matteopellegrino.dev//",
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: makeUrl("posts"),
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: makeUrl("night-focus"),
      lastModified: "2024-03-04",
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
