import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "@/lib/react-router";
import CallbackModal from "./CallbackModal";
import { ShinyButton } from "@/components/ui/shiny-button";
import ShinyText from "@/components/ui/ShinyText";

import { TimelineContent } from "@/components/ui/timeline-animation";
import {
  LandingSectionShell,
  LandingBento,
  LandingBentoRow,
  LandingBentoCell,
  LandingGoalBanner,
  landingRevealVariants,
  landingListRowHoverClass,
  landingListTextHoverClass,
  homeSectionSpacingClass,
} from "@/components/ui/landing-section";

const CallToAction = () => {
  const navigate = useNavigate();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  return (
    <LandingSectionShell className={homeSectionSpacingClass}>
      <div ref={timelineRef}>
        <LandingBento>
          <LandingBentoRow>
            <LandingBentoCell>
              <TimelineContent as="div" animationNum={0} timelineRef={timelineRef} customVariants={landingRevealVariants}>
                <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-zinc-600">
                  <span className="inline-block h-3 w-3 shrink-0 rounded-sm bg-blue-600" />
                  OUR VISION : Building Global Cyber Defense Capability From India
                </span>
              </TimelineContent>
              <TimelineContent
                as="h3"
                animationNum={1}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-4 text-2xl font-medium leading-tight text-zinc-900 sm:text-3xl md:text-4xl"
              >
                India is one of the world's fastest-growing digital economies. Its cyber defense talent must meet{" "}
                <span className="text-blue-600">Israeli-level realism and global expectations.</span>
              </TimelineContent>
            </LandingBentoCell>

            <LandingBentoCell>
              <TimelineContent as="h4" animationNum={2} timelineRef={timelineRef} customVariants={landingRevealVariants} className="text-lg font-semibold text-zinc-900 md:text-xl">
                CYBERLABS INDIA exists to:
              </TimelineContent>
              <TimelineContent as="ul" animationNum={3} timelineRef={timelineRef} customVariants={landingRevealVariants} className="mt-4">
                {[
                  "Transfer Israeli cyber defense expertise to India",
                  "Build globally deployable cyber professionals",
                  "Reduce the gap between education and real-world defense",
                  "Strengthen trust in digital systems worldwide",
                ].map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start border-b border-zinc-200 py-3 text-sm text-zinc-600 last:border-b-0 md:text-base",
                      landingListRowHoverClass,
                    )}
                  >
                    <span className="mr-3 mt-0.5 text-blue-600">•</span>
                    <span className={landingListTextHoverClass}>{item}</span>
                  </li>
                ))}
              </TimelineContent>
              <TimelineContent
                as="p"
                animationNum={4}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-4 text-sm font-semibold capitalize text-zinc-900 md:text-base"
              >
                We are not running courses. We are building real cyber defenders - trained the Israeli way.
              </TimelineContent>
            </LandingBentoCell>
          </LandingBentoRow>
        </LandingBento>

        <TimelineContent as="div" animationNum={5} timelineRef={timelineRef} customVariants={landingRevealVariants} className="mt-12">
          <LandingGoalBanner
           
            title={
              <div className="space-y-2">
                <p className="text-xl font-medium italic text-blue-600 md:text-2xl">get started with the</p>
                <ShinyText
                  text="# 1 Cybersecurity Training"
                  className="block text-3xl font-bold md:text-5xl lg:text-6xl"
                  color="#3f3f46"
                  shineColor="#18181b"
                  speed={3}
                />
                <span className="block text-3xl font-bold text-blue-600 md:text-5xl lg:text-6xl">Platform Today</span>
              </div>
            }
          >
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShinyButton
                type="button"
                variant="default"
                onClick={() => setIsCallbackModalOpen(true)}
                className="shiny-cta shrink-0 rounded-lg! text-sm font-semibold shadow-lg! active:scale-95! sm:text-base"
              >
                Request a Callback
              </ShinyButton>
              <ShinyButton
                type="button"
                variant="light"
                onClick={() => navigate("/cyber-defense-programs")}
                className="shrink-0 rounded-lg! text-sm font-semibold shadow-lg! active:scale-95! sm:text-base"
              >
                Explore Programs
              </ShinyButton>
            </div>
          </LandingGoalBanner>
        </TimelineContent>
      </div>

      <CallbackModal isOpen={isCallbackModalOpen} onClose={() => setIsCallbackModalOpen(false)} />
    </LandingSectionShell>
  );
};

export default CallToAction;
