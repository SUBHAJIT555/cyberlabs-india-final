import AboutHero from "../components/ui/AboutHero";
import {
  AboutMerged,
  AboutIndiaSection,
  AboutGlobalFramework,
  AboutHowDifferent,
  AboutTrainsWhoClosing,
} from "../components/about";
// import CallToAction from "../components/CallToAction";
// import WhoAreCyberlabs from "../components/WhoAreCyberlabs";
// import AboutWhy from "../components/AboutWhy";
// import AboutWhatMakes from "../components/AboutWhatMakes";
// import AboutWho from "../components/AboutWho";
// import Team from "../components/Team";
// import LevelUp from "../components/LevelUp";
// import Faq from "../components/Faq";

const About = () => {
  return (
    <>
     
      <div className="relative z-10">
        <AboutHero />
        <AboutMerged />
        <AboutIndiaSection />
        <AboutGlobalFramework />
        <AboutHowDifferent />
        <AboutTrainsWhoClosing />
      </div>
    </>
  );
};

export default About;
