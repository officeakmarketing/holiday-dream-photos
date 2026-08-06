import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: 'The Home of the Black Santa | Holiday Dream Photos',
  description: 'A joyful, premium holiday photo experience built on the belief that every child deserves to see the magic of Christmas reflected in themselves.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getBlackSantaData = async () => {
  return {
    hero: {
      tagline: "Representation Matters",
      headline: "The Home of the Black Santa",
      description: "A joyful, premium holiday photo experience built on the belief that every child deserves to see the magic of Christmas reflected in themselves. Create lasting memories with our authentic, real-bearded Black Santa in a breathtaking winter wonderland setting.",
      imageUrl: "/images/nick-cannon-polaroid.png"
    },
    philosophy: {
      headline: "A Tradition of Joy",
      description: "We take pride in offering a dedicated space where the Black Santa experience is celebrated with the highest quality and care. From our meticulously crafted sets to our incredibly authentic Santas, every detail is designed to bring you the premium holiday portraits your family deserves."
    },
    packages: [
      {
        name: "Heritage Package",
        priceHint: "Client provided pricing",
        features: [
          "15 Minute Private Session",
          "All High-Res Digital Images",
          "Premium Print Credit Included",
          "Digital Christmas Card Template"
        ]
      }
    ]
  };
};

export default async function BlackSantaPage() {
  const data = await getBlackSantaData();

  return (
    <div className="bg-brand-light min-h-screen pb-32">
      
      {/* Editorial Hero Layout */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 lg:pt-32 pb-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
          
          {/* Right Side (visually left): Elegant Typography */}
          <div className="w-full lg:flex-[1.2] flex flex-col justify-center order-2 lg:order-1">
            <span className="text-gray-400 uppercase tracking-[0.3em] text-[10px] lg:text-xs font-semibold mb-4 block">
              {data.hero.tagline}
            </span>
            <h1 className="font-heading text-5xl lg:text-6xl 2xl:text-[5.5rem] text-brand-dark mb-6 leading-none tracking-tight">
              The Home of the <br/><span className="italic text-brand-red">Black Santa</span>
            </h1>
            <p className="text-gray-500 text-base lg:text-lg font-light leading-[1.6] mb-8 max-w-xl">
              {data.hero.description}
            </p>

            <div className="mb-12">
              <Link 
                href="/book-now" 
                className="inline-block bg-brand-red text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#a30d25] transition-colors shadow-lg hover:shadow-xl"
              >
                Reserve Black Santa
              </Link>
            </div>

            <div className="mb-0">
              <h2 className="font-heading text-2xl lg:text-3xl text-brand-dark mb-4">{data.philosophy.headline}</h2>
              <p className="text-gray-500 text-sm lg:text-base font-light leading-relaxed max-w-xl">
                {data.philosophy.description}
              </p>
            </div>
          </div>
          
          {/* Left Side (visually right): Unconstrained Photography */}
          <div className="w-full lg:flex-[0.8] order-1 lg:order-2">
            <div className="w-full aspect-[4/5] relative bg-white">
              <Image 
                src={data.hero.imageUrl}
                alt="Black Santa Experience" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_15%]"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Package Section - Editorial Text Style */}
      {/* GLOBAL RULE: Package sections stay hidden until client confirms package names, inclusions, and pricing. */}
      <section className="hidden max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 border-t border-gray-200">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Blank space for alignment */}
          <div className="hidden lg:block lg:w-[55%]"></div>
          
          {/* Pricing Details - No Boxes, Just Text & Lines */}
          <div className="w-full lg:w-[45%]">
            {data.packages.map((pkg, i) => (
              <div key={i} className="mb-16 max-w-xl">
                <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                  {pkg.name}
                </span>
                <div className="flex items-end gap-3 mb-10">
                  <span className="text-5xl font-heading text-brand-dark">[Package Price]</span>
                  <span className="text-gray-400 text-xs tracking-widest uppercase mb-2">{pkg.priceHint}</span>
                </div>
                
                <ul className="flex flex-col">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`py-5 border-t border-gray-200 text-gray-500 font-light text-sm tracking-wide ${j === pkg.features.length - 1 ? 'border-b' : ''}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
