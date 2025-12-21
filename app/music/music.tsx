import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/music";
import { tracks } from "./tracks";
import { match } from "ts-pattern";

export const meta: Route.MetaFunction = () => [
  { title: "Music – Notes by Matteo Pellegrino" },
  { name: "description", content: "DJ mixes and music projects." },
];

export default function Music() {
  return (
    <div className="space-y-4 px-4 sm:px-0">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">← Home</Link>
      </Button>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">Music & DJ Mixes</h1>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        One of my biggest passions is electronic music. I started DJing when I
        was young, and I still do it today as a creative way to unwind alone or
        with my friends. Here are a few mixes I've made just for fun.
      </p>
      <div className="flex flex-col items-center gap-16 w-full mt-10">
        {tracks.map((track) =>
          match(track)
            .with({ type: "youtube" }, (t) => (
              <YoutubeFrame url={t.url} key={t.url} />
            ))
            .with({ type: "soundcloud" }, (t) => (
              <SoundcloudFrame url={t.url} key={t.url} />
            ))
            .exhaustive(),
        )}
      </div>
      <section className="mt-8 py-6 border-t flex flex-col items-center gap-3 px-4 sm:px-0">
        <p className="text-center text-sm sm:text-base text-muted-foreground">
          Want to talk about music or share a mix?
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

function SoundcloudFrame({ url }: { url: string }) {
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <div style={{ width: "100%", borderRadius: 8 }}>
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={embedUrl}
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineHeight: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/matteo-pellegrino"
          title="Pelle"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Pelle
        </a>{" "}
        ·{" "}
        <a
          href={url}
          title="Void 0"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Void 0
        </a>
      </div>
    </div>
  );
}

function YoutubeFrame({ url }: { url: string }) {
  return (
    <iframe
      width="100%"
      height="360"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      style={{ borderRadius: 8 }}
    ></iframe>
  );
}
