import { Sparkles, Camera, CalendarCheck } from "lucide-react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import FadeInItem from "../animations/FadeInItem";

export default function SolutionIntro() {
  const columns = [
    {
      icon: Sparkles,
      title: "The Magic",
      text: "From the moment your family arrives to the moment you leave, every detail is designed to feel like Christmas morning. The atmosphere, the setting, the experience, all of it built to make your child believe.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    },
    {
      icon: Camera,
      title: "The Photography",
      text: "Every session is captured with professional lighting and equipment. These are not snapshots. These are the photos you frame, display, and share for the rest of your life.",
      bgColor: "bg-brand-dark",
      textColor: "text-white",
      iconColor: "text-brand-dark",
    },
    {
      icon: CalendarCheck,
      title: "The Booking",
      text: "Pick your location, pick your time, pay securely online. Your slot is confirmed instantly. No phone calls. No waiting lists. No uncertainty.",
      bgColor: "bg-brand-red",
      textColor: "text-white",
      iconColor: "text-brand-red",
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-light relative overflow-hidden">
      
      {/* Decorative Wreath Background */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-[0.05] md:opacity-[0.20] pointer-events-none z-0">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-[0.05] md:opacity-[0.20] pointer-events-none z-0 rotate-180">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <FadeIn 
          duration={0.8}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-brand-red"></div>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
              The Solution
            </p>
            <div className="w-8 h-[1px] bg-brand-red"></div>
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-brand-dark leading-tight drop-shadow-sm">
            A Santa experience designed around one thing: <br className="hidden md:block" /><span className="italic text-brand-red">your family's perfect moment.</span>
          </h2>
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {columns.map((col, idx) => (
            <FadeInItem 
              key={idx}
              duration={0.7}
              y={30}
              className={`flex flex-col items-center text-center px-4 py-6 sm:px-5 sm:py-8 md:px-6 md:py-12 lg:px-10 lg:py-14 ${col.bgColor} rounded-sm shadow-xl hover:-translate-y-2 transition-transform duration-500`}
            >
              {/* Icon in a white circle */}
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4 sm:mb-6 md:mb-8 ${col.iconColor}`}>
                <col.icon strokeWidth={1.5} size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              
              <h3 className={`font-heading text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 ${col.textColor}`}>
                {col.title}
              </h3>
              
              <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-white/30 mb-3 sm:mb-4 md:mb-6 rounded-full"></div>
              
              <p className={`${col.textColor} font-light text-sm sm:text-base leading-relaxed opacity-90`}>
                {col.text}
              </p>
            </FadeInItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
