import { ComponentProps } from "react";
import { Card } from "./Card";
import { IconLink } from "./IconLink";

type Action = Omit<ComponentProps<typeof IconLink>, "width" | "height">;

type Props = {
  heading: string;
  subheading?: string;
  actions: {
    right: Action;
    left?: Action;
  };
};

export const Header = (props: Props) => (
  <Card className="d-flex flex-row align-items-center gap-3">
    {props.actions.left && (
      <div className="text-center">
        <IconLink {...props.actions.left} width={24} height={24} />
      </div>
    )}
    <div className="d-flex flex-column flex-grow-1">
      <div className="fs-4 fw-bold text-primary flex-grow-1">{props.heading}</div>
      {props.subheading && <div className="fs-6 fw-light text-muted">{props.subheading}</div>}
    </div>
    <div className="text-center">
      <IconLink {...props.actions.right} width={24} height={24} />
    </div>
  </Card>
);
