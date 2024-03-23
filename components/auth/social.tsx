"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialProps {
  label: string;
}

export const Social = ({ label }: SocialProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-3">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
        className="w-full flex gap-x-2"
      >
        <span className="text-base font-semibold">{label} with </span>
        <FcGoogle className="size-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
        className="w-full flex gap-x-2"
      >
        <span className="text-base font-semibold">{label} with </span>
        <FaGithub className="size-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
        className="w-full flex gap-x-2"
      >
        <span className="text-base font-semibold">{label} with </span>
        <FaLinkedin className="size-5" />
      </Button>
    </div>
  );
};
