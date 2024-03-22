import Image from "next/image";

import ai from "@/public/ai.png";
import react from "@/public/react.png";
import database from "@/public/database.png";
import nodejs from "@/public/nodejs.png";
import php from "@/public/php.png";
import uiux from "@/public/uiux.png";
import sql from "@/public/sql.png";

const techs = [
  { label: "AI", img: ai },
  { label: "React", img: react },
  { label: "Database", img: database },
  { label: "Node JS", img: nodejs },
  { label: "PHP", img: php },
  { label: "UI/UX", img: uiux },
  { label: "SQL", img: sql },
];

export const TechStacksSection = () => {
  return (
    <section className="my-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <span className="text-xl font-medium text-blue-700 dark:text-blue-400">
            Introducing Exclusive Career Training Internships
          </span>
          <span className="flex flex-col items-center gap-y-3 justify-center text-center">
            <h2 className="text-5xl font-extrabold">
              Unveil the Stacks Covered
            </h2>
            <p className="text-base text-muted-foreground">
              Explore the cutting-edge technologies shaping the digital
              landscape with Zetabytes Internships.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full ">
        <div className="container bg-slate-200 dark:bg-slate-500/80 px-4 grid md:grid-cols-2 lg:grid-cols-5 place-items-center gap-8 w-full py-6 rounded-md">
          {techs.map((tech) => (
            <div className="flex flex-col items-center justify-center space-y-4 mt-8 rounded-full">
              <Image
                alt="tech_stacks"
                className="size-20 aspect-square backdrop-blur-lg"
                src={tech.img}
              />
              <span className="text-muted-foreground dark:text-white font-medium">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
