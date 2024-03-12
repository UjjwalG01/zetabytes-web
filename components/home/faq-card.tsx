import { useState } from "react";
import { X } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface FaqSectionProps {
  question: string;
  answer: string | React.ReactNode;
}

export const FaqCard = ({ question, answer }: FaqSectionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card className="flex flex-col w-full border-t shadow min-h-[5rem] transition-all duration-200 overflow-hidden py-4">
      <CardHeader
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex justify-between items-start w-full py-1 cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <CardTitle className="text-xl">{question}</CardTitle>
          <div className="bg-outline-foreground bg-blue-200/30 dark:bg-blue-100/10 p-1 ml-2 rounded font-semibold">
            <X
              className={`transition-all duration-200 ${
                showAnswer === true ? "" : "rotate-45"
              } `}
            />
          </div>
        </div>
        <CardDescription
          onClick={(e) => e.stopPropagation()}
          className={`my-4 transition-all duration-200 ${
            showAnswer ? undefined : "hidden"
          }`}
        >
          <span className="text-lg font-medium">{answer}</span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
