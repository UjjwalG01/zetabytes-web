import Image from "next/image";

import logo from "@/public/logo.png";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { socialMedias } from "../home/faq-section";

export const Footer = () => {
  return (
    <footer className="w-full h-full">
      <div className="flex flex-col items-center justify-center py-6 lg:py-10 shadow bg-slate-300 dark:bg-slate-800/80">
        <div className="container grid gap-y-2 gap-x-4 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr_2fr]">
          <div className="flex flex-col items-center text-center md:items-start md:text-start gap-y-3 py-2 md:order-1 lg:order-1">
            <Link href={"/"} className="block w-40">
              <Image
                alt="Logo"
                className="grayscale hover:grayscale-0 transition duration-300"
                src={logo}
              />
            </Link>
            <p className="text-base font-medium text-muted-foreground">
              We're a team of strategic creator and digital innovator, united
              focus in our pursuit of mastery and joyful.
            </p>
          </div>
          <div className="flex flex-col gap-y-1 md:order-2 lg:order-2 items-center text-center lg:text-start lg:items-start">
            <h2 className="text-lg font-semibold">Pages</h2>
            <ul className="flex flex-col space-y-[2px] text-muted-foreground font-medium text-base">
              <li>Home</li>
              <li>About</li>
              <li>Internships</li>
              <li>Services</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-1 md:order-4 lg:order-3  items-center text-center lg:text-start lg:items-start">
            <h2 className="text-lg font-semibold">Utility Pages</h2>
            <ul className="flex flex-col space-y-[2px] text-muted-foreground font-medium text-base">
              <li>Guide</li>
              <li>Instruction</li>
              <li>Liscence</li>
              <li>Changelog</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="w-full md:order-2 lg:order-4">
            <div className="flex flex-col gap-y-3 items-center text-center md:items-start md:text-start">
              <h2 className="text-lg font-semibold ml-2">Subscribe</h2>
              <div className="flex items-center w-full max-w-xl gap-2 bg-secondary py-2 px-4 rounded-full">
                <Input
                  type="email"
                  placeholder="johhdoe@gmail.com"
                  className="bg-secondary border-0 text-base outline-none focus-visible:ring-0 focus-visible:ring-transparent focus:ring-0 focus:ring-transparent"
                  // className="focus:outline-none focus:ring-0 focus:bg-transparent"
                />
                <Button
                  variant={"outline"}
                  className="rounded-full"
                  size={"lg"}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col gap-y-4">
          <hr className="bg-accent-foreground/60 h-[3px]" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-4">
            <div className="flex flex-col items-center text-center md:text-start md:items-start">
              <h2 className="font-semibold lg:text-lg">Copyright By</h2>
              <p className="text-base text-muted-foreground">
                Developed by: Ujjwal Giri
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:text-start md:items-start">
              <h2 className="font-semibold lg:text-lg">Contact Us</h2>
              <p className="text-base text-muted-foreground">
                (+977) 9812345647
              </p>
            </div>
            <div className="flex flex-col items-center text-center md:text-start md:items-start">
              <h2 className="font-semibold lg:text-lg">Address</h2>
              <p className="text-base text-muted-foreground">
                Chabahil Kathmandu, 44600 Nepal
              </p>
            </div>
            <div className="flex gap-x-4 justify-center text-center md:text-start md:justify-start">
              {socialMedias.map((media) => (
                <Link key={media.link} href={media.link}>
                  <Image
                    className="w-10 backdrop-filter grayscale hover:grayscale-0 duration-300"
                    alt="Social_Link"
                    src={media.img}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
