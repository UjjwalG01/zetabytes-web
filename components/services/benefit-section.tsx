import { BenefitCard } from "./benefit-card";

import growth from "@/public/chart-up.png";
import connections from "@/public/connection.png";
import assistance from "@/public/assistance.png";

const benefits = [
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

export const BenefitSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center max-w-screen-xl gap-y-12 mx-auto">
          <span className="section-title relative z-10">Proven Benefits</span>
          <div className="flex flex-col items-center justify-center text-center gap-y-4">
            <h2 className="text-5xl font-semibold">
              Discover the Advantages of Attending Our Internships
            </h2>
            <p className="text-muted-foreground font-medium text-base leading-5">
              Our workshop offers a gateway to a multitude of invaluable
              advantages as you embark on your quest for professional growth and
              personal enrichment.
            </p>
          </div>
          <span className="font-semibold text-base text-blue-500">
            Financial Aid available for candidates with demonstrable needs!
          </span>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {benefits.map((item) => (
              <BenefitCard
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
