import Image from "next/image";
import EnquireForm from "@/components/forms/EnquireForm";

export const metadata = {
  title: 'Private Events | Holiday Dream Photos',
  description: 'Book Santa for corporate events, private parties, or community gatherings.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getPrivateEventsData = async () => {
  return {
    title: "Private Events & Corporate Bookings",
    description: "Bring the magic of Holiday Dream Photos to your next private party, corporate event, or community gathering. Our authentic, real-bearded Santas provide a premium, unforgettable experience tailored perfectly for your guests.",
    imageUrl: "/images/black-santa.jpg"
  };
};

export default async function PrivateEventsPage() {
  const data = await getPrivateEventsData();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Header spacing to account for fixed global Nav */}
      <div className="pt-32 pb-16 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">

        {/* Info Column */}
        <div className="flex-1 lg:sticky lg:top-40">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            Exclusive Experiences
          </p>
          <h1 className="font-bodoni text-5xl md:text-7xl text-[#113122] mb-8 leading-[1.1] tracking-tight">
            {data.title.split('&').map((text, i, arr) => (
              <span key={i}>
                {text.trim()} {i < arr.length - 1 && <span className="italic text-brand-red font-light mx-2">&amp;</span>}
              </span>
            ))}
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl font-light leading-[1.8] mb-12 max-w-xl">
            {data.description}
          </p>


        </div>

        {/* Form Column - True Editorial */}
        <div className="flex-1 w-full relative pt-12 lg:pt-0">
          <div className="w-16 h-[1px] bg-[#113122] mb-12"></div>
          <h3 className="font-bodoni text-4xl text-[#113122] mb-12">Enquire Now</h3>

          {/* Client Component for the form to handle state */}
          <EnquireForm />
        </div>

      </div>
    </div>
  );
}
