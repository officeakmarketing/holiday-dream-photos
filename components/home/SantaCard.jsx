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
    <div className="relative w-full md:w-1/2 flex flex-col md:block h-auto md:h-full group overflow-hidden bg-black">

      {/* Image Container (Fixed height on mobile, full absolute cover on desktop) */}
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-full md:absolute md:inset-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 ${imagePosition}`}
        />
        {/* Desktop-only Gradient Overlay */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700 z-10"></div>
      </div>

      {/* Content Container (Sits below image on mobile, absolute overlay on desktop) */}
      <div className="relative z-10 w-full flex flex-col items-center text-center pt-6 pb-10 px-4 sm:px-8 md:absolute md:inset-0 md:justify-end md:pb-10 lg:pb-20 md:pt-0">
        <div className="max-w-xl transition-all duration-700 transform md:translate-y-4 md:group-hover:translate-y-0 flex flex-col items-center">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-6 text-brand-light drop-shadow-lg whitespace-nowrap">
            {titlePart1} {titlePart2}
          </h3>
          <p className="text-brand-light/80 md:text-brand-light/90 font-light text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-10 max-w-sm md:max-w-none">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-brand-red text-white px-8 sm:px-10 py-4 sm:py-5 rounded-none text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-colors duration-300 shadow-none w-full sm:w-auto"
          >
            {buttonText}
            <ArrowRight size={14} className="sm:w-[14px] sm:h-[14px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
