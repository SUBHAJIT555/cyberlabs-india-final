import HomeHero from "../components/ui/HomeHero";
import AboutIndia from "../components/AboutIndia";
import AboutUsa from "../components/AboutUsa";
import GlobalThreat from "../components/GlobalThreat";
import WhyIsrael from "../components/WhyIsrael";
import HomeOverview from "../components/HomeOverview";
import Why from "../components/WhyHome";
import PracticalHome from "../components/PracticalHome";
import CallToAction from "../components/CallToAction";
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
