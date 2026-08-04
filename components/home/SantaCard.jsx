import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LottieSnow from "../animations/LottieSnow";
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
    <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[450px] md:h-[550px] lg:h-full group overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105 ${imagePosition}`}
        />
      </div>

      {/* Gradient: Smooth bottom-up fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent transition-opacity duration-700 z-10"></div>

      {/* Mobile-only light black overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 lg:bg-transparent z-10"></div>

      {/* Lottie Snow Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen hidden lg:block">
        <LottieSnow />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 sm:px-8 flex flex-col justify-end pb-8 sm:pb-12 lg:pb-20 items-center text-center">
        <div className="max-w-xl transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-light drop-shadow-lg">
            {titlePart1} <br className="lg:hidden" /> {titlePart2}
          </h3>
          <p className="text-brand-light/90 font-light text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-10 line-clamp-3 sm:line-clamp-none">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-brand-red text-white px-6 sm:px-10 py-3 sm:py-5 rounded-none text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-red transition-colors duration-300 shadow-none"
          >
            {buttonText}
            <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
