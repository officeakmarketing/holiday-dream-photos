import Image from "next/image";
import FadeIn from "../animations/FadeIn";

export default function ProblemIntro() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden text-white">
      
      {/* Background Image with Dark Red Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/countdown-banner.jpg"
          alt="Magical Holiday Background"
          fill
          className="object-cover"
        />
        {/* Heavy black overlay to let the natural red of the image show through subtly */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10">
        
        <FadeIn 
          as="h2"
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] mb-8"
        >
          Most Santa experiences leave families disappointed. <br className="hidden md:block" />
          <span className="italic text-brand-red font-light">Yours does not have to be one of them.</span>
        </FadeIn>
        
        <div className="w-16 h-[1px] bg-brand-red/50 mx-auto mb-8"></div>
        
        <FadeIn
          delay={0.2}
          className="flex flex-col gap-4 text-base md:text-xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Long queues. Fake setups. Rushed sessions. Lighting so bad the photo ends up in a drawer.
          </p>
          <p>
            You drove across town. You waited an hour. You paid for a memory that does not look like one.
          </p>
          <p className="text-white font-medium">
            Your child deserved better. Your family deserved better.
          </p>
          <p className="text-brand-red font-semibold uppercase tracking-widest text-sm mt-2">
            That is why Holiday Dream Photos exists.
          </p>
        </FadeIn>
        
      </div>
    </section>
  );
}
