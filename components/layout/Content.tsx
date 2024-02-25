type Props = {
  children: React.ReactNode;
};

export function Content({ children }: Props) {
  return <div className="container-centered d-flex flex-column p-3 pt-4">{children}</div>;
}
