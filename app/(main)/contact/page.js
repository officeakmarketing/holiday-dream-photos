import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";

export const metadata = {
  title: 'Contact Us | Holiday Dream Photos',
  description: 'Questions about booking, locations, private events, or anything else — get in touch.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 bg-black text-center relative overflow-hidden mb-12 lg:mb-16">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/traditional-santa.jpg" 
            alt="Contact Holiday Dream Photos" 
            fill
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover scale-105 object-center opacity-70"
          />
          {/* Clean Transparent Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6 block drop-shadow-md">
            Contact Us
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mb-4 md:mb-6 leading-tight drop-shadow-xl">
            We are here to help
          </h1>
          <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            Questions about booking, locations, private events, or anything else get in touch and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* SECTION 2: FORM */}
      <section className="px-4 sm:px-6 lg:px-12 w-full max-w-[1500px] mx-auto mb-16 lg:mb-20 relative z-20">
        <ContactForm />
      </section>

    </div>
  );
}
