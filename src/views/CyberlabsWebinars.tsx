"use client";

import { WebinarRegistrationProvider } from "@/context/webinar-registration";
import { HeroSection } from "@/components/webinars/sections/HeroSection";
import { WebinarInsightsSection } from "@/components/webinars/sections/WebinarInsightsSection";
import { WebinarScheduleSection } from "@/components/webinars/sections/WebinarScheduleSection";
import { WhyAttendSection } from "@/components/webinars/sections/WhyAttendSection";
import { LearnFromProsSection } from "@/components/webinars/sections/LearnFromProsSection";
import { CareerBenefitsSection } from "@/components/webinars/sections/CareerBenefitsSection";
import { WebinarTopicsSection } from "@/components/webinars/sections/WebinarTopicsSection";
import { WhoShouldAttendSection } from "@/components/webinars/sections/WhoShouldAttendSection";
import { WhyCyberlabsSection } from "@/components/webinars/sections/WhyCyberlabsSection";
import { WhyChooseCTASection } from "@/components/webinars/sections/CTASection";

const CyberlabsWebinars = () => {
  return (
    <WebinarRegistrationProvider>
      <div className="relative z-10">
        <HeroSection />
        <WebinarInsightsSection />
        <WebinarScheduleSection />
        <WhyAttendSection />
        <LearnFromProsSection />
        <CareerBenefitsSection />
        <WebinarTopicsSection />
        <WhoShouldAttendSection />
        <WhyCyberlabsSection />
        <WhyChooseCTASection />
      </div>
    </WebinarRegistrationProvider>
  );
};

export default CyberlabsWebinars;
