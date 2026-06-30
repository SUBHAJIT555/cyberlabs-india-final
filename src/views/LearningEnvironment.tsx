import PlatformHero from "../components/ui/SimulatorHero";
import IntroLearning from "../components/IntroLearning";
import WhoThisEnvironment from "../components/WhoThisEnvironment";
// import Faq from "../components/Faq";
// import CallToAction from "../components/CallToAction";
// import ProgramsCard from "../components/ProgramsCard";
import VirtualSimulator from "../components/VirtualSimulator";
import EnterpriseLab from "../components/EnterpriseLab";
import WhyThisMatters from "../components/WhyThisMatters";

const Platform = () => {
  return (
    <>
      
      <div className="relative z-10">
        <PlatformHero />
        <IntroLearning />
        <VirtualSimulator />
        <EnterpriseLab />
        <WhoThisEnvironment />
        <WhyThisMatters />
      </div>
    </>
  );
};

export default Platform;
