import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Experience",
      text: "Traditional Santa or Black Santa. Both are premium. Both are magical. Pick what feels right for your family.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    },
    {
      number: "2",
      title: "Pick Your Location & Time",
      text: "8 locations across the USA. Mississippi, Texas, Arkansas, Nebraska, Minnesota, Pennsylvania, and Alabama. Morning, afternoon, and evening slots throughout the holiday season.",
      bgColor: "bg-brand-dark",
      textColor: "text-white",
      iconColor: "text-brand-dark",
    },
    {
      number: "3",
      title: "Show Up and Make Magic",
      text: "Your session is confirmed the moment you book. We handle everything else. You show up and enjoy the moment.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              How It Works
            </p>
            <div className="w-8 h-[1px] bg-brand-red"></div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-brand-dark leading-tight drop-shadow-sm">
            Book your perfect session <br className="hidden md:block" />
            <span className="italic text-brand-red">in three steps</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16 md:mb-24"
        >
          {steps.map((step, idx) => (
            <FadeInItem 
              key={idx}
              className={`flex flex-col items-center text-center px-4 py-6 sm:px-6 sm:py-8 md:px-6 md:py-12 lg:px-10 lg:py-14 ${step.bgColor} rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 max-w-[280px] sm:max-w-[340px] md:max-w-none mx-auto w-full`}
            >
              {/* Unique Step Number Badge */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/40 flex items-center justify-center mb-3 sm:mb-6 md:mb-8 font-heading text-xl sm:text-2xl md:text-4xl text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                {step.number}
              </div>
              
              <h3 className={`font-heading text-lg sm:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 ${step.textColor} drop-shadow-sm`}>
                {step.title}
              </h3>
              
              <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-white/30 mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
              
              <p className={`${step.textColor} font-light text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed opacity-95`}>
                {step.text}
              </p>
            </FadeInItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <FadeIn 
          delay={0.4}
          className="flex justify-center"
        >
          <Link 
            href="/book-now"
            className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors duration-300 shadow-xl group text-center leading-snug"
          >
            <span>Book Now <span className="hidden md:inline">|</span></span>
            <span className="flex items-center gap-2 md:gap-4">
              It Takes 60 Seconds
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
