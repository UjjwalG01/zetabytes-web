"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image, { StaticImageData } from "next/image";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface ExpertCardProps {
  image: StaticImageData | string;
  name: string;
  position: string;
  links: string[];
}

const socials = [
  { icon: FaFacebook, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: LuLinkedin, link: "#" },
  { icon: BsTwitterX, link: "#" },
];

const showVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: "100%",
  },
};

export const ExpertCard = ({
  image,
  name,
  position,
  links,
}: ExpertCardProps) => {
  const [showSocial, setShowSocial] = useState(false);
  return (
    <CarouselItem
      className="md:basis-1/2 lg:basis-1/3 pl-4"
      onMouseEnter={() => setShowSocial(true)}
      onMouseLeave={() => setShowSocial(false)}
    >
      <Card className="bg-blue-300">
        <CardHeader className="relative w-full overflow-hidden p-0">
          <Image
            alt="Team_Image"
            src={image}
            layout="responsive"
            objectFit="cover"
            className="w-full h-auto p-0 rounded"
          />
          <div className="bg-accent absolute z-10 p-3 md:p-2 lg:p-3 w-[96%] bottom-3 right-0 rounded-tl-3xl shadow">
            <div className="w-full h-full flex flex-col items-center justify-center space-y-1 py-2">
              <CardTitle className="text-xl md:text-lg xl:text-2xl">
                {name}
              </CardTitle>
              <CardDescription className="text-base md:text-sm xl:text-base">
                {position}
              </CardDescription>
              <motion.div
                animate={showSocial ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                variants={showVariants}
                className={`${
                  showSocial ? "flex" : "hidden"
                } items-center justify-center gap-4 w-full py-2`}
              >
                {socials.map((social) => (
                  <Link
                    key={social.icon.name}
                    href={social.link}
                    className="border border-muted-foreground p-2 rounded-full hover:bg-foreground opacity-80 transition-colors duration-300 hover:text-secondary"
                  >
                    <social.icon />
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </CarouselItem>
  );
};
