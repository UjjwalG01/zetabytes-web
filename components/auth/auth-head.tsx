interface AuthHeadProps {
  label: string;
  description: string;
}

export const AuthHead = ({ label, description }: AuthHeadProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-2">
      <div className="flex gap-x-3 items-center text-3xl md:text-4xl font-semibold">
        <h1>Zetabytes</h1>
        <span className="dark:text-main-light text-main-dark">{label}</span>
      </div>
      <p className="text-muted-foreground font-medium text-sm">{description}</p>
    </div>
  );
};
