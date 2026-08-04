import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Santa on Wheels | Holiday Dream Photos',
  description: 'Experience the magic of Santa delivered directly to your neighborhood or event.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function SantaOnWheelsPage() {
  return (
    <div className="bg-brand-light min-h-screen pb-32">
      
      {/* Editorial Hero Layout */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-32 lg:pt-48 pb-24 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Typography Side */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            <span className="text-gray-400 uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
              Magic Delivered
            </span>
            <h1 className="font-heading text-6xl lg:text-[6rem] text-brand-dark mb-10 leading-none tracking-tight">
              Santa <br/><span className="italic text-brand-red">on Wheels</span>
            </h1>
            <p className="text-gray-500 text-lg font-light leading-[1.8] mb-12 max-w-xl">
              We are bringing the premium Holiday Dream Photos experience directly to your neighborhood, school, or community center. Our fully customized, magical mobile set ensures an unforgettable visit from Santa without the mall crowds.
            </p>

            <div>
              <Link 
                href="/contact" 
                className="inline-block bg-brand-dark text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </div>
          
          {/* Photography Side */}
          <div className="w-full lg:w-[45%]">
            <div className="w-full aspect-[4/5] relative bg-white">
              <Image 
                src="/images/traditional-santa.jpg"
                alt="Santa on Wheels Experience" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Info Banner */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-24">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl text-brand-dark mb-6">Currently in Development</h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Our team is meticulously building this custom mobile experience. Please contact us if you would like to be notified when Santa on Wheels is ready to roll for the holiday season.
          </p>
        </div>
      </section>

    </div>
  );
}
