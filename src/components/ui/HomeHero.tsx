import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { parseBoldText } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useNavigate } from "@/lib/react-router";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { FeatureCard } from "@/components/ui/FeatureCard";
import ShinyText from "@/components/ui/ShinyText";
import GradientText from "@/components/ui/GradientText";

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.12,
      duration: 0.45,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: 16,
    opacity: 0,
  },
};

const AnimatedShieldIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 shrink-0 text-blue-600"
  >
    <motion.path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12 21a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.078 7.024"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M20 21l2 -2l-2 -2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M17 17l-2 2l2 2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedGearIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 shrink-0 text-blue-600"
  >
    <motion.path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M6 21v-2a4 4 0 0 1 4 -4h2"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const AnimatedGlobeIcon = ({ isInView }: { isInView: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 shrink-0 text-blue-600"
  >
    <motion.path
      stroke="none"
      d="M0 0h24v24H0z"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M20.985 12.52a9 9 0 1 0 -7.52 8.36"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M3.6 9h16.8"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M3.6 15h10.9"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M11.5 3a17 17 0 0 0 0 18"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.9, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.1, repeat: Infinity, repeatDelay: 3 }}
    />
    <motion.path
      d="M19 16l-2 3h4l-2 3"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.3, delay: 1.3, repeat: Infinity, repeatDelay: 3 }}
    />
  </svg>
);

const HomeHero = () => {
  const navigate = useNavigate();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [featuresInView, setFeaturesInView] = useState(false);

  const whyItems = [
    {
      title: parseBoldText("**Israeli Cyber Defense DNA**"),
      body: "Forged in one of the world's most advanced cybersecurity ecosystems.",
      Icon: AnimatedShieldIcon,
    },
    {
      title: parseBoldText("**Taught by Real Cyber Operators**"),
      body: "Led by professionals who have handled live attacks and investigations.",
      Icon: AnimatedGearIcon,
    },
    {
      title: parseBoldText("**Aligned to Global Cyber Roles**"),
      body: "Built for enterprises, platforms, and critical infrastructure worldwide.",
      Icon: AnimatedGlobeIcon,
    },
  ];

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFeaturesInView(true);
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative overflow-hidden bg-white px-4 pb-12 pt-20 sm:px-5 sm:pb-16 sm:pt-24 md:pb-24 md:pt-32"
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
            maskImage: "linear-gradient(to bottom, #000 0%, transparent 80%)",
            backgroundImage:
              "linear-gradient(90deg, var(--hero-scale-line) 1px, transparent 1px)",
            backgroundSize: "8px 100%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <article className="mx-auto flex w-full flex-col items-center space-y-5 text-center sm:space-y-6">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={timelineRef}
            customVariants={revealVariants}
          >
            <span className="inline-flex items-center gap-2  px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
              <GradientText
                className="text-xs font-bold! uppercase tracking-[0.14em]"
                colors={["#52525b", "#2563eb", "#3f3f46", "#1d4ed8", "#52525b"]}
                animationSpeed={4}
                direction="horizontal"
                showBorder={false}
                pauseOnHover={false}
              >
                Global Cyber Defense Training
              </GradientText>
              <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
            </span>
          </TimelineContent>

          <TimelineContent
            as="h1"
            animationNum={1}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="max-w-4xl"
          >
            <ShinyText
              text="Built for Real-World Threats"
              className="text-balance text-[1.7rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.08] md:text-5xl xl:text-6xl"
              color="#3f3f46"
              shineColor="#18181b"
              speed={3}
              spread={120}
            />
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={2}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="mx-auto max-w-3xl space-y-3 px-1 sm:px-0"
          >
            <GradientText
              className="text-[0.95rem] font-semibold! leading-relaxed sm:text-lg md:text-xl"
              colors={["#52525b", "#2563eb", "#3f3f46", "#1d4ed8", "#52525b"]}
              animationSpeed={4}
              direction="horizontal"
              showBorder={false}
              pauseOnHover={false}
            >
              Training Real-World Cyber Defenders for a Digitally Exposed World
            </GradientText>
            <p className="text-sm font-semibold text-zinc-700 sm:text-base mt-6">
              Israeli-founded. Practitioner-led.
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg">
              {parseBoldText(
                "Preparing professionals to **defend, investigate, and operate** in real digital environments - not classrooms.",
              )}
            </p>
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={3}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="flex w-full max-w-xs flex-col gap-2.5 pt-1 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:pt-2"
          >
            <ShinyButton
              type="button"
              onClick={() => navigate("/leadership-and-faculty")}
              className="shiny-cta--compact w-full rounded-xl! px-6! py-3.5! text-sm! shadow-lg! shadow-zinc-800/20! sm:w-auto sm:rounded-lg! sm:px-4! sm:py-2.5!"
            >
              Leadership Team
            </ShinyButton>
            <ShinyButton
              type="button"
              variant="light"
              onClick={() => navigate("/about-cyberlabs")}
              className="shiny-cta--compact w-full rounded-xl! px-6! py-3.5! text-sm! shadow-lg! shadow-zinc-800/20! sm:w-auto sm:rounded-lg! sm:px-4! sm:py-2.5!"
            >
              About CYBERLABS
            </ShinyButton>
          </TimelineContent>

          <TimelineContent
            as="div"
            animationNum={4}
            timelineRef={timelineRef}
            customVariants={revealVariants}
            className="w-full border-t border-dashed border-zinc-200 pt-8 md:pt-10"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {whyItems.map((item, index) => {
                const IconComponent = item.Icon;
                return (
                  <FeatureCard
                    key={index}
                    feature={{
                      title: item.title,
                      description: item.body,
                      icon: <IconComponent isInView={featuresInView} />,
                    }}
                    className="h-full text-left shadow-sm"
                  />
                );
              })}
            </div>
          </TimelineContent>
        </article>
      </div>
    </section>
  );
};

export default HomeHero;
