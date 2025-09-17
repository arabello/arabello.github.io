import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/post";
import posts from "./posts.json";
import { Button } from "~/components/ui/button";

type Post = {
  slug: string;
  title: string;
  date: string;
  htmlPath: string;
  description?: string;
};

export async function loader({ params }: Route.LoaderArgs) {
  const post = posts.find((p) => p.slug === params.slug);
  return { post };
}

export default function Post({ loaderData: { post } }: Route.ComponentProps) {
  const [html, setHtml] = useState<string>("");

  function enhancePostHtml(rawHtml: string): string {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(rawHtml, "text/html");

      const appendClasses = (selector: string, classes: string) => {
        doc.querySelectorAll(selector).forEach((el) => {
          const existing = el.getAttribute("class");
          el.setAttribute(
            "class",
            [existing, classes].filter(Boolean).join(" "),
          );
        });
      };

      // Headings
      appendClasses(
        "h1",
        "text-4xl font-bold tracking-tight text-balance mt-10 py-4",
      );
      appendClasses(
        "h2",
        "scroll-m-20 text-3xl font-semibold tracking-tight mt-10 first:mt-0",
      );
      appendClasses(
        "h3",
        "scroll-m-20 text-2xl font-semibold tracking-tight mt-8",
      );
      appendClasses(
        "h4",
        "scroll-m-20 text-xl font-semibold tracking-tight mt-6",
      );

      // Text elements
      appendClasses("p", "leading-7");
      appendClasses("a", "underline underline-offset-4 hover:text-primary/80");
      appendClasses("hr", "my-8 border-border");
      appendClasses("img", "rounded-md border");

      // Lists
      appendClasses("ul", "my-6 ml-6 list-disc [&>li]:mt-2");
      appendClasses("ol", "my-6 ml-6 list-decimal [&>li]:mt-2");

      // Blockquote
      appendClasses(
        "blockquote",
        "mt-6 border-l-2 pl-6 italic text-muted-foreground",
      );

      // Code blocks and inline code
      appendClasses("pre", "rounded-lg bg-muted p-4 text-sm overflow-x-auto");
      appendClasses("pre code", "bg-transparent p-0 text-inherit");
      // Inline code that is not inside pre
      doc.querySelectorAll("code").forEach((el) => {
        if (
          el.parentElement &&
          el.parentElement.tagName.toLowerCase() !== "pre"
        ) {
          const existing = el.getAttribute("class");
          el.setAttribute(
            "class",
            [existing, "rounded bg-muted px-1 py-0.5 text-xs"]
              .filter(Boolean)
              .join(" "),
          );
        }
      });

      return doc.body.innerHTML;
    } catch {
      return rawHtml;
    }
  }

  useEffect(() => {
    if (!post) return;
    fetch(`/content/${post.htmlPath}`)
      .then((r) => r.text())
      .then((raw) => setHtml(enhancePostHtml(raw)));
  }, [post]);

  if (!post)
    return <div className="text-muted-foreground">Post not found.</div>;

  return (
    <article className="space-y-4">
      <div>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/">← Home</Link>
        </Button>
      </div>
      <div className="text-2xl font-bold">{post.title}</div>
      <div className="text-xs text-muted-foreground">{post.date}</div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}

export const meta: Route.MetaFunction = ({ data }) => {
  const p = data?.post as { title: string; description?: string } | undefined;
  return [
    {
      title: p?.title
        ? `${p.title} – Matteo Pellegrino`
        : "Post – Matteo Pellegrino",
    },
    { name: "description", content: p?.description ?? "Blog post" },
  ];
};
