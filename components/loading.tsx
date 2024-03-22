import { Loader2 } from "lucide-react";

export const LoadingSkeleton = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-20">
      <div className="flex flex-col items-center justify-center">
        <span>
          <Loader2 size={30} className="text-blue-500 bg-red-500" />
        </span>
      </div>
    </div>
  );
};
