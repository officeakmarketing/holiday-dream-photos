import BookingWidget from "@/components/booking/BookingWidget";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Pick your location, choose your time, and pay securely online.',
};

export default function BookNowPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* SECTION 1: HERO */}
      <PageHero 
        title="Book Your Holiday Dream Photos Session"
        subtitle="Reservation System"
        description="Pick your location, choose your time, and pay securely online. Your session is confirmed instantly and a confirmation lands straight in your inbox."
        imageSrc="/images/background.jpg"
        imageAlt="Book Your Session"
        className="min-h-[70vh] flex flex-col justify-center pt-32 pb-16 md:pt-32 md:pb-12"
        overlayOpacity="bg-black/70"
        titleClassName="text-4xl sm:text-5xl md:text-6xl max-w-4xl mx-auto"
      />

      {/* SECTION 2: ACUITY WIDGET */}
      <section className="px-4 sm:px-6 max-w-[1000px] mx-auto w-full relative z-20 py-16 md:py-24">
        
        <BookingWidget />

        {/* Below Widget Text */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl border border-brand-dark/5 shadow-md max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-brand-dark/80 font-light">
            Questions about your booking? Contact us at <a href="mailto:info@holidaydreamphotos.com" className="text-brand-red font-bold hover:underline transition-all">info@holidaydreamphotos.com</a> and we will get back to you within 24 hours.
          </p>
        </div>

      </section>

    </div>
  );
}
