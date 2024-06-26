"use client";

import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface SocialProps {
  label: string;
}

export const Social = ({ label }: SocialProps) => {
  const onClick = async (provider: "google" | "github") => {
    await signIn(provider, {
      redirect: false,
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
    console.log("logged in");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-2">
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("google")}
        className="w-full flex gap-x-2"
      >
        <FcGoogle className="size-5" />
        <span className="text-base font-semibold">{label} with Google</span>
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => onClick("github")}
        className="w-full flex gap-x-2"
      >
        <FaGithub className="size-5" />
        <span className="text-base font-semibold">{label} with Github</span>
      </Button>
      {/* <Button
        size={"lg"}
        variant={"outline"}
        onClick={() => {}}
        className="w-full flex gap-x-2"
      >
        <FaLinkedin className="size-5" />
        <span className="text-base font-semibold">{label} with LinkedIn</span>
      </Button> */}
    </div>
  );
};
