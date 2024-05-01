import Image from "next/image";
import { Card } from "./Card";
import Link from "next/link";

export type BookPreview = {
  title: string;
  base64img?: string;
};

type Props = {
  lastThree: [BookPreview, BookPreview, BookPreview];
};

export const ReadingListCard = ({ lastThree }: Props) => {
  const bookTransforms = [
    {
      transform: `rotate(0deg) translateY(-10px) translateX(90px)`,
      zIndex: 2,
    },
    {
      transform: `rotate(-10deg) translateY(0px) translateX(-60px)`,
      zIndex: 0,
      opacity: 0.95,
    },
    {
      transform: `rotate(10deg) translateY(35px) translateX(-25px)`,
      zIndex: 1,
      opacity: 0.85,
    },
  ];
  return (
    <Card className="pointer">
      <Link href="/books" className="text-reset">
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex mt-3 mb-5">
            {lastThree.map((book, i) => (
              <div key={book.title} style={bookTransforms[i]}>
                <Image
                  src={`data:image/png;base64, ${book.base64img}`}
                  width={90}
                  height={140}
                  alt={`${book.title} book cover`}
                  className="rounded"
                />
              </div>
            ))}
          </div>
          <p>
            I&apos;m currently reading <span className="fw-bolder">{lastThree[0].title}</span> and{" "}
            <span className="fw-bolder">{lastThree[1].title}</span>. My last read was{" "}
            <span className="fw-bolder">{lastThree[2].title}</span>.
          </p>
          <div className="align-self-start">
            Take a look at my <span className="text-primary">reading </span> list suggestions.
          </div>
        </div>
      </Link>
    </Card>
  );
};
