import Image from "next/image";
import { Button } from "@/components/ui/button";

import aboutImg from "@/public/about.png";

export const AboutLandingSection = () => {
  return (
    <section className="w-full h-full relative | bg-image">
      {/* <div className="overlay bg-blue-300 absolute top-0 left-0 right-0 -z-[1] w-full h-full" /> */}
      <div className="container grid lg:grid-cols-2 gap-4">
        <div className="w-full relative">
          <Image
            layout="fill"
            objectFit="cover"
            alt="about_image"
            src={aboutImg}
            className="h-[50rem] absolute"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="text-xl font-medium text-blue-500">
            Welcome to Business
          </span>
          <h1 className="text-4xl font-semibold">
            Welcome To Our Business Website Agency
          </h1>
          <p className="text-muted-foreground font-medium">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more the ametion
            that on consectetur elit. Vesti bulum nec odio aea the dum dumm
            ipsumm ipsum is that dolocons rsus mal suada and the fadolorit the
            consectetur elit. Lorem a ipsum dolarorit more a ametion consectetur
            elit. Vesti bulum nec odio aea is the dum dumm ipsumm ipsum is that
            dolocons.
          </p>
          <p className="text-muted-foreground font-medium">
            Grursus mal suada faci lisis Lorem ipsum dolarorit more the ametion
            that on consectetur elit Vesti bulum nec odio the dumm.
          </p>
          <Button size={"lg"} className="max-w-40 text-lg font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
