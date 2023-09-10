import { Card } from "./Card";

type Props = {
  href?: string;
  header: React.ReactNode;
  children: React.ReactNode;
};

export const ProjectCard = (props: Props) => (
  <Card>
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="text-reset"
    >
      <div className="d-flex flex-column align-items-center">
        <div className="mt-3 mb-5">{props.header}</div>
        <div>{props.children}</div>
      </div>
    </a>
  </Card>
);
