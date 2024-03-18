import { Building2, NotebookIcon, User2Icon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

const numbers = [
  {
    icon: User2Icon,
    number: 90,
    title: "Students",
    description: "We have students form the all over the world.",
  },
  {
    icon: NotebookIcon,
    number: 30,
    title: "Internships",
    description: "We are connected with the students to meet their dreams.",
  },
  {
    icon: Building2,
    number: 50,
    title: "Collabrations",
    description:
      "We have internships programs in the field of future proof jobs.",
  },
];

export const NumbersSection = () => {
  return (
    <section className="w-full h-full mb-12">
      <div className="flex items-center justify-center py-12 container">
        <Card className="space-y-4 grid sm:grid-cols-2 md:grid-cols-3 justify-center w-full py-8 px-4 gap-4 rounded-2xl shadow-md dark:shadow-slate-200 dark:bg-slate-700">
          {numbers.map((num) => (
            <CardHeader
              key={num.title}
              className="flex flex-col items-center justify-center w-full "
            >
              <span className="bg-blue-800/10 dark:bg-blue-100 p-4 rounded-full w-fit">
                <num.icon className="text-blue-900 dark:text-blue-500 w-8 h-8" />
              </span>
              <div className="flex items-center gap-x-3 justify-center">
                <h1 className="text-3xl md:text-4xl font-semibold">
                  {num.number}+
                </h1>
                <p className="text-xl lg:text-2xl font-semibold">{num.title}</p>
              </div>
              <CardContent className="text-center text-base text-muted-foreground">
                {num.description}
              </CardContent>
            </CardHeader>
          ))}
        </Card>
      </div>
    </section>
  );
};
