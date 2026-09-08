import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function SantaCard({
  imageSrc,
  altText,
  titlePart1,
  titlePart2,
  description,
  buttonText,
  buttonHref = "/book-now",
  imagePosition = "object-center",
}) {
  return (
    <div className="rounded-[1.25rem] overflow-hidden shadow-2xl transition-all duration-500 group relative bg-brand-dark flex flex-col justify-end w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] border border-black/10">

      {/* Image Container (Always absolute for cinematic overlay) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 ${imagePosition}`}
        />
        {/* Responsive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent md:bg-black/40 transition-colors duration-500 md:group-hover:bg-black/50 z-10 pointer-events-none"></div>
      </div>

      {/* Content Container (Sits on top of the image) */}
      <div className="relative z-20 w-full flex flex-col items-center text-center p-6 sm:p-8 lg:p-12 justify-end h-full">
        <div className="max-w-xl transition-all duration-700 transform md:translate-y-4 md:group-hover:translate-y-0 flex flex-col items-center w-full mt-auto">
          
          {/* Subtle Accent Line */}
          <div className="w-8 lg:w-12 h-[1px] bg-white/30 mb-3 sm:mb-4 md:mb-6"></div>

          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4 text-white drop-shadow-lg leading-none">
            {titlePart1} <span className="block sm:inline">{titlePart2}</span>
          </h3>
          
          <p className="text-white/90 font-light text-[11px] sm:text-sm lg:text-base leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-md line-clamp-3 sm:line-clamp-none">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 bg-[#c71e32] text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-md lg:rounded-lg text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#c71e32] transition-colors duration-300 shadow-lg w-full sm:w-auto shrink-0"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
