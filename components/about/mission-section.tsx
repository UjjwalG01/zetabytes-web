import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import mission from "@/public/mission.jpg";

export const MissionSection = () => {
  return (
    <section className="container grid md:grid-cols-2 gap-4">
      <Card className="flex flex-col-reverse lg:flex-row overflow-hidden">
        <Image
          alt="our_mission"
          src={mission}
          className="w-full lg:w-[250px] p-6 lg:p-0"
        />
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription className="text-base font-medium">
            Lorem Ipsum has been the industrys standard dummy text ever since
            printer took a galley. Rimply dummy text of the printing and
            typesetting industry
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="flex flex-col-reverse lg:flex-row overflow-hidden">
        <Image
          alt="our_mission"
          src={mission}
          className="w-full lg:w-[250px] p-6 lg:p-0"
        />
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
          <CardDescription className="text-base font-medium">
            Lorem Ipsum has been the industrys standard dummy text ever since
            printer took a galley. Rimply dummy text of the printing and
            typesetting industry
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};
