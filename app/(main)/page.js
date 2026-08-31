import Hero from "@/components/home/Hero";
import CountdownBanner from "@/components/home/CountdownBanner";
import ProblemIntro from "@/components/home/ProblemIntro";
import SolutionIntro from "@/components/home/SolutionIntro";
import SantaSplit from "@/components/home/SantaSplit";
import NickCannonSection from "@/components/home/NickCannonSection";
import HowItWorks from "@/components/home/HowItWorks";
import Urgency from "@/components/home/Urgency";
import LocationsStrip from "@/components/home/LocationsStrip";
import FinalCTA from "@/components/home/FinalCTA";
import FaqAccordion from "@/components/home/FaqAccordion";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
  title: 'Holiday Dream Photos | Premium Santa Experiences',
  description: 'Book a premium, unhurried holiday photo experience with our authentic Traditional and Black Santas. Serving families and corporate events.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <CountdownBanner />

      <ProblemIntro />
      <SolutionIntro />
      <SantaSplit />
      <NickCannonSection />
      
      {/* Middle Block: Logistics, Trust, and Scarcity */}
      <HowItWorks />
      <LocationsStrip />
      <Urgency />
      
      {/* Ending Block: The Requested Sequence */}
      {/* <FinalCTA /> */}
      
      <Testimonials />
      
      <div className="bg-brand-light border-t border-brand-dark/5">
        <FaqAccordion />
      </div>
      
      <FinalCTA />
    </>
  );
}
