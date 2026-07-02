import HomeHero from "@/components/ui/HomeHero";
import AboutIndia from "@/components/features/home/AboutIndia";
import AboutUsa from "@/components/features/home/AboutUsa";
import GlobalThreat from "@/components/features/home/GlobalThreat";
import WhyIsrael from "@/components/features/home/WhyIsrael";
import HomeOverview from "@/components/features/home/HomeOverview";
import Why from "@/components/features/home/WhyHome";
import PracticalHome from "@/components/features/home/PracticalHome";
import CallToAction from "@/components/common/CallToAction";
// import Testimonial from "../components/Testimonial";


const Home = () => {
  return (
    <>
      <div className="relative z-10">
        <HomeHero />
        <HomeOverview />
        <GlobalThreat />
        <WhyIsrael />
        <AboutIndia />
        <AboutUsa />
        <Why />
        <PracticalHome />
        <CallToAction />
      </div>
    </>
  );
};

export default Home;
