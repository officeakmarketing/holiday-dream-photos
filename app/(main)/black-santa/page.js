import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      imageUrl: "/images/black-santa.jpg"
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
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 lg:pt-48 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Right Side (visually left): Elegant Typography */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1">
            <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              {data.hero.tagline}
            </span>
            <h1 className="font-heading text-6xl lg:text-[6rem] text-brand-dark mb-10 leading-none tracking-tight">
              The Home of the <br/><span className="italic text-brand-red">Black Santa</span>
            </h1>
            <p className="text-gray-500 text-lg font-light leading-[1.8] mb-16 max-w-xl">
              {data.hero.description}
            </p>

            <div className="mb-16">
              <h2 className="font-heading text-3xl text-brand-dark mb-6">{data.philosophy.headline}</h2>
              <p className="text-gray-500 font-light leading-relaxed max-w-xl">
                {data.philosophy.description}
              </p>
            </div>

            <div>
              <Link 
                href="/book-now" 
                className="inline-block bg-brand-red text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#a30d25] transition-colors"
              >
                Reserve Black Santa
              </Link>
            </div>
          </div>
          
          {/* Left Side (visually right): Unconstrained Photography */}
          <div className="w-full lg:w-[45%] order-1 lg:order-2">
            <div className="w-full aspect-[4/5] relative bg-white">
              <img 
                src={data.hero.imageUrl}
                alt="Black Santa Experience" 
                className="w-full h-full object-cover object-[50%_15%]"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Package Section - Editorial Text Style */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-24 border-t border-gray-200">
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
