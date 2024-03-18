import { CreditCard, Mail, User, Users, icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import bg_image from "@/public/about-bg.png";

interface SettingsCardProps {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const AnimatedCard = ({ title, subtitle, Icon, href }: SettingsCardProps) => {
  return (
    <Link
      href={href}
      className="w-full h-40 p-4 rounded-md  shadow shadow-black/50 dark:shadow-white border-slate-300 relative mt-4 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      {/* <Icon className="absolute z-1 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" /> */}
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-card-foreground group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </Link>
  );
};

export const SettingsSection: React.FC = () => {
  return (
    <section className="w-full h-full my-8 py-12 bg-slate-200 dark:bg-slate-800/80">
      <div className="container flex flex-col items-center space-y-4 justify-center py-12">
        <span className="section-title relative z-10 text-xl pl-3 font-semibold mb-2">
          Clients
        </span>
        <h2 className="font-semibold text-3xl text-center">
          We are Trusted Globally by Millions of Clients
        </h2>
        <p className="text-base font-medium text-muted-foreground">
          Nothing is going to stop our business.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <AnimatedCard
            title="Account"
            subtitle="Manage profile"
            href="#"
            Icon={User}
          />
          <AnimatedCard
            title="Email"
            subtitle="Manage email"
            href="#"
            Icon={Mail}
          />
          <AnimatedCard
            title="Team"
            subtitle="Manage team"
            href="#"
            Icon={Users}
          />
          <AnimatedCard
            title="Billing"
            subtitle="Manage cards"
            href="#"
            Icon={CreditCard}
          />
        </div>
      </div>
    </section>
  );
};
