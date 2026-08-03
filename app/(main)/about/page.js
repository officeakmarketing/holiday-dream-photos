import Image from "next/image";

export const metadata = {
  title: 'Our Story | Holiday Dream Photos',
  description: 'Learn about the magic behind Holiday Dream Photos and our commitment to authentic, real-bearded Santa experiences.',
};

export default function AboutPage() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Brand Story Hero */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto pt-32 mb-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="w-full lg:w-[45%]">
            <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              Our Story
            </p>
            <h1 className="font-heading text-6xl lg:text-[6rem] text-brand-dark leading-none tracking-tight mb-8 lg:mb-0">
              The Magic of an <br/>
              <span className="italic text-brand-red">Authentic</span> Experience
            </h1>
          </div>

          <div className="w-full lg:w-[55%] flex flex-col justify-end">
            <p className="text-gray-500 text-xl font-light leading-[1.8] mb-8">
              Holiday Dream Photos was founded on a simple premise: the magic of Christmas should feel real. 
              We grew tired of rushed mall lines, synthetic suits, and inauthentic interactions. 
            </p>
            <p className="text-gray-500 text-lg font-light leading-[1.8]">
              That is why we guarantee every single one of our Santas, both Traditional and Black, features a real beard, a real belly, and a genuine love for bringing joy to children. 
              From our meticulously designed sets to our unhurried booking system, every detail is crafted to give your family a premium, unforgettable holiday memory.
            </p>
          </div>

        </div>
      </section>

      {/* Hero Image Break */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-32">
        <div className="w-full relative aspect-[21/9] bg-white">
          <img
            src="/images/traditional-santa.jpg"
            alt="The Holiday Dream Photos Magic"
            className="w-full h-full object-cover object-[50%_20%]"
          />
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 border-t border-gray-200">
        <div className="mb-20">
          <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            The Team
          </span>
          <h2 className="font-heading text-5xl lg:text-[5rem] text-brand-dark tracking-tight">
            Magic Makers
          </h2>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {[1, 2, 3].map((member) => (
            <div key={member} className="flex flex-col group">
              <div className="relative aspect-[3/4] w-full mb-8 bg-[#EAE8E3]">
                {/* Client will provide photos */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-xs uppercase tracking-widest">Team Photo</span>
                </div>
              </div>
              <h3 className="font-heading text-3xl text-brand-dark mb-2">Name Placeholder</h3>
              <p className="text-brand-red uppercase tracking-[0.2em] text-[10px] font-bold mb-6">Title Placeholder</p>
              <p className="text-gray-500 font-light text-base leading-[1.8]">
                Short bio placeholder describing their role in making the holiday magic happen.
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
