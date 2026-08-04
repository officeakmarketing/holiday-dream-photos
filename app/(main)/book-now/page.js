import BookingWidget from "@/components/booking/BookingWidget";
import Image from "next/image";

export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Pick your location, choose your time, and pay securely online.',
};

export default function BookNowPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-32 md:pt-48 md:pb-56 px-4 bg-black text-center relative overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/images/background.jpg" 
            alt="Book Your Session" 
            fill
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover scale-105"
          />
          {/* Clean Transparent Black Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block drop-shadow-md">
            Reservation System
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-tight drop-shadow-xl px-2">
            Book Your Holiday Dream Photos Session
          </h1>
          <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            Pick your location, choose your time, and pay securely online. Your session is confirmed instantly and a confirmation lands straight in your inbox.
          </p>
        </div>
      </section>

      {/* SECTION 2: ACUITY WIDGET */}
      <section className="px-4 sm:px-6 max-w-[1000px] mx-auto w-full relative z-20 -mt-24 md:-mt-40 pb-24">
        
        <BookingWidget />

        {/* Below Widget Text */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl border border-brand-dark/5 shadow-md max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-brand-dark/80 font-light">
            Questions about your booking? Contact us at <a href="mailto:[email]" className="text-brand-red font-bold hover:underline transition-all">[email]</a> and we will get back to you within 24 hours.
          </p>
        </div>

      </section>

    </div>
  );
}
