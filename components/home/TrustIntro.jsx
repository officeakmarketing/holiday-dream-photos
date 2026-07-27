import Image from "next/image";

export default function TrustIntro() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/background3.jpg"
          alt="Magical Holiday Background"
          fill
          className="object-cover"
        />
        {/* Heavy rich overlay for text legibility */}
        <div className="absolute inset-0 bg-[#113122]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
          The Holiday Dream Promise
        </p>
        <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-brand-light mb-8">
          We Only Use <span className="italic text-brand-red">Real</span> Bearded Santas
        </h2>
        <div className="w-16 h-[2px] bg-brand-red mx-auto mb-10 rounded-full"></div>
        <p className="text-brand-light/90 leading-relaxed text-lg md:text-xl font-light max-w-3xl mx-auto">
          At Holiday Dream Photos, we believe the magic of Christmas lies in the authentic details. That&apos;s why every single one of our Santas whether you choose our Traditional or Black Santa experience is a true professional with a real, glorious beard. Skip the fake suits and crowded lines, and step into a premium, magical holiday experience designed to create memories that will last a lifetime.
        </p>
      </div>
    </section>
  );
}
