import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 bg-emerald-500/20 p-3 rounded-md text-emerald-500 text-sm">
      <CheckCircle2 className="size-4" />
      {message}
    </div>
  );
};
