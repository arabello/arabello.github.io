import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

type Item = {
  title: string;
  subtitle: string;
  caption?: string;
  image?: ComponentProps<typeof Image>;
  link?: ComponentProps<typeof Link>;
};

type Props = {
  items: Array<Item>;
};

export const ItemList = ({ items }: Props) => {
  const makeContent = (item: Item, i: number) => (
    <div className="d-inline-flex align-items-center gap-3">
      {item.image && (
        <div className="flex-shrink-0 text-center p-2 d-md-block d-none">
          <Image {...item.image} />
        </div>
      )}
      <div>
        <div className="fs-5 fw-medium">{item.title}</div>
        <div className="fst-italic text-muted">{item.subtitle}</div>
        {item.caption && <div className="mt-3">{item.caption}</div>}
      </div>
    </div>
  );

  return (
    <ul className="p-0">
      {items.map((item, i) => (
        <li
          key={`${item.title}-${i}`}
          className={`list-group-item pb-2 pt-2 ${i > 0 ? "border-top" : ""}`}
        >
          {item.link ? (
            <Link {...item.link} className="text-black">
              {makeContent(item, i)}
            </Link>
          ) : (
            makeContent(item, i)
          )}
        </li>
      ))}
    </ul>
  );
};
