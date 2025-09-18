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

      // Headings - Mobile responsive
      appendClasses(
        "h1",
        "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-balance mt-8 sm:mt-10 py-3 sm:py-4",
      );
      appendClasses(
        "h2",
        "scroll-m-20 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mt-8 sm:mt-10 first:mt-0",
      );
      appendClasses(
        "h3",
        "scroll-m-20 text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight mt-6 sm:mt-8",
      );
      appendClasses(
        "h4",
        "scroll-m-20 text-base sm:text-lg lg:text-xl font-semibold tracking-tight mt-4 sm:mt-6",
      );

      // Text elements - Mobile responsive
      appendClasses(
        "p",
        "leading-6 sm:leading-7 text-sm sm:text-base break-words",
      );
      appendClasses(
        "a",
        "underline underline-offset-4 hover:text-primary/80 break-all hyphens-auto",
      );
      appendClasses("hr", "my-6 sm:my-8 border-border");
      appendClasses("img", "rounded-md border w-full h-auto max-w-full");

      // Handle potential overflow elements
      appendClasses("sup", "text-xs break-words");
      appendClasses("em", "break-words");
      appendClasses(
        "table",
        "w-full max-w-full overflow-x-auto block whitespace-nowrap",
      );
      appendClasses("td, th", "break-words max-w-0");

      // Lists - Mobile responsive
      appendClasses(
        "ul",
        "my-4 sm:my-6 ml-4 sm:ml-6 list-disc [&>li]:mt-1 sm:[&>li]:mt-2 text-sm sm:text-base",
      );
      appendClasses(
        "ol",
        "my-4 sm:my-6 ml-4 sm:ml-6 list-decimal [&>li]:mt-1 sm:[&>li]:mt-2 text-sm sm:text-base",
      );

      // Blockquote - Mobile responsive
      appendClasses(
        "blockquote",
        "mt-4 sm:mt-6 border-l-2 pl-4 sm:pl-6 italic text-muted-foreground text-sm sm:text-base",
      );

      // Code blocks and inline code - Mobile responsive
      appendClasses(
        "pre",
        "rounded-lg bg-muted p-3 sm:p-4 text-xs sm:text-sm overflow-x-auto my-4 sm:my-6 max-w-full whitespace-pre-wrap break-words",
      );
      appendClasses(
        "pre code",
        "bg-transparent p-0 text-inherit break-words whitespace-pre-wrap",
      );
      // Inline code that is not inside pre - Mobile responsive
      doc.querySelectorAll("code").forEach((el) => {
        if (
          el.parentElement &&
          el.parentElement.tagName.toLowerCase() !== "pre"
        ) {
          const existing = el.getAttribute("class");
          el.setAttribute(
            "class",
            [
              existing,
              "rounded bg-muted px-1 py-0.5 text-xs sm:text-sm break-words",
            ]
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
    <article className="space-y-6 sm:space-y-8">
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="text-sm">
          <Link to="/">← Home</Link>
        </Button>
      </div>
      <header className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
          {post.title}
        </h1>
        <div className="text-sm sm:text-base text-muted-foreground">
          {post.date}
        </div>
      </header>
      <div
        className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:scroll-mt-20 prose-pre:overflow-x-auto prose-pre:text-xs sm:prose-pre:text-sm overflow-hidden"
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
