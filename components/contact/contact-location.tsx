import Image from "next/image";
import Link from "next/link";

import imgLocation from "@/public/location.jpg";
import { MdCall, MdDirections, MdEmail, MdMyLocation } from "react-icons/md";
import { CONTACT } from "@/app/(pages)/(routes)/contact/constants";

const location =
  process.env.CONTACT_LOCATION_LINK ||
  "https://www.google.com/maps/place/Chabahil,+Kathmandu+44600/@27.7077306,85.3358574,13.75z/data=!4m6!3m5!1s0x39eb197d9d23f7ed:0x2724281b4393865d!8m2!3d27.7166069!4d85.3485072!16zL20vMGR5M3Iz?entry=ttu";

export const ContactLocationSection = () => {
  return (
    <div>
      <div className="flex flex-col w-full items-center justify-center space-y-2">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl md:text-xl lg:text-2xl font-semibold">
            Our Location
          </h2>
          <Link href={location} target="_blank" className="p-0">
            <span className="text-main font-semibold text-md uppercase">
              Get Direction&rarr;
            </span>
          </Link>
        </div>
        <Link
          href={location}
          target="_blank"
          className="w-full h-full relative border border-slate-300"
        >
          <Image alt="Location_Image" src={imgLocation} className="w-full" />
          <div className="hidden dark:flex absolute inset-0 bg-black/70">
            {/* <MdDirections className="absolute size-8 md:size-16 border border-slate-300 p-2 rounded-full bottom-5 right-5 md:bottom-10 md:right-10" /> */}
          </div>
        </Link>
        <div className="space-y-2 w-full py-2">
          <span className="flex items-center gap-x-2">
            <MdMyLocation className="text-xl text-main" />
            <p>{CONTACT.location}</p>
          </span>
          <span className="flex items-center gap-x-2">
            <MdCall className="text-xl text-main" />
            <p>{CONTACT.phone}</p>
          </span>
          <span className="flex items-center gap-x-2">
            <MdEmail className="text-xl text-main" />
            <p>{CONTACT.email}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
