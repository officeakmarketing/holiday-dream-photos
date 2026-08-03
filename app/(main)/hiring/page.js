import Link from "next/link";

export const metadata = {
  title: 'Join Our Team | Holiday Dream Photos',
  description: 'Join the Holiday Dream Photos team as a real-bearded Santa, elf, or set manager.',
};

export default function HiringPage() {
  return (
    <div className="bg-brand-light min-h-screen flex items-center justify-center">
      
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full py-32 lg:py-48 text-center">
        
        <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
          Careers
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-brand-dark mb-10 leading-none tracking-tight">
          Join the <br/><span className="italic text-brand-red">Team</span>
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl font-light leading-[1.8] max-w-2xl mx-auto mb-16">
          We are always looking for magical individuals to join our growing family. Whether you are an authentic, real-bearded Santa, a joyful elf, or a meticulous set manager, we would love to hear from you.
        </p>
        
        {/* External Link to Hiring Platform */}
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border border-brand-dark text-brand-dark px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-colors"
        >
          View Open Positions
        </a>
        <p className="text-xs text-gray-400 mt-6 uppercase tracking-widest">
          Link to external hiring platform
        </p>

      </section>

    </div>
  );
}
