import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SantaSplit() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Centered Premium Header */}
        <div className="text-center mb-20 lg:mb-32 flex flex-col items-center">
          <span className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs mb-6">
            Choose Your Experience
          </span>
          <h2 className="font-bodoni text-5xl md:text-6xl lg:text-[5.5rem] text-[#113122] mb-8 tracking-tight leading-none">
            Our Magic
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg lg:text-xl font-light leading-relaxed">
            We are proud to offer two distinct, breathtaking Santa experiences. Select the one that perfectly fits your family's most cherished holiday traditions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 lg:gap-24">
          
          {/* Traditional Santa */}
          <div className="w-full md:w-1/2 flex flex-col group cursor-pointer">
            <Link href="/our-santas">
              <div className="w-full aspect-[4/5] overflow-hidden mb-10 bg-[#F9F7F4]">
                <img 
                  src="/images/traditional-santa.jpg" 
                  alt="Traditional Santa" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="font-bodoni text-4xl lg:text-5xl text-[#113122] mb-6">
                Traditional
              </h3>
              <p className="text-gray-500 font-light text-base lg:text-lg mb-8 max-w-md">
                The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
              </p>
              <Link href="/our-santas" className="inline-block border border-[#113122] text-[#113122] text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#113122] hover:text-white transition-colors">
                Discover Traditional
              </Link>
            </div>
          </div>

          {/* Black Santa */}
          <div className="w-full md:w-1/2 flex flex-col group cursor-pointer mt-12 md:mt-32">
            <Link href="/black-santa">
              <div className="w-full aspect-[4/5] overflow-hidden mb-10 bg-[#F9F7F4]">
                <img 
                  src="/images/black-santa.jpg" 
                  alt="Black Santa" 
                  className="w-full h-full object-cover object-[50%_15%] transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="font-bodoni text-4xl lg:text-5xl text-[#113122] mb-6">
                Black Santa
              </h3>
              <p className="text-gray-500 font-light text-base lg:text-lg mb-8 max-w-md">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
              </p>
              <Link href="/black-santa" className="inline-block border border-[#113122] text-[#113122] text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#113122] hover:text-white transition-colors">
                Discover Black Santa
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
