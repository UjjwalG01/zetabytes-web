import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ExpertCard } from "./expert-card";

import team1 from "@/public/team1.jpg";
import team2 from "@/public/team2.jpg";
import team3 from "@/public/team3.jpg";

const experts = [
  {
    name: "Christain Pavon",
    position: "Chief Executive Officer",
    image: team1,
    links: [],
  },
  {
    name: "Kevin Anderson",
    position: "Executive Leader",
    image: team2,
    links: [],
  },
  {
    name: "Angelina Maria",
    position: "Project Coordinator",
    image: team3,
    links: [],
  },
  {
    name: "Omar Elnagar",
    position: "Senior Engineer",
    image: team3,
    links: [],
  },
  {
    name: "Jonshon Charles",
    position: "Junior Developer",
    image: team1,
    links: [],
  },
];

export const BehindCompanySection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="section-title relative z-10">Our Experts</span>
          <h1 className="text-4xl font-semibold">Behind Our Company</h1>
          <div className="w-full flex-1">
            <Carousel className="">
              <CarouselContent className="-ml-4">
                {experts.map((mem) => (
                  <ExpertCard
                    key={mem.name}
                    name={mem.name}
                    position={mem.position}
                    image={mem.image}
                    links={mem.links}
                  />
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
