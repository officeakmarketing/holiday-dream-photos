import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function SantaSplit() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Premium Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
            <span className="text-[#D4AF37] font-semibold uppercase tracking-[0.3em] text-xs">
              Choose Your Experience
            </span>
            <Star className="w-4 h-4 text-[#D4AF37] fill-current" />
          </div>
          <h2 className="font-bodoni text-5xl md:text-6xl lg:text-7xl font-medium text-[#113122] mb-6 tracking-tight">
            Our Magic
          </h2>
          <div className="w-16 h-[2px] bg-brand-red mb-8"></div>
          <p className="text-gray-500 max-w-2xl text-lg lg:text-xl font-light leading-relaxed">
            We are proud to offer two distinct, breathtaking Santa experiences. Select the one that perfectly fits your family&apos;s most cherished holiday traditions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Traditional Santa */}
          <div className="w-full md:w-1/2 flex flex-col group">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-[30px] mb-8">
              <img 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="px-2">
              <h3 className="font-bodoni text-3xl lg:text-4xl font-medium text-[#113122] mb-4">
                Traditional
              </h3>
              <p className="text-gray-500 font-light text-base lg:text-lg mb-6 max-w-md">
                The classic, heartwarming Christmas experience featuring our authentic, real-bearded Traditional Santa Claus in a beautifully decorated premium setting.
              </p>
              <Link href="/our-santas" className="inline-flex items-center gap-3 text-brand-red text-xs font-bold uppercase tracking-widest hover:text-[#113122] transition-colors">
                Discover <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Black Santa */}
          <div className="w-full md:w-1/2 flex flex-col group">
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-[30px] mb-8">
              <img 
                src="/images/black-santa.jpg" 
                alt="Black Santa" 
                className="w-full h-full object-cover object-[50%_15%] transition-transform duration-[2000ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="px-2">
              <h3 className="font-bodoni text-3xl lg:text-4xl font-medium text-[#113122] mb-4">
                Black Santa
              </h3>
              <p className="text-gray-500 font-light text-base lg:text-lg mb-6 max-w-md">
                Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa.
              </p>
              <Link href="/black-santa" className="inline-flex items-center gap-3 text-brand-red text-xs font-bold uppercase tracking-widest hover:text-[#113122] transition-colors">
                Discover <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
