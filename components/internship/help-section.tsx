import { PerksCard } from "./perks-card";

import growth from "@/public/chart-up.png";
import connections from "@/public/connection.png";
import assistance from "@/public/assistance.png";

const perks = [
  {
    title: "Career Growth",
    image: growth,
    description:
      "Unlock your career potential with our traineeship program, accelerating your growth in the tech industry.",
  },
  {
    title: "Build Connections",
    image: connections,
    description:
      "Connect with industry professionals, fellow trainees, and alumni through networking.",
  },
  {
    title: "Placement Assistance",
    image: assistance,
    description:
      "Transition smoothly into tech careers with our placement assistance. Count on us for your career success.",
  },
];

export const OurHelpSection = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col items-center justify-center w-full bg-neutral py-6 lg:py-8">
        <div className="container flex flex-col items-center justify-center">
          <div className="flex flex-col max-w-screen-md space-y-8 items-center justify-center text-center">
            <span className="section-title relative z-10">Our Perks</span>
            <h2 className="text-4xl font-semibold">
              Discover The Perks of Joining Zetabytes' Internship Program
            </h2>
            <span className="text-muted-foreground font-medium">
              Embracing our program opens the door to a plethora of invaluable
              benefits as you set sail on your journey towards professional
              advancement and personal development.
            </span>
          </div>
          <div className="grid md:grid-cols-3 py-8 gap-6">
            {perks.map((perk) => (
              <PerksCard
                key={perk.title}
                title={perk.title}
                image={perk.image}
                description={perk.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
