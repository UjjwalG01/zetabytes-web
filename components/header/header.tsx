"use client";

import Image from "next/image";
import { ModeToggle } from "../theme-dropdown";
import ThemeSwitch from "../theme-switch";
import { useEffect, useState } from "react";

import logo from "@/public/logo.png";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { ButtonLink } from "../button-link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false);
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navLists = [
    { link: "About", href: "about" },
    { link: "Internship", href: "internship" },
    { link: "Services", href: "services" },
    { link: "Contact", href: "contact" },
    { link: "FAQs", href: "faqs" },
  ];

  return (
    <header
      className={`w-full min-h-10  ${
        isSticky
          ? "sticky top-0 right-0 left-0 z-50 bg-primary-foreground shadow-sm shadow-gray-300 dark:shadow-gray-600 duration-300"
          : "bg-main"
      }`}
    >
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto py-8 px-6 lg:px-12 relative">
        <Link href={"/"} className="">
          <div className="block w-40 ">
            <Image alt="Logo" className="h-6" src={logo} />
          </div>
        </Link>
        <nav className={`flex gap-x-12 justify-end items-center w-full`}>
          <ul className="hidden lg:flex items-center gap-x-4 xl:gap-x-8">
            {navLists.map((item) => (
              <NavItem
                isSticky={isSticky}
                key={item.href}
                link={item.link}
                href={item.href}
              />
            ))}
          </ul>
          <ul
            className={`w-60 ${
              isMenuOpen ? "flex" : "hidden"
            } flex-col absolute z-10 right-7 top-24 lg:hidden bg-card-foreground dark:bg-muted-foreground gap-y-2 p-4 rounded-md`}
          >
            {navLists.map((item) => (
              <NavItem
                isSticky={isSticky}
                key={item.href}
                link={item.link}
                href={item.href}
              />
            ))}
            <div
              className={`flex flex-col items-start gap-x-3 md:gap-x-4 pl-2 gap-y-3 font-medium text-lg ${
                isSticky ? "text-muted-foreground dark:text-white" : ""
              }`}
            >
              <div className="flex items-center gap-x-3 font-medium text-md md:text-lg ">
                <Link href={"register"} className="whitespace-nowrap">
                  Sign Up
                </Link>
                <ThemeSwitch className="cursor-pointer" />
              </div>
              <ButtonLink
                label="My Dashboard"
                href="/dashboard"
                variant={"outline"}
                className="text-muted-foreground"
              />
            </div>
          </ul>
          <div
            className={`hidden lg:flex items-center gap-x-3 md:gap-x-5 font-medium text-lg ${
              isSticky ? "text-muted-foreground" : ""
            }`}
          >
            <Link href={"register"}>
              <div className="font-medium text-md md:text-lg block whitespace-nowrap">
                Sign Up
              </div>
            </Link>
            <ButtonLink
              label="My Dashboard"
              href="/dashboard"
              variant={"custom"}
              className="shadow-gray-500 shadow-sm dark:hover:bg-slate-700 duration-300"
            />
            <ThemeSwitch className="cursor-pointer" />
          </div>
        </nav>
        <div className="mobile-nav flex flex-col items-center justify-center lg:hidden">
          <Button
            onClick={toggleMenu}
            className={`bg-transparent transition duration-300 ${
              isSticky ? "text-muted-foreground" : "text-white"
            } hover:bg-transparent`}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </Button>
        </div>
      </div>
    </header>
  );
};
