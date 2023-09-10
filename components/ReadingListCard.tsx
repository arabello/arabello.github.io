import Image from "next/image";
import { Card } from "./Card";
import Link from "next/link";

export type BookPreview = {
  title: string;
  base64img?: string;
};

type Props = {
  current: BookPreview;
  last: BookPreview;
  secondLast: BookPreview;
};

export const ReadingListCard = ({ current, last, secondLast }: Props) => {
  const bookTransforms = [
    {
      transform: `rotate(-10deg) translateY(20px) translateX(25px)`,
      zIndex: 0,
      opacity: 0.95,
    },
    {
      transform: `rotate(0deg) translateY(-10px) translateX(0px)`,
      zIndex: 2,
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
            {[last, current, secondLast].map((book, i) => (
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
            I&apos;m currently reading{" "}
            <span className="fw-bolder">{current.title}</span>, after{" "}
            <span className="fw-bolder">{last.title}</span> and{" "}
            <span className="fw-bolder">{secondLast.title}</span>.
          </p>
          <div className="align-self-start">
            Take a look at my suggestion{" "}
            <span className="text-primary">reading </span> list.
          </div>
        </div>
      </Link>
    </Card>
  );
};
