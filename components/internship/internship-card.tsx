import { Clock, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  duration: string;
  applyLink: string;
}

export const InternshipCard = ({
  title,
  company,
  type,
  location,
  description,
  duration,
  applyLink,
}: InternshipCardProps) => {
  return (
    <Card className="cursor-pointer shadow hover:shadow-md dark:hover:shadow-slate-500 transition-all duration-500 ease-out">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <span className="text-muted-foreground font-semibold">{company}</span>
        <CardDescription className="flex items-center gap-x-4 font-medium">
          <span className="flex items-center justify-center gap-x-1">
            <MdLocationPin />
            {location}
          </span>
          <span className="flex items-center justify-center gap-x-1">
            <BsFillJournalBookmarkFill /> {type}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex items-center justify-between text-muted-foreground">
        <span className="flex items-center justify-center gap-x-1.5">
          <Clock className="size-4" /> {duration}
        </span>
        <Link
          href={applyLink}
          className="flex items-center justify-center gap-x-1"
        >
          <p className="font-medium">Apply Here</p>
          <MoveRight className="w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};
