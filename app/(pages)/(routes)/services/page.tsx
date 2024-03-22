import { PageHead } from "@/components/page-head";
import { BenefitSection } from "@/components/services/benefit-section";
import { TechStacksSection } from "@/components/services/tech-stacks";

const ServicesPage = () => {
  return (
    <main>
      <PageHead label="Our Services" />
      <TechStacksSection />
      <BenefitSection />
    </main>
  );
};

export default ServicesPage;
