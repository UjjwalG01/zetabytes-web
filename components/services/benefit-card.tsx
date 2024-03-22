import Image, { StaticImageData } from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface PerksCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export const BenefitCard = ({ title, image, description }: PerksCardProps) => {
  return (
    <Card className="py-6 shadow-md transition-all duration-500 ease-out hover:shadow-slate-400 dark:hover:shadow-slate-400">
      <CardHeader className="flex flex-col items-center justify-center space-y-4 text-center">
        <span className="bg-neutral dark:bg-slate-500 w-fit p-6 rounded-full">
          <Image alt="Perks_Image" className="size-24 p-2" src={image} />
        </span>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
