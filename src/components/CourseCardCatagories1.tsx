"use client";

import { assetSrc } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CallbackModal from "./CallbackModal";
import EnrollmentModal from "./EnrollmentModal";
import FlagshipProgramCard from "./FlagshipProgramCard";
import { ShinyButton } from "@/components/ui/shiny-button";
import Portal from "@/components/ui/Portal";
import { useFloatingBottomBar } from "@/contexts/FloatingBottomBarContext";
import { flagshipProgramCards } from "@/constants/flagshipProgramData";
import { useCourses } from "@/hooks/useCourses";
import flagshipImage from "@/assets/img/ProgramPageImage/flagshipProgram.svg";
import { TimelineContent } from "@/components/ui/timeline-animation";
import ShinyText from "@/components/ui/ShinyText";
import {
  LandingSectionShell,
  LandingBento,
  LandingFramedTwoCol,
  LandingBentoCell,
  LandingTagPill,
  LandingGoalBanner,
  landingRevealVariants,
  landingSectionHeadingClass,
} from "@/components/ui/landing-section";

const HIGHLIGHTS = [
  "145–450 Hour Programs",
  "Advanced Expertise",
  "Career Progression Focus",
] as const;

const CourseCardCategories1 = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState(false);
  const [enrollmentSlug, setEnrollmentSlug] = useState("");
  const { setIsActive: setFloatingBottomBarActive } = useFloatingBottomBar();
  const coursesSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { getCourses } = useCourses();
  const allCourses = getCourses();

  const getProgramImage = (slug: string) =>
    allCourses.find((course) => course.slug === slug)?.image ?? "";

  const handleEnroll = (slug: string) => {
    setEnrollmentSlug(slug);
    setIsEnrollmentModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const flagshipSection = coursesSectionRef.current;
      const bootcampSection = document.getElementById("elite-bootcamps");
      if (!flagshipSection || !bootcampSection) return;

      // Show CTA while user is browsing either Elite Boot Camps or Flagship Programs.
      const bootcampRect = bootcampSection.getBoundingClientRect();
      const flagshipRect = flagshipSection.getBoundingClientRect();
      const sectionTop = bootcampRect.top + window.scrollY;
      const sectionBottom = flagshipRect.bottom + window.scrollY;

      if (
        currentScrollY >= sectionTop - 120 &&
        currentScrollY <= sectionBottom - 120 &&
        currentScrollY > 100
      ) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setFloatingBottomBarActive(showFloatingButton);
    return () => setFloatingBottomBarActive(false);
  }, [showFloatingButton, setFloatingBottomBarActive]);

  return (
    <LandingSectionShell id="flagship-programs" className="overflow-visible">
      <div ref={coursesSectionRef}>
        <div ref={timelineRef}>
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={timelineRef}
            customVariants={landingRevealVariants}
          >
            <ShinyText
              text="CYBERLABS Flagship Programs"
              className={landingSectionHeadingClass}
              color="#3f3f46"
              shineColor="#18181b"
              speed={3}
              spread={120}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((label) => (
                <LandingTagPill key={label}>{label}</LandingTagPill>
              ))}
            </div>
          </TimelineContent>

          <LandingBento className="mt-8">
            <LandingFramedTwoCol>
              <LandingBentoCell className="md:px-0 md:pr-8">
                <TimelineContent
                  as="p"
                  animationNum={1}
                  timelineRef={timelineRef}
                  customVariants={landingRevealVariants}
                  className="text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg"
                >
                  The cybersecurity industry rewards professionals who possess{" "}
                  <span className="font-semibold text-zinc-900">
                    specialized expertise, operational capability, and real-world problem-solving skills.
                  </span>{" "}
                  As organizations face increasingly sophisticated threats, demand continues to grow for professionals who can move beyond foundational knowledge and{" "}
                  <span className="font-semibold text-blue-600">contribute at a higher level.</span>
                </TimelineContent>

                <TimelineContent
                  as="p"
                  animationNum={2}
                  timelineRef={timelineRef}
                  customVariants={landingRevealVariants}
                  className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg"
                >
                  <span className="font-semibold text-blue-600">CYBERLABS Flagship Programs</span> are immersive{" "}
                  <span className="font-semibold text-zinc-900">145–450 hour professional development pathways</span> designed to help learners develop advanced cybersecurity expertise, prepare for specialized and leadership-oriented roles, and position themselves for{" "}
                  <span className="font-semibold text-zinc-900">career progression, salary growth, and global opportunities.</span>
                </TimelineContent>

                <TimelineContent
                  as="p"
                  animationNum={3}
                  timelineRef={timelineRef}
                  customVariants={landingRevealVariants}
                  className="mt-4 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg"
                >
                  Focused on{" "}
                  <span className="font-semibold text-blue-600">practical capability rather than certifications alone,</span> these programs help professionals build the skills, experience, and confidence required to succeed in today&apos;s{" "}
                  <span className="font-semibold text-zinc-900">rapidly evolving cybersecurity industry.</span>
                </TimelineContent>
              </LandingBentoCell>

              <LandingBentoCell className="flex items-center justify-center md:px-0 md:pl-8">
                <TimelineContent
                  as="div"
                  animationNum={4}
                  timelineRef={timelineRef}
                  customVariants={landingRevealVariants}
                >
                  <img
                    src={assetSrc(flagshipImage)}
                    alt="CYBERLABS Flagship Programs"
                    className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]"
                  />
                </TimelineContent>
              </LandingBentoCell>
            </LandingFramedTwoCol>
          </LandingBento>

          <TimelineContent
            as="div"
            animationNum={5}
            timelineRef={timelineRef}
            customVariants={landingRevealVariants}
            className="mt-8"
          >
            <LandingGoalBanner
              title={
                <>
                  <span className="text-blue-600">Build Expertise.</span>{" "}
                  <span className="text-blue-600">Increase Your Value.</span>{" "}
                  <span className="text-blue-600">Accelerate Your Career.</span>
                </>
              }
            />
          </TimelineContent>

          <div id="our-programs">
            <TimelineContent
              as="div"
              animationNum={6}
              timelineRef={timelineRef}
              customVariants={landingRevealVariants}
              className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
            >
              {flagshipProgramCards.map((program, index) => (
                <FlagshipProgramCard
                  key={program.id}
                  program={program}
                  image={getProgramImage(program.slug)}
                  index={index}
                  onEnroll={handleEnroll}
                />
              ))}
            </TimelineContent>
          </div>
        </div>
      </div>

      <Portal>
        <AnimatePresence>
          {showFloatingButton && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 left-1/2 z-9999 -translate-x-1/2 sm:bottom-6"
            >
              <ShinyButton
                type="button"
                size="compact"
                onClick={() => setIsCallbackModalOpen(true)}
                className="rounded-lg! font-montserrat! text-xs font-medium whitespace-nowrap shadow-lg! active:scale-95! sm:text-sm px-10! py-3!"
              >
                Request Callback
              </ShinyButton>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>

      <CallbackModal
        isOpen={isCallbackModalOpen}
        onClose={() => setIsCallbackModalOpen(false)}
      />

      <EnrollmentModal
        isOpen={isEnrollmentModalOpen}
        onClose={() => setIsEnrollmentModalOpen(false)}
        slug={enrollmentSlug}
      />
    </LandingSectionShell>
  );
};

export default CourseCardCategories1;
