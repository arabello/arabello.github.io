import { Button } from "~/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/quotes";
import quotes from "./quotes.json";

export const meta: Route.MetaFunction = () => [
  { title: "Quotes – Notes by Matteo Pellegrino" },
  { name: "description", content: "Quotes I live by." },
];

export async function loader({}: Route.LoaderArgs) {
  return { quotes };
}

export default function Quotes({
  loaderData: { quotes },
}: Route.ComponentProps) {
  return (
    <div className="space-y-4 px-4 sm:px-0">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">← Home</Link>
      </Button>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Quotes I live by</h1>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        A collection of quotes that struck me, from famous and common people.
        Some make me think, others remind me what matters.
      </p>
      <div className="space-y-6">
        {quotes.map((q, index) => (
          <QuoteCard key={index} {...q} />
        ))}
      </div>
      <section className="mt-8 py-6 border-t flex flex-col items-center gap-3 px-4 sm:px-0">
        <p className="text-center text-sm sm:text-base text-muted-foreground">
          Got a quote that made you{" "}
          <a
            href="https://adamgrant.net/podcasts/rethinking/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            rethink
          </a>
          ? I'd love to hear it!
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

function QuoteCard(props: (typeof quotes)[number]) {
  return (
    <div className="space-y-2">
      <blockquote className="text-sm sm:text-base leading-relaxed italic border-l-4 pl-4 border-muted-foreground/20">
        "{props.quote}"
      </blockquote>
      <cite className="text-xs sm:text-sm text-muted-foreground not-italic">
        —{" "}
        {props.link ? (
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {props.author}
          </a>
        ) : (
          props.author
        )}
      </cite>
    </div>
  );
}
