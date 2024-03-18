import { PageHead } from "@/components/page-head";
import { AboutLandingSection } from "@/components/about/about-landing";
import { MissionSection } from "@/components/about/mission-section";
import { ProgressBarSection } from "@/components/about/progress-bar-section";
import { BehindCompanySection } from "@/components/about/behind-company";

const AboutPage = () => {
  return (
    <main className="w-full relative h-full flex flex-col space-y-14">
      <PageHead label="About Us" />
      <AboutLandingSection />
      <MissionSection />
      <ProgressBarSection />
      <BehindCompanySection />
    </main>
  );
};

export default AboutPage;
