import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface GoalCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const GoalCard = ({ icon, title, description }: GoalCardProps) => {
  return (
    <Card className="m-0 shadow-md">
      <CardHeader className="flex flex-col m-0">
        <span className=" w-fit p-3 bg-muted-foreground/40 rounded mb-3">
          {icon}
        </span>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base font-medium">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
