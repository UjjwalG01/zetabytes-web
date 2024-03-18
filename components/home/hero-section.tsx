import Link from "next/link";
import { ButtonLink } from "../button-link";
import { Button } from "../ui/button";
import Image from "next/image";

import student from "@/public/student.png";
import background from "@/app/_assets/background.svg";

export const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-main text-white">
      {/* <Image alt="" src={background} /> */}
      <div className="container h-full space-y-14">
        <div className="h-full flex flex-col items-center space-y-2 md:space-y-4 mt-6 justify-center text-center">
          <div className="w-full flex items-center justify-center">
            <Image alt="Landing Image" className="h-full" src={student} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-200">
            Zetabytes Nepal
          </h1>
          <p className="text-lg leading-5 md:text-2xl font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iure
            cupiditate praesentium.
          </p>
        </div>

        <div className="flex gap-x-4 items-center justify-center pb-6">
          <Link href={"/"}>
            <Button
              size={"lg"}
              className="text-lg rounded-full"
              variant={"custom"}
            >
              Enroll Internships
            </Button>
          </Link>
          <ButtonLink
            href="/"
            label="About Us"
            variant={"link"}
            className="px-6 py-4 md:text-lg text-white font-medium"
          />
        </div>
      </div>
    </section>
  );
};
