import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: 'Our Story | Holiday Dream Photos',
  description: 'We started Holiday Dream Photos because families deserve better.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#fcfaf9] min-h-screen font-sans">
      <section className="px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto pt-28 lg:pt-32 mb-12 lg:mb-16">
        
        <div className="mb-12">
          <p className="text-brand-red uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6 text-center">
            Our Story
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.2] tracking-tight max-w-5xl text-center mx-auto mb-10">
            We started Holiday Dream Photos because families deserve <span className="text-brand-red italic">better.</span>
          </h1>
        </div>

        <div className="w-full border-t border-brand-dark/10 pt-10">
          <div className="columns-1 md:columns-2 gap-12 text-brand-dark/80 text-lg font-light leading-[1.9]">
            <p className="mb-6">
              <span className="float-left text-6xl font-heading text-brand-red pr-3 leading-[0.8] mt-2">T</span>
              he Santa experience most families were getting was not good enough. Rushed sessions. Generic setups. Photos that belonged in the bin. And for families who wanted to see themselves reflected in the magic, the options were almost zero. We built Holiday Dream Photos to fix both of those things.
            </p>
            <p className="mb-6">
              We created a team of exceptional Santas who understand that this moment matters deeply. We invested in professional photography that does justice to what families actually feel. We built a warm, festive atmosphere that makes children genuinely believe.
            </p>
            <p className="mb-6">
              And we created the premium Black Santa experience that families across America had been waiting for. Today we operate across 8 locations<span className="hidden"> and have served [PLACEHOLDER]</span>.
            </p>
            <p className="font-bold text-brand-dark mb-6 break-inside-avoid">
              The standard we hold every part of this experience to has never changed because families deserve the real thing. Every single time.
            </p>
          </div>
        </div>

      </section>

      {/* SECTION 3: FINAL CTA */}
      <FinalCTA 
        headline="Come and experience the magic for yourself."
        body="Reserve your spot today. Sessions fill up quickly."
        ctaText="Book Your Session Now"
      />
    </div>
  );
}

