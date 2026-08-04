import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Easter Experience | Holiday Dream Photos',
  description: 'The Magic Does Not Stop at Christmas. Introducing the Holiday Dream Photos Easter Experience.',
};

export default function EasterPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto pt-32 lg:pt-40 mb-16 lg:mb-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-brand-red uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
            Spring 2027
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.1] tracking-tight mb-6">
            The Magic Does Not Stop at Christmas
          </h1>
          <p className="text-brand-dark/70 text-xl md:text-2xl font-light leading-[1.8] max-w-2xl mb-10">
            Introducing the Holiday Dream Photos Easter Experience professional photography, magical moments, and memories your family will keep forever.
          </p>
          
          <a 
            href="#"
            className="inline-block bg-brand-red text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-white transition-colors duration-300 rounded-none shadow-none"
          >
            Book Your Easter Session
          </a>
        </div>
      </section>

      {/* SECTION 2: EXPERIENCE */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto mb-20 lg:mb-24">
        <div className="text-brand-dark/80 text-xl md:text-2xl font-light leading-[1.9] space-y-10 text-center">
          <p>
            The same premium photography and magical atmosphere that makes our Christmas experience unforgettable now for Easter.
          </p>
          
          <div className="p-12 md:p-16 bg-white border border-brand-dark/10 rounded-none mt-12">
            <p className="font-heading text-2xl md:text-3xl text-brand-dark mb-4">Easter Packages</p>
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs">
              [PLACEHOLDER: Easter specific copy and packages to be provided by client]
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
