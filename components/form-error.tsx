import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 bg-destructive/20 p-3 rounded-md text-destructive text-sm">
      <BsExclamationTriangle className="size-4" />
      {message}
    </div>
  );
};
