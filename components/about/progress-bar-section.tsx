import Image from "next/image";
import { Progress } from "../ui/progress";

import progressImg from "@/public/about-3.png";

export const ProgressBarSection = () => {
  return (
    <section className="w-full h-full bg-neutral">
      <div className="container grid lg:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col w-full items-center justify-center">
          <Image alt="Progress Image" src={progressImg} />
        </div>
        <div className="p-4 w-full">
          <div className="flex flex-col space-y-2">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              We Are Not Pushy We Don't Convince You To Use Us
            </h2>
            <p className="text-muted-foreground font-medium">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion
              consectetur elit. Vesti bulum nec odio aea the dumm ipsumm ipsum
              that fadolorit the consectetur elit.
            </p>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <label>Students</label>
                <Progress value={70} />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Internships</label>
                <Progress value={30} />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Clients</label>
                <Progress value={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
