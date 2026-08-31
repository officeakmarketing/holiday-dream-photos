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
  },
  {
    id: 2,
    quote: "Seeing my son's face when he met the Black Santa for the first time is something I will never forget. He grabbed my hand and whispered 'Mama, Santa looks like us.' That moment alone was worth everything.",
    name: "Danielle",
    subtitle: "Black Santa",
    stars: 5,
  },
  {
    id: 3,
    quote: "Easy to book, beautifully organised, and the photos were stunning. My twins are already asking to go back.",
    name: "Jennifer",
    subtitle: "Traditional Santa",
    stars: 5,
  },
  {
    id: 4,
    quote: "Holiday Dream Photos did something I did not think was possible, they made my whole family want to take a Christmas photo together. My husband never joins in. This year he was the one suggesting we book early. The Black Santa experience was genuine, warm, and absolutely magical. We are telling everyone we know.",
    name: "Keisha",
    subtitle: "Black Santa",
    stars: 5,
  },
  {
    id: 5,
    quote: "Professional lighting, a real setup, and a Santa who was genuinely great with kids. Our three-year-old who usually cries at everything was laughing the whole time.",
    name: "Sarah",
    subtitle: "Traditional Santa, Blaine MN",
    stars: 5,
  },
  {
    id: 6,
    quote: "We drove 45 minutes and it was worth every mile. The photos are stunning. More importantly my kids had a Santa experience that reflected them and that is something money cannot put a price on.",
    name: "Trevon and Aisha",
    subtitle: "Black Santa",
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-brand-light relative overflow-hidden">
      
      {/* Decorative Wreath Backgrounds */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.03] pointer-events-none z-0">
        <Image src="/images/hero_wreath.png" alt="Wreath" fill className="object-contain" />
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

        {/* Masonry Grid for Testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <FadeIn
              key={t.id}
              y={40}
              duration={0.8}
              delay={index * 0.1}
              className="flex flex-col relative p-8 sm:p-10 mb-6 md:mb-8 rounded-2xl md:rounded-3xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100/80 transition-all duration-500 w-full hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] break-inside-avoid"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-dark/5 fill-current rotate-180" />

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-dark fill-brand-dark" />
                ))}
              </div>

              <p className="text-brand-dark/90 font-light text-lg sm:text-xl leading-[1.7] mb-8 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex flex-col mt-auto relative z-10 pt-6 border-t border-brand-dark/5">
                <span className="font-bold text-brand-dark uppercase tracking-[0.2em] text-xs mb-1">
                  {t.name}
                </span>
                <span className="text-brand-red text-[10px] uppercase tracking-[0.3em] font-bold">
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
