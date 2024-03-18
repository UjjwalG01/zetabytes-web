import Image from "next/image";

import landing from "@/public/about.png";

import { Button } from "../ui/button";

export const HeroEndSection = () => {
  return (
    <section className="w-full py-8 relative">
      <div className="container grid lg:grid-cols-2 gap-x-4 my-4 gap-y-6 rounded-lg relative">
        <div className="w-full max-h-[23rem] relative ml-auto overflow-hidden rounded-lg">
          <Image
            src={landing}
            alt="Landing Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 my-6">
          <div className="flex flex-col gap-y-3 lg:gap-y-4 | relative items-center justify-center text-center">
            {/* <SectionTitle /> */}
            <h2 className={`section-title relative z-10`}>About Us</h2>
            <h1 className="font-semibold text-3xl">Project Mangement</h1>
            <p className="text-base lg:text-lg font-medium">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              accusantium voluptate repudiandae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Soluta, cumque cupiditate. Non qui
              nulla vel eaque, eius incidunt culpa id delectus cupiditate esse?
            </p>
            <Button
              variant={"secondary"}
              size={"sm"}
              className="text-sm sm:text-md py-5 lg:py-6 max-w-80 lg:px-8 uppercase font-semibold bg-main hover:text-black dark:hover:bg-black/80 dark:hover:text-white border-2 border-transparent hover:border-gray-700 transition-colors duration-500"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
