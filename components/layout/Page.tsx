type Props = {
  children: React.ReactNode;
};

export function Page({ children }: Props) {
  return (
    <div className="min-vh-100">
      <div className="bg-gradient-custom"></div>
      {children}
    </div>
  );
}
