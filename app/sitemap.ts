import { MetadataRoute } from "next";
import { posts } from "../data/posts_list";

function postSitemap([slug, post]: [string, (typeof posts)[0]]): MetadataRoute.Sitemap[0] {
  return {
    url: `https://matteopellegrino.dev/posts/${slug}`,
    lastModified: post.lastUpdate,
    changeFrequency: "yearly",
    priority: 1,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...Object.entries(posts).map(postSitemap),
    {
      url: "https://matteopellegrino.dev",
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://matteopellegrino.dev/posts",
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://matteopellegrino.dev/books",
      lastModified: "2024-03-04",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://matteopellegrino.dev/cv",
      lastModified: "2024-03-04",
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.matteopellegrino.dev/night-focus",
      lastModified: "2024-03-04",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
