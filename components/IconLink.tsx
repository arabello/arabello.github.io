import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

type IconLink = ComponentProps<typeof Link> & ComponentProps<typeof Image>;

export const IconLink = (props: IconLink) => (
  <Link {...props}>
    <Image {...props} />
  </Link>
);
