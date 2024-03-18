import Image from "next/image";

import feature from "@/public/feature.png";
import { CheckCircle2 } from "lucide-react";

export const FeatureSection = () => {
  return (
    <section className="w-full h-full my-6">
      <div className="flex items-center justify-center py-12 bg-slate-200 dark:bg-slate-800/80">
        <div className="container grid md:grid-cols-2 ">
          <div className=" flex-1">
            <div className="w-full">
              <Image src={feature} alt="Feature Image" />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold">
              We Provide Many Features You Can Use
            </h1>
            <p className="text-lg md:text-xl font-medium">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-x-4">
                <CheckCircle2 className="text-green-700 rounded-full" />
                <span className="text-lg">Powerfull online protection.</span>
              </li>
              <li className="flex items-center gap-x-4">
                <CheckCircle2 className="text-green-700 rounded-full" />
                <span className="text-lg">Internet without borders.</span>
              </li>
              <li className="flex items-center gap-x-4">
                <CheckCircle2 className="text-green-700 rounded-full" />
                <span className="text-lg">Supercharged VPN</span>
              </li>
              <li className="flex items-center gap-x-4">
                <CheckCircle2 className="text-green-700 rounded-full" />
                <span className="text-lg">No specific time limits.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
