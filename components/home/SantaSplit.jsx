import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SantaSplit() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 lg:mb-24 border-b border-gray-200 pb-12">
          <div className="max-w-3xl">
            <span className="text-brand-red font-semibold uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Choose Your Experience
            </span>
            <h2 className="font-bodoni text-6xl md:text-[7rem] text-[#113122] tracking-tighter leading-[0.9]">
              Our <span className="italic text-brand-red">Magic</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed mt-8 lg:mt-0 text-left lg:text-right">
            We are proud to offer two distinct, breathtaking Santa experiences. Select the one that perfectly fits your family's most cherished holiday traditions.
          </p>
        </div>

        {/* Dynamic Expanding Split Panels */}
        <div className="flex flex-col md:flex-row h-[550px] lg:h-[600px] w-full gap-4 lg:gap-6 pb-16">
          
          {/* Traditional Santa */}
          <Link 
            href="/our-santas" 
            className="relative flex-1 group overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.4] bg-[#113122]"
          >
            <img 
              src="/images/traditional-santa.jpg" 
              alt="Traditional Santa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 p-8 lg:p-14 w-full text-white">
              <span className="text-white/60 font-medium uppercase tracking-[0.4em] text-[10px] mb-6 block group-hover:text-brand-red transition-colors duration-500">
                The Classic
              </span>
              <h3 className="font-bodoni text-5xl lg:text-[5rem] mb-6 text-white leading-none tracking-tight">
                Traditional
              </h3>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-light text-sm lg:text-base leading-relaxed max-w-sm mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 w-fit group-hover:border-brand-red transition-colors duration-500">
                Explore Traditional 
                <ArrowRight size={16} className="group-hover:translate-x-3 group-hover:text-brand-red transition-all duration-500" />
              </div>
            </div>
          </Link>
          
          {/* Black Santa */}
          <Link 
            href="/black-santa" 
            className="relative flex-1 group overflow-hidden transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.4] bg-[#113122]"
          >
            <img 
              src="/images/black-santa.jpg" 
              alt="Black Santa"
              className="absolute inset-0 w-full h-full object-cover object-[50%_15%] transition-transform duration-[3000ms] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
            
            <div className="absolute bottom-0 left-0 p-8 lg:p-14 w-full text-white">
              <span className="text-white/60 font-medium uppercase tracking-[0.4em] text-[10px] mb-6 block group-hover:text-brand-red transition-colors duration-500">
                The Culture
              </span>
              <h3 className="font-bodoni text-5xl lg:text-[5rem] mb-6 text-white leading-none tracking-tight">
                Black Santa
              </h3>
              
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="overflow-hidden">
                  <p className="text-white/80 font-light text-sm lg:text-base leading-relaxed max-w-sm mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-2 w-fit group-hover:border-brand-red transition-colors duration-500">
                Explore Black Santa 
                <ArrowRight size={16} className="group-hover:translate-x-3 group-hover:text-brand-red transition-all duration-500" />
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
