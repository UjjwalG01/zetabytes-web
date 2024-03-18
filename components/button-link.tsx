import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface ButtonLinkProps {
  href: string;
  label: string;
  bgColor?: string;
  color?: string;
  className?: string;
  variant?:
    | "default"
    | "custom"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

export const ButtonLink = ({
  href,
  label,
  bgColor,
  color,
  className,
  variant,
}: ButtonLinkProps) => {
  return (
    <div className={cn("flex items-center justify-center", bgColor)}>
      <Link href={href}>
        <Button
          size={"sm"}
          variant={variant}
          className={cn(
            "rounded-full outline-none border-none px-4 py-2 font-semibold text-base md:text-md",
            color,
            className
          )}
        >
          {label}
        </Button>
      </Link>
    </div>
  );
};
