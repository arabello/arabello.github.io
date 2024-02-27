type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return <div className="container-centered d-flex flex-column p-1 p-md-3 pt-md-4">{children}</div>;
}
