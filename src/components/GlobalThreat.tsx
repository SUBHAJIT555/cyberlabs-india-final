import { useRef } from "react";
import { cn } from "@/lib/utils";
import { CreditCard, Factory, Hospital, Shield, Lock, Database } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { TimelineContent } from "@/components/ui/timeline-animation";
import ShinyText from "@/components/ui/ShinyText";
import type { AnimatedListItem } from "./ui/animated-list";
import {
  LandingSectionShell,
  LandingBento,
  LandingBentoRow,
  LandingBentoCell,
  landingRevealVariants,
  landingListRowHoverClass,
  landingListTextHoverClass,
} from "@/components/ui/landing-section";

const GlobalThreat = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const threatListItems: AnimatedListItem[] = [
    {
      text: "Steal life savings through digital fraud.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
          <path d="M3 10h18" />
          <path d="M16 19h6" />
          <path d="M19 16l3 3l-3 3" />
          <path d="M7.005 15h.005" />
          <path d="M11 15h2" />
        </svg>
      ),
    },
    {
      text: "Shut down businesses & supply chains.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
          <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
          <path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
          <path d="M3 21l19 0" />
        </svg>
      ),
    },
    {
      text: "Target banks, financial systems, and customer trust. ",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 21l18 0" />
          <path d="M3 10l18 0" />
          <path d="M5 6l7 -3l7 3" />
          <path d="M4 10l0 11" />
          <path d="M20 10l0 11" />
          <path d="M8 14l0 3" />
          <path d="M12 14l0 3" />
          <path d="M16 14l0 3" />
        </svg>
      ),
    },
    {
      text: "Disrupt hospitals, universities, governments, and public infrastructure.",
      rest: "",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
          <path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
          <path d="M10 14h4" />
          <path d="M12 12v4" />
        </svg>
      ),
    },
  ];

  const timelineData = [
    {
      id: 1,
      title: "Ransomware Attacks",
      date: "2023-2024",
      content: "Criminals encrypt critical systems and demand payment, paralyzing hospitals, schools, and businesses. Learn to defend against encryption-based attacks and incident response protocols.",
      category: "Malware",
      icon: Lock,
      relatedIds: [2, 4],
      status: "in-progress" as const,
      energy: 95,
    },
    {
      id: 2,
      title: "Social Engineering",
      date: "2024",
      content: "Attackers manipulate human psychology through phishing, pretexting, and baiting to bypass technical defenses. Master the art of recognizing and preventing human-based attack vectors.",
      category: "Human Factor",
      icon: Shield,
      relatedIds: [1, 3, 5],
      status: "in-progress" as const,
      energy: 88,
    },
    {
      id: 3,
      title: "Data Breaches",
      date: "2023-2024",
      content: "Massive leaks of personal and corporate data expose millions. Understand database security, encryption, access controls, and compliance frameworks like GDPR and HIPAA.",
      category: "Data Security",
      icon: Database,
      relatedIds: [2, 4, 6],
      status: "in-progress" as const,
      energy: 85,
    },
    {
      id: 4,
      title: "Critical Infrastructure",
      date: "2024",
      content: "Nation-state actors target power grids, water systems, and transportation networks. Study SCADA security, industrial control systems, and critical infrastructure protection strategies.",
      category: "Infrastructure",
      icon: Hospital,
      relatedIds: [1, 3, 5],
      status: "in-progress" as const,
      energy: 90,
    },
    {
      id: 5,
      title: "Financial Fraud",
      date: "2024",
      content: "Sophisticated fraud schemes drain accounts through identity theft, payment fraud, and cryptocurrency scams. Learn fraud detection, transaction monitoring, and financial cybersecurity.",
      category: "Financial",
      icon: CreditCard,
      relatedIds: [2, 3, 6],
      status: "in-progress" as const,
      energy: 82,
    },
    {
      id: 6,
      title: "Supply Chain Attacks",
      date: "2023-2024",
      content: "Attackers compromise software vendors and third-party services to infiltrate multiple organizations. Understand vendor risk management, software supply chain security, and zero-trust architectures.",
      category: "Business",
      icon: Factory,
      relatedIds: [3, 4, 5],
      status: "in-progress" as const,
      energy: 78,
    },
  ];

  return (
    <LandingSectionShell>
      <div ref={timelineRef}>
        <LandingBento>
          <LandingBentoRow>
            <LandingBentoCell>
              

              <TimelineContent
                as="h2"
                animationNum={1}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-4 text-pretty"
              >
                <ShinyText
                  text="The Global Cyber Threat Reality."
                  className="text-xl font-semibold  leading-snug sm:text-2xl md:text-3xl lg:text-4xl"
                  color="#3f3f46"
                  shineColor="#18181b"
                  speed={3}
                  spread={120}
                />
              </TimelineContent>

              <TimelineContent
                as="p"
                animationNum={2}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-6 text-lg font-semibold leading-tight text-blue-600 md:text-xl lg:text-2xl"
              >
                Cybercrime Is a Global Crisis{" "}
                <span className="text-zinc-900">With Real Human Consequences.</span>
              </TimelineContent>

              <TimelineContent
                as="p"
                animationNum={3}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-6 text-sm font-semibold text-zinc-900 md:text-base"
              >
                Modern cyber attacks :
              </TimelineContent>

              <TimelineContent
                as="ul"
                animationNum={4}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-4"
              >
                {threatListItems.map((item) => (
                  <li
                    key={item.text}
                    className={cn(
                      "flex items-start gap-3 border-b border-zinc-200 py-3 text-sm text-zinc-700 last:border-b-0 md:text-base",
                      landingListRowHoverClass,
                    )}
                  >
                    <span className="mt-0.5 shrink-0">{item.icon}</span>
                    <span className={landingListTextHoverClass}>{item.text}</span>
                  </li>
                ))}
              </TimelineContent>

              <TimelineContent
                as="p"
                animationNum={5}
                timelineRef={timelineRef}
                customVariants={landingRevealVariants}
                className="mt-6 text-sm leading-relaxed text-zinc-700 md:text-base lg:text-lg"
              >
                Cybercrime operates continuously, across borders, and at massive scale.
                The world no longer needs awareness. It needs{" "}
                <span className="font-bold text-zinc-900">
                  professionals trained to defend real systems under real pressure.
                </span>
              </TimelineContent>
            </LandingBentoCell>

            <LandingBentoCell className="flex min-h-[500px] items-center md:min-h-[600px]">
              <div className="relative h-full min-h-[500px] w-full md:min-h-[600px]">
                <RadialOrbitalTimeline timelineData={timelineData} />
              </div>
            </LandingBentoCell>
          </LandingBentoRow>
        </LandingBento>
      </div>
    </LandingSectionShell>
  );
};

export default GlobalThreat;
