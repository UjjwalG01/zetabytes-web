"use client";

import dark from "@/public/black-bg.jpg";
import light from "@/public/white-bg.jpg";
import { useTheme } from "next-themes";
import Image from "next/image";

interface PageProps {
  label: string;
}

export const PageHead = ({ label }: PageProps) => {
  const { theme } = useTheme();
  const bgImg = theme === "light" ? light : dark;

  return (
    <div className="relative w-full h-[30vh]">
      <div className="w-full h-full flex items-end pb-10 justify-center absolute bg-head">
        <h1 className="text-4xl font-bold text-white">{label}</h1>
      </div>
    </div>
  );
};
