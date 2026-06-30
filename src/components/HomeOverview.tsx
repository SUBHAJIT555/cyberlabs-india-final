import { assetSrc } from "@/lib/utils";
import { useRef } from "react";
import { MagicText } from "./ui/magic-text";
import { TimelineContent } from "@/components/ui/timeline-animation";
import ShinyText from "@/components/ui/ShinyText";
import {
  LandingSectionShell,
  LandingBento,
  LandingBentoRow,
  LandingBentoCell,
  landingRevealVariants,
} from "@/components/ui/landing-section";
import overviewImage from "@/assets/img/Home/homepageopening.svg";

const styleBrandWords = (word: string, index: number, words: string[]) => {
  const lowerWord = word.toLowerCase().replace(/[.,-]/g, "");
  const prevWord = index > 0 ? words[index - 1].toLowerCase().replace(/[.,-]/g, "") : "";
  const shouldStyle =
    lowerWord === "cyberlabs" ||
    (lowerWord === "india" && (prevWord === "cyberlabs" || index === 0)) ||
    lowerWord === "cyveritas" ||
    (lowerWord === "technology" && prevWord === "cyveritas") ||
    (lowerWord === "usa" && prevWord === "cyberlabs");
  if (shouldStyle) {
    return <span className="font-semibold uppercase text-blue-600">{word}</span>;
  }
  return word;
};

const HomeOverview = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <LandingSectionShell>
      <div ref={timelineRef}>
        <LandingBento>
          <LandingBentoRow>
            <LandingBentoCell className="flex items-center justify-center">
              <TimelineContent
                as="div"
                animationNum={0}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
              >
                <img
                  src={assetSrc(overviewImage)}
                  alt=""
                  className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-none lg:w-[320px]"
                />
              </TimelineContent>
            </LandingBentoCell>

            <LandingBentoCell>
              

              <TimelineContent
                as="div"
                animationNum={2}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-4"
              >
                <h2 className="text-pretty">
                  <ShinyText
                    text="Cybercrime has become one of the most serious threats to modern life."
                    className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl"
                    color="#3f3f46"
                    shineColor="#18181b"
                    speed={3}
                    spread={120}
                  />
                </h2>
                <p className="mt-4 text-base font-bold leading-snug text-blue-600 sm:text-lg md:text-xl lg:text-2xl">
                  It impacts families, global enterprises, banks, institutions, and governments - every day, everywhere.
                </p>
           
           
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-6 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg"
              >
                <MagicText
                  text="CYBERLABS INDIA brings Israeli-led, real-world cybersecurity training to India - designed to prepare professionals for the same cyber threats faced by global companies and nations today. Launched by Cyveritas Technology, in collaboration with CYBERLABS USA, an Israeli-founded global cyber defense training organization, CYBERLABS India delivers one of the most advanced and practical cybersecurity training programs in the world."
                  className="leading-relaxed text-zinc-700"
                  renderWord={styleBrandWords}
                />
              </TimelineContent>
            </LandingBentoCell>
          </LandingBentoRow>
        </LandingBento>
      </div>
    </LandingSectionShell>
  );
};

export default HomeOverview;
