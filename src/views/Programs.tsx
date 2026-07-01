import CourseCard from "@/components/CourseCardCatagories1";
import Certification from "@/components/LevelUp";
import PerformanceTranscript from "@/components/PerformanceTranscript";
import ProgramPageOpening from "@/components/ProgramPageOpening";
import IndustryRecognition from "@/components/IndustryRecognition";
import ProgramHero from "@/components/ProgramHero";
import ElitBootcamp from "@/components/ElitBootcamp";

const sectionDivider = (
  <div
    className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t border-dashed border-zinc-200"
    aria-hidden
  />
);

const Programs = () => {
  return (
    <div className="relative z-10">
      <ProgramHero />
      <ProgramPageOpening />
      {sectionDivider}
      <ElitBootcamp />
      {sectionDivider}
      <CourseCard />
      {sectionDivider}
      <Certification />
      {sectionDivider}
      <PerformanceTranscript />
      {sectionDivider}
      <IndustryRecognition />
    </div>
  );
};

export default Programs;
