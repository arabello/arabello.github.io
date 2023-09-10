type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = (props: Props) => (
  <div
    className={`card shadow-sm border-0 rounded-3 mt-4 p-4 fs-6 fw-light ${props.className}`}
  >
    {props.children}
  </div>
);
