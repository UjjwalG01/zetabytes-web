import Image from "next/image";

import logo from "@/public/logo.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-full my-6">
      <div className="flex items-center justify-center py-12 shadow bg-slate-300 dark:bg-slate-800/80">
        <div className="container grid gap-x-4 md:grid-cols-[2fr_1fr_1fr_2fr]">
          <div className="flex flex-col gap-y-3 py-2">
            <Link href={"/"} className="block w-40">
              <Image alt="Logo" src={logo} />
            </Link>
            <p className="text-base">
              We're a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </p>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-semibold">Pages</h2>
            <ul className="flex flex-col space-y-1 text-base">
              <li>Home</li>
              <li>About</li>
              <li>Internships</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg font-semibold">Utility Pages</h2>
            <ul className="flex flex-col space-y-1 text-base">
              <li>Guide</li>
              <li>Instruction</li>
              <li>Liscence</li>
              <li>Changelog</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="bg-red-400">4</div>
        </div>
      </div>
    </footer>
  );
};
