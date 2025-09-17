import { Outlet, Scripts } from "react-router";

import {
  isRouteErrorResponse,
  Links,
  Meta,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: Route.MetaFunction = () => [
  { title: "Matteo Pellegrino – Software Engineer" },
  {
    name: "description",
    content:
      "Product-minded Software Engineer building and scaling digital products with great UX and solid architecture.",
  },
  { name: "og:title", content: "Matteo Pellegrino – Software Engineer" },
  {
    name: "og:description",
    content:
      "Product-minded Software Engineer building and scaling digital products with great UX and solid architecture.",
  },
  { name: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Matteo Pellegrino",
              url: "https://www.matteopellegrino.dev",
              sameAs: [
                "https://www.linkedin.com/in/mttpll",
                "https://github.com/arabello",
              ],
              jobTitle: "Software Engineer",
            }),
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-foreground">
        <div className="min-h-dvh flex flex-col">
          <main id="content" className="max-w-3xl mx-auto px-4 py-10 flex-1">
            {children}
          </main>
          <footer className="max-w-3xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Matteo Pellegrino
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 max-w-4xl mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
