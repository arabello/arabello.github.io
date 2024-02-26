import { Card } from "./Card";
import { EmailButton } from "./EmailButton";

type Props = {
  caption: string;
};

export const Footer = (props: Props) => (
  <Card className="d-flex flex-row align-items-center justify-content-between">
    <span>{props.caption}</span>
    <EmailButton />
  </Card>
);
