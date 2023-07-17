import Card from "./Card";

type Props = {
  href?: string;
  header: React.ReactNode;
  children: React.ReactNode;
};

const ProjectCard = (props: Props) => (
  <Card href={props.href}>
    <div className="d-flex flex-column align-items-center">
      <div className="mt-3 mb-5">{props.header}</div>
      <div>{props.children}</div>
    </div>
  </Card>
);

export default ProjectCard;
