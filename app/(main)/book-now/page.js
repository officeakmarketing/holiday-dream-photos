export const metadata = {
  title: 'Book Now | Holiday Dream Photos',
  description: 'Book your premium Santa photography session. Select your preferred mall location and choose between our Traditional or Black Santa experiences.',
};

export default function BookNowPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 pb-16 pt-32">
        
        {/* Editorial Header */}
        <div className="text-center mb-20">
          <p className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            Reservation System
          </p>
          <h1 className="font-heading text-6xl md:text-[5.5rem] text-brand-dark mb-8 leading-none tracking-tight">
            Reserve Your <span className="italic text-brand-red">Magic</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-[1.8]">
            Follow the steps below to secure your unhurried, premium holiday experience. Select your location, choose your Santa, and reserve your time.
          </p>
        </div>

        {/* Steps Guide - Minimalist Text Only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 border-y border-gray-200 py-12">
          <div className="text-center px-4">
            <span className="text-brand-red font-heading text-2xl italic mb-3 block">01.</span>
            <p className="font-heading text-brand-dark text-xl mb-2">Location</p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Select your preferred mall from the dropdown below.</p>
          </div>
          <div className="text-center px-4 border-t md:border-t-0 md:border-l md:border-r border-gray-200 pt-12 md:pt-0">
            <span className="text-brand-red font-heading text-2xl italic mb-3 block">02.</span>
            <p className="font-heading text-brand-dark text-xl mb-2">Experience</p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Choose Traditional or Black Santa, then pick a package.</p>
          </div>
          <div className="text-center px-4 border-t md:border-t-0 border-gray-200 pt-12 md:pt-0">
            <span className="text-brand-red font-heading text-2xl italic mb-3 block">03.</span>
            <p className="font-heading text-brand-dark text-xl mb-2">Confirm</p>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Pick a time slot and complete your booking seamlessly.</p>
          </div>
        </div>

        {/* Acuity Embed Container */}
        <div className="bg-white border border-gray-200 min-h-[700px] flex flex-col relative w-full">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-dark"></div>

          {/* Acuity Widget Placeholder */}
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center w-full">
            <div className="w-16 h-16 border border-gray-200 rounded-full animate-pulse mx-auto mb-8 bg-gray-50"></div>
            <p className="font-heading text-3xl text-brand-dark mb-4">Scheduling Loading...</p>
            <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">
              (Client will provide Acuity embed code here)
            </p>
          </div>
          
        </div>

      </div>
    </div>
  );
}
