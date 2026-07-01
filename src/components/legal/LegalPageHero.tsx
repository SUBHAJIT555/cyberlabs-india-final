"use client";

import { useRef } from "react";
import { TimelineContent } from "@/components/ui/timeline-animation";
import ShinyText from "@/components/ui/ShinyText";
import {
  landingRevealVariants,
  landingSectionHeadingClass,
} from "@/components/ui/landing-section";

type LegalPageHeroProps = {
  title: string;
  subtitle: string;
};

const LegalPageHero = ({ title, subtitle }: LegalPageHeroProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={timelineRef}
      className="relative overflow-hidden bg-white px-4 pb-10 pt-20 sm:px-5 sm:pb-12 sm:pt-24 md:pb-16 md:pt-32"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
            maskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
            backgroundImage: "linear-gradient(90deg, var(--hero-scale-line) 1px, transparent 1px)",
            backgroundSize: "8px 100%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={timelineRef}
          customVariants={landingRevealVariants}
        >
          <ShinyText
            text={title}
            className={landingSectionHeadingClass}
            color="#3f3f46"
            shineColor="#18181b"
            speed={3}
            spread={120}
          />
        </TimelineContent>

        <TimelineContent
          as="p"
          animationNum={1}
          timelineRef={timelineRef}
          customVariants={landingRevealVariants}
          className="mx-auto mt-6 max-w-3xl text-base font-medium leading-snug text-zinc-700 sm:mt-8 sm:text-lg md:text-xl"
        >
          {subtitle}
        </TimelineContent>
      </div>
    </section>
  );
};

export default LegalPageHero;
