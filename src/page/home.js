import { useEffect } from "react";
import WOW from 'wowjs';
import BioSection from "../components/bioSection";
import HeroSection from "../components/heroSection";
import ServiceSection from "../components/serviceSection";
import FaqSection from "../components/faqSection";
import BlogSection from "../components/blogSection";
import TestemonilSection from "../components/testemonialSection";


function Home() {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="section-bg py-180">
        <HeroSection />
      </div>
      <div className="py-115">
        <BioSection />
      </div>
      <div className="section-bg py-115">
        <ServiceSection />
      </div>
      <div className="py-115">
        <FaqSection />
      </div>
      <div className="section-bg py-115">
        <TestemonilSection />
      </div>
      <div className="py-115">
        <BlogSection />
      </div>
    </>
  );
}

export default Home;
