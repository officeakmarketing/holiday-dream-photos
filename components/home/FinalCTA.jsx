import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function FinalCTA({
  headline = <>Give your family a <span className="italic text-brand-red">Christmas memory</span> that lasts forever.</>,
  body = "Premium Santa photography. Two magical experiences. 8 locations nationwide. This is not a standard mall Santa. This is Holiday Dream Photos.",
  ctaText = "Book Your Session",
  ctaLink = "/book-now"
}) {
  return (
    <section className="py-10 sm:py-12 md:py-16 relative overflow-hidden flex items-center justify-center text-center md:text-left">
      {/* High-End CSS Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#050a08] overflow-hidden">
        {/* Central glowing radial spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1000px] aspect-square bg-[radial-gradient(circle_at_center,_rgba(17,49,34,0.8)_0%,_rgba(10,29,20,0.5)_40%,_rgba(5,10,8,1)_70%)] opacity-90 pointer-events-none" />
        {/* Ambient corner glows for depth */}
        <div className="absolute -top-[30%] -left-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(200,16,46,0.1)_0%,_transparent_70%)] opacity-30 pointer-events-none blur-3xl" />

        {/* Subtle grid pattern overlay for high-end texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwek0zOSAzOUgxVjFoMzh6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-16">

        <div className="flex-1 max-w-2xl">
          <FadeIn
            y={30}
            duration={0.8}
            delay={0.1}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brand-light tracking-tight leading-[1.25] md:leading-[1.1] mb-3 sm:mb-4 drop-shadow-xl max-w-sm sm:max-w-none mx-auto md:mx-0"
            as="h2"
          >
            {headline}
          </FadeIn>

          <FadeIn
            y={30}
            duration={0.8}
            delay={0.2}
            className="text-brand-light/80 font-light text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow-md"
            as="p"
          >
            {body}
          </FadeIn>
        </div>

        <FadeIn
          y={0}
          duration={0.6}
          delay={0.3}
          style={{ scale: 0.9 }}
          className="w-full md:w-auto shrink-0 flex flex-col items-center md:items-end gap-3"
        >
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 md:gap-4 bg-brand-red text-white px-5 sm:px-6 py-4 md:px-12 md:py-6 rounded-md md:rounded-sm text-[11px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] hover:bg-white hover:text-brand-red transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(200,16,46,0.4)] group w-full sm:w-auto text-center"
          >
            {ctaText}
            <ArrowRight size={16} className="w-4 h-4 md:w-[18px] md:h-[18px] group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0" />
          </Link>
          <p className="text-white/50 text-[9px] sm:text-[10px] md:text-xs font-light italic tracking-wide uppercase text-center md:text-right px-4">
            Slots fill up fast. Reserve yours before it is too late.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
