import EnquireForm from "@/components/forms/EnquireForm";
import { Building, Users, School, Home, Store } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: 'Private Events | Holiday Dream Photos',
  description: 'Book Santa for corporate events, private parties, or community gatherings.',
};

export default function PrivateEventsPage() {
  const eventTypes = [
    { title: "Corporate holiday parties & team celebrations", icon: Building },
    { title: "Community events & neighbourhood gatherings", icon: Users },
    { title: "School and church Christmas events", icon: School },
    { title: "Private family parties", icon: Home },
    { title: "Brand activations & retail experiences", icon: Store },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <PageHero 
        title="Bring the Christmas Magic to Your Event"
        subtitle="Exclusive Experiences"
        description="Corporate parties. Private gatherings. Community celebrations. We bring a premium Santa experience directly to you."
        imageSrc="/images/background3.jpg"
        imageAlt="Private Events"
        className="pt-32 pb-16 md:pt-48 md:pb-24"
      />

      {/* SECTION 2: WHO THIS IS FOR (CINEMATIC BENTO GRID) */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-20">
        
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">
            Exclusive Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
            Perfect For
          </h2>
          <div className="w-16 h-[1px] bg-brand-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {[
            { 
              title: "Corporate holiday parties & team celebrations", 
              tag: "Corporate", 
              image: "/images/background.jpg",
              span: "lg:col-span-7",
              height: "h-80 lg:h-[400px]"
            },
            { 
              title: "Community events & neighbourhood gatherings", 
              tag: "Community", 
              image: "/images/gallery-1.jpg",
              span: "lg:col-span-5",
              height: "h-80 lg:h-[400px]"
            },
            { 
              title: "School and church Christmas events", 
              tag: "Education", 
              image: "/images/background2.jpg",
              span: "lg:col-span-4",
              height: "h-80 lg:h-[450px]"
            },
            { 
              title: "Private family parties", 
              tag: "Private", 
              image: "/images/background3.jpg",
              span: "lg:col-span-4",
              height: "h-80 lg:h-[450px]"
            },
            { 
              title: "Brand activations & retail experiences", 
              tag: "Commercial", 
              image: "/images/almedamall.png",
              span: "lg:col-span-4",
              height: "h-80 lg:h-[450px]"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-2xl ${item.height} ${item.span} border border-brand-dark/10 shadow-xl`}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
              />
              {/* Complex gradient for premium depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black group-hover:via-black/60 transition-colors duration-700"></div>
              
              <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end text-left z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                    0{index + 1}
                  </span>
                  <div className="w-6 h-[1px] bg-brand-red/50"></div>
                  <span className="text-white/70 font-light uppercase tracking-[0.1em] text-[10px] md:text-xs">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-white font-heading text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ENQUIRY FORM */}
      <section className="py-16 md:py-24 bg-white border-t border-brand-dark/10 relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-full max-w-xl h-full opacity-5 pointer-events-none hidden lg:block overflow-hidden">
           <Image src="/images/hero_wreath.png" alt="" fill sizes="(max-width: 1024px) 0vw, 33vw" className="object-cover -translate-y-1/4 translate-x-1/4 scale-150" />
        </div>

        <div className="px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto w-full relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block">
              Book Your Event
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-4 md:mb-6">Tell us about your event</h2>
            <p className="text-brand-dark/70 text-base md:text-lg font-light max-w-2xl mx-auto">
              Fill in the form below and we will get back to you within 24 hours with availability and pricing.
            </p>
          </div>

          <div className="w-full">
            <EnquireForm />
            
            {/* BELOW FORM TEXT */}
            <div className="mt-8 text-center pt-8">
              <p className="text-brand-red font-bold text-lg md:text-xl italic drop-shadow-sm">
                We respond to every enquiry within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
