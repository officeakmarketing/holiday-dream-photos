import PageHero from "@/components/ui/PageHero";
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
      <PageHero 
        title="We are here to help"
        subtitle="Contact Us"
        description="Questions about booking, locations, private events, or anything else get in touch and we will get back to you within 24 hours."
        imageSrc="/images/background.jpg"
        imageAlt="Contact Holiday Dream Photos"
        className="pt-32 pb-32 md:pt-32 md:pb-40"
        imageOpacity="opacity-70"
      />

      {/* SECTION 2: FORM */}
      <section className="px-0 md:px-6 lg:px-12 w-full max-w-[1500px] mx-auto -mt-20 md:-mt-28 mb-16 lg:mb-20 relative z-20">
        <ContactForm />
      </section>

    </div>
  );
}
