"use client";

import Link from "next/link";
import { FaqCard } from "./faq-card";
import { Button } from "../ui/button";
import Image from "next/image";

// Social Links Images
import fb from "@/public/facebook.png";
import insta from "@/public/instagram.png";
import x from "@/public/x.png";
import linkedin from "@/public/linkedin.png";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet,",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, .`,
  },
  {
    question: "Nunc maximus, magna at ultricies elementum",
    answer:
      "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
  },
  {
    question: "What is the package version",
    answer: "current version is 1.2.1",
  },
];

const socialMedias = [
  { img: fb, link: "/facebook" },
  { img: x, link: "/x.com" },
  { img: linkedin, link: "/linkedin" },
  { img: insta, link: "/instagram" },
];

export const FaqSection = () => {
  return (
    <div className="w-full my-12 lg:my-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
          <span className="section-title relative z-50">FAQs Section</span>
          <h2 className="font-semibold text-3xl text-center">
            Do you have any questions?
          </h2>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-x-4 place-items-start w-full">
            <div className="flex flex-col items-center lg:items-start w-full px-4 space-y-2 my-6 lg:my-2">
              <h2 className="text-2xl font-semibold">Still have questions?</h2>
              <p className="text-md text-muted-foreground font-medium">
                If you have further queries, get connected with us.
              </p>
              <Link href={"/contact"}>
                <Button className="px-0 text-lg" variant={"link"}>
                  Connect with Us
                </Button>
              </Link>
              <div className="flex gap-x-3">
                {socialMedias.map((media) => (
                  <Link key={media.link} href={media.link}>
                    <Image
                      className="w-10 backdrop-filter duration-200 hover:brightness-75"
                      alt="Social_Link"
                      src={media.img}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full space-y-4">
              {faqs.map((faq) => (
                <FaqCard
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
