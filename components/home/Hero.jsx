import Link from "next/link";
import Image from "next/image";
import TrustBar from "./TrustBar";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] bg-white overflow-hidden flex items-center pt-24 lg:pt-32 pb-32">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Right Image (Large Santa) */}
      <FadeIn
        y={0}
        duration={1.5}
        className="absolute top-12 right-0 w-full lg:w-[60%] h-[calc(100%-3rem)] hidden lg:block z-0"
      >
        <Image
          src="/images/hero_santa.png"
          alt="Premium Santa Claus"
          fill
          className="object-contain object-right-bottom mix-blend-multiply brightness-[1.05]"
          priority
          sizes="(max-width: 1024px) 0vw, 60vw"
        />
      </FadeIn>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer
          className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[50%]"
        >
          <FadeInItem as="h1" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-dark leading-tight mb-6 tracking-tight">
            Most Santa photos end up in a drawer. <br />
            <span className="text-brand-red italic font-light">Here is why yours will end up on the wall.</span>
          </FadeInItem>

          <FadeInItem as="p" className="text-base text-gray-600 max-w-md mb-8 leading-relaxed">
            Professional photography. Two magical experiences. Now at 9 locations across the USA this
            Christmas season.
          </FadeInItem>

          <FadeInItem className="flex flex-col sm:flex-row items-center lg:items-start gap-4 w-full sm:w-auto">
            <Link href="/book-now" className="w-full sm:w-auto px-8 py-3.5 bg-brand-red text-white font-semibold text-xs tracking-[0.2em] uppercase hover:bg-brand-red-dark transition-colors rounded-sm shadow-sm inline-block text-center">
              Book Your Session Now
            </Link>
          </FadeInItem>
        </StaggerContainer>
      </div>

      {/* Trust Bar (Static Marquee) */}
      <TrustBar />
    </section>
  );
}
