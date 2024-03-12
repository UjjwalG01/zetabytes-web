import { Header } from "@/components/header/header";
import { FaqSection } from "@/components/home/faq-section";
import { FeatureSection } from "@/components/home/feature-section";
import { HeroEndSection } from "@/components/home/hero-end-section";
import { HeroSection } from "@/components/home/hero-section";
import { Internships } from "@/components/home/internships";
import { NumbersSection } from "@/components/home/numbers-section";
import { SettingsSection } from "@/components/home/settings-section";

const LandingPage = () => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center justify-start">
      {/* <Header /> */}
      <HeroSection />
      <HeroEndSection />
      <NumbersSection />
      <FeatureSection />
      <Internships />
      <SettingsSection />
      <FaqSection />
    </main>
  );
};

export default LandingPage;
