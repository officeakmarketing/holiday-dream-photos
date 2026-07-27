import Link from "next/link";
import { ArrowRight, Check, Clock, ShieldCheck, Sparkles, Camera, Heart } from "lucide-react";

export const metadata = {
  title: 'Our Santas | Holiday Dream Photos',
  description: 'Explore our Traditional and Black Santa photo experiences. Premium holiday photography for families.',
};

export default function OurSantasPage() {
  return (
    <div className="bg-[#F9F7F4] min-h-screen pb-32">
      
      {/* Calm & Professional Header */}
       <section className="relative pt-40 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <p className="text-brand-red font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
          The Magic of Choice
        </p>
        <h1 className="font-bodoni text-5xl md:text-7xl lg:text-[6rem] font-medium text-[#113122] leading-none mb-8">
          Two Extraordinary <br />
          <span className="italic text-brand-red">Experiences</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
          Choose the magical experience that best fits your family&apos;s holiday tradition. 
          We proudly offer two breathtaking, premium sets, each featuring an authentic, real-bearded Santa.
        </p>
      </section>

      {/* Traditional Santa Section - Editorial Layout */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Unconstrained Photography */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full aspect-[4/5] relative bg-[#F9F7F4]">
              <img 
                src="/images/traditional-santa.jpg" 
                alt="Traditional Santa Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Side: Elegant Typography */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              The Classic Experience
            </span>
            <h2 className="font-bodoni text-6xl lg:text-[6rem] text-[#113122] mb-10 leading-none tracking-tight">
              Traditional <br/>Santa
            </h2>
            <p className="text-gray-500 text-lg font-light leading-[1.8] mb-16 max-w-xl">
              Step into a beautifully decorated winter wonderland and create timeless memories. Enjoy a classic, heartwarming Christmas experience with rich reds and greens in a serene, unhurried environment.
            </p>

            {/* Pricing Details - No Boxes, Just Text & Lines */}
            <div className="mb-16 max-w-xl">
              <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                Signature Package
              </span>
              <div className="flex items-end gap-3 mb-10">
                <span className="text-5xl font-bodoni text-[#113122]">[Package Price]</span>
                <span className="text-gray-400 text-xs tracking-widest uppercase mb-2">Client Provided</span>
              </div>
              
              <ul className="flex flex-col">
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 1]
                </li>
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 2]
                </li>
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 3]
                </li>
                <li className="py-5 border-t border-b border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 4]
                </li>
              </ul>
            </div>

            <div>
              <Link 
                href="/book-now" 
                className="inline-block bg-[#113122] text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Reserve Traditional Experience
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Black Santa Section - Editorial Layout (Inverted) */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pb-32 lg:pb-48">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-32 items-center">
          
          {/* Right Side: Unconstrained Photography */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full aspect-[4/5] relative bg-[#F9F7F4]">
              <img 
                src="/images/black-santa.jpg" 
                alt="Black Santa Experience" 
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
          
          {/* Left Side: Elegant Typography */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              The Home of Representation
            </span>
            <h2 className="font-bodoni text-6xl lg:text-[6rem] text-[#113122] mb-10 leading-none tracking-tight">
              Black <br/>Santa
            </h2>
            <p className="text-gray-500 text-lg font-light leading-[1.8] mb-16 max-w-xl">
              Celebrate the magic of representation. The Home of the Black Santa offers a joyful, premium holiday photo experience with our authentic, real-bearded Black Santa in a breathtaking set.
            </p>

            {/* Pricing Details - No Boxes, Just Text & Lines */}
            <div className="mb-16 max-w-xl">
              <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                Heritage Package
              </span>
              <div className="flex items-end gap-3 mb-10">
                <span className="text-5xl font-bodoni text-[#113122]">[Package Price]</span>
                <span className="text-gray-400 text-xs tracking-widest uppercase mb-2">Client Provided</span>
              </div>
              
              <ul className="flex flex-col">
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 1]
                </li>
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 2]
                </li>
                <li className="py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 3]
                </li>
                <li className="py-5 border-t border-b border-gray-200 text-gray-500 font-light text-sm tracking-wide">
                  [Package Feature Overview 4]
                </li>
              </ul>
            </div>

            <div>
              <Link 
                href="/book-now" 
                className="inline-block bg-brand-red text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#a30d25] transition-colors"
              >
                Reserve Black Santa
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
