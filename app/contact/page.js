import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: 'Contact Us | Holiday Dream Photos',
  description: 'Get in touch with the Holiday Dream Photos team for general enquiries, support, or location details.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      
      {/* Header spacing to account for fixed global Nav */}
      <div className="pt-40 lg:pt-56 pb-32 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        
        {/* Info Column */}
        <div className="flex-1 lg:sticky lg:top-40">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            Get in Touch
          </p>
          <h1 className="font-bodoni text-6xl md:text-[5.5rem] text-[#113122] mb-10 leading-none tracking-tight">
            Contact Our <br/>
            <span className="italic text-brand-red">Team</span>
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl font-light leading-[1.8] mb-16 max-w-xl">
            Have a question about your booking, our locations, or looking to join our magical team? Send us a message and we will respond as soon as possible.
          </p>
          
          <div className="space-y-12">
            <div>
              <p className="font-bodoni text-[#113122] text-2xl mb-2">Headquarters</p>
              <p className="text-gray-500 font-light text-base leading-relaxed">
                123 North Pole Way<br/>
                Suite 400<br/>
                Winterville, ST 12345
              </p>
            </div>

            <div>
              <p className="font-bodoni text-[#113122] text-2xl mb-2">Email</p>
              <p className="text-gray-500 font-light text-base">
                support@holidaydreamphotos.com
              </p>
            </div>

            <div>
              <p className="font-bodoni text-[#113122] text-2xl mb-2">Phone</p>
              <p className="text-gray-500 font-light text-base">
                1-800-555-0199
              </p>
            </div>
          </div>
        </div>

        {/* Form Column - True Editorial, no box */}
        <div className="flex-1 w-full relative">
          <div className="w-16 h-[1px] bg-[#113122] mb-12"></div>
          <h3 className="font-bodoni text-4xl text-[#113122] mb-12">Send a Message</h3>
          
          {/* Client Component for the form to handle state */}
          <ContactForm />
        </div>

      </div>
    </div>
  );
}
