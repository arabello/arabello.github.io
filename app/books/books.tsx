import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Home, Mail } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/books";
import books from "./books.json";

const getOpenLibraryCoverUrl = (isbn: string, size: "S" | "M" | "L" = "M") =>
  `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg?default=false`;

async function fetchCoverBase64(isbn?: string) {
  if (!isbn) return null;
  try {
    const url = getOpenLibraryCoverUrl(isbn, "M");
    const res = await fetch(url);
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") || "image/jpeg";
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    return `data:${contentType};base64,${base64}`;
  } catch {
    return null;
  }
}

export const meta: Route.MetaFunction = () => [
  { title: "Books – Notes by Matteo Pellegrino" },
  { name: "description", content: "Short notes on books I've read." },
];

export async function loader({}: Route.LoaderArgs) {
  const withCovers = await Promise.all(
    books.map(async (b) => ({
      ...b,
      coverDataUrl: await fetchCoverBase64(b.isbn),
    })),
  );
  const booksWithNotes = withCovers.filter((b) => b.notes);
  const booksWithoutNotes = withCovers.filter((b) => !b.notes);
  return { booksWithNotes, booksWithoutNotes };
}

export default function Books({
  loaderData: { booksWithNotes, booksWithoutNotes },
}: Route.ComponentProps) {
  return (
    <div className="space-y-4 px-4 sm:px-0">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">← Home</Link>
      </Button>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Books worth sharing</h1>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        I mostly read non-fiction books, trying to draw links between concepts
        from diverse sources. I advocate for{" "}
        <a
          href="https://fs.blog/reading/"
          target="_blank"
          rel="noreferrer"
          className="underline primary"
        >
          quitting books, different levels of reading and taking notes
        </a>
        . Among others, here's a collection of books that had a significant
        impact on me:
      </p>
      <div className="grid grid-cols-1 gap-4">
        {booksWithNotes.map((b) => (
          <BookCard key={(b.isbn ?? b.title) + b.author} {...b} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {booksWithoutNotes.map((b) => (
          <BookCard key={(b.isbn ?? b.title) + b.author} {...b} />
        ))}
      </div>
      <section className="mt-8 py-6 border-t flex flex-col items-center gap-3 px-4 sm:px-0">
        <p className="text-center text-sm sm:text-base text-muted-foreground">
          Want to talk about a book or share a favorite?
        </p>
        <Button variant="default" size="sm" asChild>
          <a href="mailto:matteo.pelle.pellegrino@gmail.com">
            <Mail className="w-4 h-4" /> Get in touch
          </a>
        </Button>
      </section>
    </div>
  );
}

function BookCard(
  props: (typeof books)[number] & { coverDataUrl?: string | null },
) {
  return (
    <Card className="h-full">
      {props.isbn || props.notes ? (
        <CardContent className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6">
          {props.coverDataUrl ? (
            <img
              src={props.coverDataUrl}
              alt={`Cover of ${props.title}`}
              className="w-16 h-auto sm:w-20 rounded-md border self-center sm:flex-shrink-0"
              loading="lazy"
            />
          ) : null}
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex flex-col">
              <div className="font-semibold text-sm sm:text-base leading-tight">
                {props.title}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                by {props.author}
              </div>
            </div>
            {props.notes ? (
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {props.notes}
              </p>
            ) : null}
          </div>
        </CardContent>
      ) : null}
    </Card>
  );
}
