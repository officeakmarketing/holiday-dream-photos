import React from 'react';
import Image from 'next/image';

const PageHero = React.memo(({ 
  title, 
  subtitle, 
  description, 
  imageSrc, 
  imageAlt, 
  className = "",
  imagePosition = "object-center",
  overlayOpacity = "bg-black/60",
  titleClassName = "text-4xl sm:text-5xl md:text-7xl",
  imageOpacity = ""
}) => {
  return (
    <section className={`px-4 bg-black text-center relative overflow-hidden ${className}`}>
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 100vw"
          className={`object-cover scale-105 ${imagePosition} ${imageOpacity}`}
        />
        {/* Clean Transparent Black Overlay */}
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {subtitle && (
          <div className="inline-flex justify-center mb-5 md:mb-7">
            <span className="text-white font-bold uppercase tracking-[0.3em] text-[9px] md:text-[11px] px-4 py-1.5 bg-brand-red rounded-full">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className={`font-heading text-white leading-tight drop-shadow-xl ${titleClassName} ${description ? 'mb-6 md:mb-8' : ''}`}>
          {title}
        </h1>
        {description && (
          <p className="text-white/80 font-light text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto drop-shadow-md px-4">
            {description}
          </p>
        )}
      </div>
    </section>
  );
});

PageHero.displayName = 'PageHero';

export default PageHero;
