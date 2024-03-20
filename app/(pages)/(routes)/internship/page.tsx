import { OurHelpSection } from "@/components/internship/help-section";
import { InternshipSection } from "@/components/internship/internship-section";
import { PageHead } from "@/components/page-head";

const InternshipPage = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-6">
      <PageHead label="Internships" />
      <InternshipSection />
      <OurHelpSection />
    </main>
  );
};

export default InternshipPage;
