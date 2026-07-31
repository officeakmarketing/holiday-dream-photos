import Hero from "@/components/home/Hero";
import ProblemIntro from "@/components/home/ProblemIntro";
import SolutionIntro from "@/components/home/SolutionIntro";
import SantaSplit from "@/components/home/SantaSplit";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import Urgency from "@/components/home/Urgency";
import LocationsStrip from "@/components/home/LocationsStrip";
import FinalCTA from "@/components/home/FinalCTA";
import MagicMoments from "@/components/home/MagicMoments";
import QuickLinks from "@/components/home/QuickLinks";
import SantaSplitVariant2 from "@/components/home/SantaSplitVariant2";
import SantaSplitVariant3 from "@/components/home/SantaSplitVariant3";
export const metadata = {
  title: 'Holiday Dream Photos | Premium Santa Experiences',
  description: 'Book a premium, unhurried holiday photo experience with our authentic Traditional and Black Santas. Serving families and corporate events.',
};

export default function Home() {
  return (
    <>
      <Hero />

      <ProblemIntro />
      <SolutionIntro />
      <SantaSplitVariant2 />
      <Testimonials />
      <HowItWorks />
      <Urgency />
      <LocationsStrip />
      <FinalCTA />
      {/* <MagicMoments /> */}
      {/* <QuickLinks /> */}
    </>
  );
}
