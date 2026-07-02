import ContactHero from "@/components/ui/ContactHero";
import ContactCompanyInfo from "@/components/ContactCompanyInfo";
import ContactAddress from "@/components/ContactAddress";
import ContactHeader from "@/components/ContactHeader";
import HowReachUs from "@/components/HowReachUs";

const sectionDivider = (
  <div
    className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t border-dashed border-zinc-200"
    aria-hidden
  />
);

const Contact = () => {
  return (
    <div className="relative z-10">
      <ContactHero />
      <ContactCompanyInfo />
      {sectionDivider}
      <ContactHeader />
      {sectionDivider}
      <ContactAddress />
      <HowReachUs />
    </div>
  );
};

export default Contact;
