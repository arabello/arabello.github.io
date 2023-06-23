type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export const Card = (props: Props) => (
  <div
    className={`card shadow border-0 rounded-3 mt-4 p-4 fs-6 fw-light ${props.className}`}
  >
    {props.href ? (
      <a href={props.href} target="_blank">
        {props.children}
      </a>
    ) : (
      props.children
    )}
  </div>
);
