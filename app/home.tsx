import {
  BookIcon,
  BrainIcon,
  ExternalLinkIcon,
  FileUser,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { Route } from "./+types/home";
import { H1 } from "./components/ui/H1";
import { H2 } from "./components/ui/H2";
import posts from "./posts/posts.json";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { cn } from "./lib/utils";

export const meta: Route.MetaFunction = () => [
  { title: "Matteo Pellegrino – Home" },
  {
    name: "description",
    content:
      "I'm a Product-minded Fullstack Engineer. I love bootstrapping digital products and caring about user needs, business impacts and UX. Currently working at Buildo developing GenAI features. Recently, I've been nerding on evaluation harnesses for AI systems.",
  },
];

const projects = [
  {
    title: "Akora",
    description: "An auditory app, to get into the Flow State.",
    link: "https://www.matteopellegrino.dev/akora",
    external: true,
  },
  {
    title: "Espanso Hub",
    description: "Web hub for Espanso packages.",
    link: "https://hub.espanso.org",
    external: true,
  },
  {
    title: "Dokey",
    description: "University incubator (Almacube) student project.",
    link: "https://www.matteopellegrino.dev/dokey-web",
    external: true,
  },
];

export async function loader() {
  return {
    projects,
    posts,
  };
}

export default function Home({
  loaderData: { projects, posts },
}: Route.ComponentProps) {
  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="flex flex-row justify-center gap-4">
        <Button variant="ghost" size="default" asChild>
          <Link to="/books">
            <BookIcon /> Reading List
          </Link>
        </Button>
        <Button variant="ghost" size="default" asChild>
          <Link to="/ai-news">
            <BrainIcon /> AI News
          </Link>
        </Button>
        <Button variant="ghost" size="default" asChild>
          <a
            href="assets/matteo-pellegrino-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <FileUser /> Resume
          </a>
        </Button>
      </div>
      {/* Intro */}
      <section className="grid grid-cols-1 gap-8 sm:gap-12 items-start">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-4">
            <H1>Hi, I'm Matteo</H1>
            <p className="text-sm sm:text-md text-muted-foreground leading-relaxed">
              I'm a Product-minded Fullstack Engineer. I love bootstrapping
              digital products and caring about user needs, business impacts and
              UX. Currently working at{" "}
              <a
                target="_blank"
                href="https://www.buildo.com"
                className="underline"
              >
                buildo
              </a>{" "}
              developing GenAI features. Recently, I've been nerding on{" "}
              <a
                target="_blank"
                href="https://www.oreilly.com/radar/escaping-poc-purgatory-evaluation-driven-development-for-ai-systems/"
                className="underline"
              >
                evaluation harnessing
              </a>{" "}
              for AI systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-row justify-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/arabello"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/mttpll"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
              </Button>
            </div>
            <div className="flex flex-row justify-center gap-3">
              <Button variant="default" size="sm" asChild>
                <a href="mailto:matteo.pelle.pellegrino@gmail.com">
                  <Mail /> Get in touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="space-y-4">
        <H2>Posts</H2>
        <div className="flex flex-col gap-2 sm:gap-3">
          {posts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((post, index) => (
              <div key={index} className="py-2 sm:py-3">
                <Link
                  to={post.url || `/posts/${post.slug}`}
                  target={post.url ? "_blank" : undefined}
                  rel={post.url ? "noreferrer" : undefined}
                  className="group flex items-start justify-between gap-3 min-h-[44px] sm:min-h-auto"
                >
                  <div className="flex flex-col gap-1 hover:underline flex-1">
                    <span className="font-medium text-sm sm:text-base">
                      {post.title}
                    </span>
                    {post.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">
                        {post.description}
                      </p>
                    )}
                  </div>
                  {post.url && (
                    <ExternalLinkIcon className="w-4 h-4 shrink-0 opacity-60 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 mt-1" />
                  )}
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* Old Projects */}
      <section className="space-y-4">
        <div className="space-y-4">
          <H2>Old Projects</H2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "block",
                  // Center the element if it's in the second row and alone
                  projects.length % 2 === 1 && index === projects.length - 1
                    ? "sm:col-span-2 sm:w-1/2 sm:mx-auto"
                    : "",
                )}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <CardAction>
                      <ExternalLinkIcon className="w-4 h-4" />
                    </CardAction>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
