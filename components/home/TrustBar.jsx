

import { Star, MapPin, Sparkles, CheckCircle, Heart } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-brand-red py-4 lg:py-5 z-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-5 lg:flex lg:flex-row items-start lg:items-center justify-between lg:justify-center w-full gap-0 sm:gap-2 lg:gap-10 px-1 sm:px-0">
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-1 lg:gap-3 w-full lg:w-auto min-w-0 px-0.5">
            <Star className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 mx-auto lg:mx-0 mb-1 lg:mb-0" fill="currentColor" />
            <span className="text-[6px] sm:text-[8px] lg:text-xs font-bold uppercase tracking-tighter lg:tracking-widest text-white whitespace-normal lg:whitespace-nowrap leading-[1.1] break-words w-full min-w-0">Premium Photo</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-1 lg:gap-3 w-full lg:w-auto min-w-0 px-0.5">
            <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 mx-auto lg:mx-0 mb-1 lg:mb-0" />
            <span className="text-[6px] sm:text-[8px] lg:text-xs font-bold uppercase tracking-tighter lg:tracking-widest text-white whitespace-normal lg:whitespace-nowrap leading-[1.1] break-words w-full min-w-0">9 Locations</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-1 lg:gap-3 w-full lg:w-auto min-w-0 px-0.5">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 mx-auto lg:mx-0 mb-1 lg:mb-0" />
            <span className="text-[8px] lg:text-xs font-bold uppercase tracking-tighter lg:tracking-widest text-white whitespace-normal lg:whitespace-nowrap leading-[1.1] break-words w-full min-w-0">Traditional & Black Santas</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-1 lg:gap-3 w-full lg:w-auto min-w-0 px-0.5">
            <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 mx-auto lg:mx-0 mb-1 lg:mb-0" />
            <span className="text-[8px] lg:text-xs font-bold uppercase tracking-tighter lg:tracking-widest text-white whitespace-normal lg:whitespace-nowrap leading-[1.1] break-words w-full min-w-0">Instant Book</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-1 lg:gap-3 w-full lg:w-auto min-w-0 px-0.5">
            <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-white shrink-0 mx-auto lg:mx-0 mb-1 lg:mb-0" fill="currentColor" />
            <span className="text-[8px] lg:text-xs font-bold uppercase tracking-tighter lg:tracking-widest text-white whitespace-normal lg:whitespace-nowrap leading-[1.1] break-words w-full min-w-0">Lasting Memories</span>
          </div>

        </div>
      </div>
    </div>
  );
}
