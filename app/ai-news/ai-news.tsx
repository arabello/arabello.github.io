import { Link } from "react-router";
import { Button } from "../components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import aiNews from "./ai-news.json";

export default function AiNews() {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="space-y-4 px-4 sm:px-0">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/">← Home</Link>
      </Button>
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">AI News</h1>
      </div>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        At{" "}
        <a
          href="https://www.buildo.com"
          target="_blank"
          rel="noreferrer"
          className="underline primary"
        >
          buildo
        </a>
        , we run a monthly AI news series (in Italian) to share the latest
        developments from the AI field with a non-technical audience. As I keep
        up with emerging AI technologies, I curate relevant news, adapt it for a
        broader audience, and record short videos with the team's help to share
        on the company's{" "}
        <a
          href="https://www.linkedin.com/company/buildo/"
          target="_blank"
          rel="noreferrer"
          className="underline primary"
        >
          social media channels
        </a>
        . That's fun!
      </p>
      <div className="flex flex-col items-center gap-5">
        <iframe
          src={aiNews[index].url}
          height="480"
          width="270"
          allowFullScreen
        />
        <div
          style={{ width: "270px" }}
          className="flex flex-row justify-between items-center"
        >
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="lg"
            onClick={() => setIndex(index - 1)}
            disabled={index === 0}
          >
            <ChevronLeft />
            Prev
          </Button>
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="lg"
            onClick={() => setIndex(index + 1)}
            disabled={index === aiNews.length - 1}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
