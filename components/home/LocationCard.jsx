import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

export default function LocationCard({ loc }) {
  return (
    <div className="bg-[#fdfbf9] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-brand-dark/10 hover:-translate-y-1">
      {/* Image Area */}
      <div className="h-48 md:h-56 bg-brand-light relative shrink-0 overflow-hidden">
        <Image 
          src={loc.image} 
          alt={`${loc.name} location`} 
          fill 
          sizes="(max-width: 1200px) 50vw, 33vw" 
          className="object-cover transition-transform duration-700 group-hover:scale-105" 
        />
      </div>

      {/* Body Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1 bg-transparent relative">
        
        {/* City & Name */}
        <div className="mb-6">
          <span className="text-brand-red font-bold uppercase tracking-[0.1em] text-[10px] block mb-2">
            {loc.city}
          </span>
          <h3 className="font-heading text-2xl md:text-3xl text-brand-dark leading-tight group-hover:text-brand-red transition-colors duration-300">
            {loc.name}
          </h3>
        </div>
        
        {/* Details with Icons */}
        <div className="flex flex-col gap-3 mb-8 flex-1">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-red/5 flex items-center justify-center shrink-0 mt-0.5 border border-brand-red/10 group-hover:bg-brand-red/10 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-brand-red" />
            </div>
            <span className="text-brand-dark/80 text-sm leading-snug font-medium pt-1">{loc.address}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-dark/5 flex items-center justify-center shrink-0 border border-brand-dark/10 group-hover:bg-brand-dark/10 transition-colors duration-300">
              <CalendarDays className="w-4 h-4 text-brand-dark/70" />
            </div>
            <span className="text-brand-dark/80 text-sm font-semibold pt-1">{loc.dates}</span>
          </div>

          <div className="mt-3 pt-4 border-t border-brand-dark/10">
            <span className="text-brand-dark/60 text-sm">
              Featuring <span className="font-bold text-brand-dark">{loc.experiences?.join(" & ")}</span>
            </span>
          </div>
        </div>
        
        {/* Button */}
        <div className="mt-auto">
          <button className="w-full flex items-center justify-center bg-brand-dark text-white px-6 py-4 rounded-lg text-xs font-bold uppercase tracking-[0.1em] transition-colors border border-transparent cursor-not-allowed opacity-60 hover:opacity-100">
            <span>Schedule Coming Soon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
