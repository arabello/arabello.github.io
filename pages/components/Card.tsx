type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const Card = (props: Props) => (
  <div
    className={`card shadow border-0 rounded-3 mt-4 p-4 fs-6 fw-light ${props.className}`}
  >
    {props.href ? (
      <a href={props.href} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    ) : (
      props.children
    )}
  </div>
);

export default Card;
