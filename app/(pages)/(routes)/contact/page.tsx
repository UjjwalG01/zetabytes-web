import { ContactFormSection } from "@/components/contact/contact-form";
import { PageHead } from "@/components/page-head";

const ContactPage = () => {
  return (
    <main>
      <PageHead label="Contact Us" />
      <ContactFormSection />
    </main>
  );
};

export default ContactPage;
