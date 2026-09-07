import { Star, Quote } from "lucide-react";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";

const testimonials = [
  {
    id: 1,
    quote: "We have done the mall Santa experience every year for the last five years and nothing has come close to Holiday Dream Photos. The setup was beautiful, the photographer was incredible, and our daughter actually believed. The photos came out better than anything we have ever had. We are already booked for next year.",
    name: "Marcus T",
    subtitle: "Traditional Santa",
    stars: 5,
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 3,
    quote: "Easy to book, beautifully organised, and the photos were stunning. My twins are already asking to go back.",
    name: "Jennifer",
    subtitle: "Traditional Santa",
    stars: 5,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: 5,
    quote: "Professional lighting, a real setup, and a Santa who was genuinely great with kids. Our three-year-old who usually cries at everything was laughing the whole time.",
    name: "Sarah",
    subtitle: "Traditional Santa, Blaine MN",
    stars: 5,
    span: "md:col-span-1 lg:col-span-1"
  },
  {
    id: 4,
    quote: "Holiday Dream Photos did something I did not think was possible, they made my whole family want to take a Christmas photo together. My husband never joins in. This year he was the one suggesting we book early. The Black Santa experience was genuine, warm, and absolutely magical. We are telling everyone we know.",
    name: "Keisha",
    subtitle: "Black Santa",
    stars: 5,
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 2,
    quote: "Seeing my son's face when he met the Black Santa for the first time is something I will never forget. He grabbed my hand and whispered 'Mama, Santa looks like us.' That moment alone was worth everything.",
    name: "Danielle",
    subtitle: "Black Santa",
    stars: 5,
    span: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 6,
    quote: "We drove 45 minutes and it was worth every mile. The photos are stunning. More importantly my kids had a Santa experience that reflected them and that is something money cannot put a price on.",
    name: "Trevon and Aisha",
    subtitle: "Black Santa",
    stars: 5,
    span: "md:col-span-1 lg:col-span-1"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-30 md:opacity-40 pointer-events-none z-0 translate-x-1/4 -translate-y-1/4 scale-125">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] opacity-30 md:opacity-40 pointer-events-none z-0 rotate-180 -translate-x-1/4 translate-y-1/4 scale-125">
        <Image
          src="/images/hero_wreath.png"
          alt="Decorative Wreath"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="relative inline-block w-full">
            <span className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[5rem] md:text-[7rem] lg:text-[10rem] text-brand-dark/5 italic whitespace-nowrap pointer-events-none select-none">
              Testimonials
            </span>
            <h2 className="relative z-10 font-heading text-4xl sm:text-5xl md:text-6xl text-brand-dark tracking-tight leading-tight px-4">
              What families <br className="sm:hidden" />
              <span className="italic text-brand-red drop-shadow-sm">are saying</span>
            </h2>
          </div>
        </div>

        {/* Bento Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          {testimonials.map((t, index) => (
            <FadeIn
              key={t.id}
              y={40}
              duration={0.8}
              delay={index * 0.1}
              className={`flex flex-col relative p-8 sm:p-10 lg:p-12 text-center rounded-3xl bg-[#fcfaf9] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/[0.03] border-t-4 border-t-[#c71e32] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 w-full h-full ${t.span}`}
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 sm:w-10 sm:h-10 text-[#c71e32]/10 fill-[#c71e32]/5 rotate-180" />

              <div className="flex justify-center gap-1.5 mb-6 relative z-10">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#c71e32] fill-[#c71e32]" />
                ))}
              </div>

              <p className="text-brand-dark/90 font-light text-base sm:text-lg leading-relaxed mb-8 relative z-10 flex-1 italic drop-shadow-sm">
                "{t.quote}"
              </p>

              <div className="flex flex-col items-center justify-center mt-auto relative z-10 pt-6 border-t border-brand-dark/5">
                <span className="font-bold text-brand-dark uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-1.5">
                  {t.name}
                </span>
                <span className="text-[#c71e32] text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
                  {t.subtitle}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
