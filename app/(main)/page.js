import Hero from "@/components/home/Hero";
import TrustIntro from "@/components/home/TrustIntro";
import BrandIntro from "@/components/home/BrandIntro";
import SantaSplit from "@/components/home/SantaSplit";
import MagicMoments from "@/components/home/MagicMoments";
import QuickLinks from "@/components/home/QuickLinks";

export const metadata = {
  title: 'Holiday Dream Photos | Premium Santa Experiences',
  description: 'Book a premium, unhurried holiday photo experience with our authentic Traditional and Black Santas. Serving families and corporate events.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <BrandIntro />
      <SantaSplit />
      <MagicMoments />
      <QuickLinks />
    </>
  );
}
