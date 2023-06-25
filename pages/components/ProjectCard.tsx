import Card from "./Card";

type Props = {
  href?: string;
  header: React.ReactNode;
  children: React.ReactNode;
};

const ProjectCard = (props: Props) => (
  <Card href={props.href}>
    <div className="d-flex flex-column align-items-center gap-4">
      {props.header}
      <div>{props.children}</div>
    </div>
  </Card>
);

export default ProjectCard;
