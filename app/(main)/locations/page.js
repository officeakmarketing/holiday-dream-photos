import Link from "next/link";

export const metadata = {
  title: 'Locations | Holiday Dream Photos',
  description: 'Find a Holiday Dream Photos location near you. We operate across multiple premium mall locations in the USA.',
};

// ----------------------------------------------------------------------
// DATA FETCH LAYER (Simulating Sanity CMS)
// ----------------------------------------------------------------------
const getLocations = async () => {
  return [
    {
      _id: "loc-1",
      name: "Edgewater Mall",
      address: "Biloxi, MS",
      imageUrl: "/images/mall1.jpg"
    },
    {
      _id: "loc-2",
      name: "Almeda Mall",
      address: "Houston, TX",
      imageUrl: "/images/mall2.jpg"
    },
    {
      _id: "loc-3",
      name: "Central Mall",
      address: "Texarkana, TX",
      imageUrl: "/images/mall1.jpg"
    },
    {
      _id: "loc-4",
      name: "Outlets at Little Rock",
      address: "Little Rock, AR",
      imageUrl: "/images/mall2.jpg"
    },
    {
      _id: "loc-5",
      name: "Omaha Mall",
      address: "Omaha, NB",
      imageUrl: "/images/mall1.jpg"
    },
    {
      _id: "loc-6",
      name: "Northtown Mall",
      address: "Blaine, MN",
      imageUrl: "/images/mall2.jpg"
    },
    {
      _id: "loc-7",
      name: "Clearview Mall",
      address: "Butler, PA",
      imageUrl: "/images/mall1.jpg"
    },
    {
      _id: "loc-8",
      name: "The Shoppes at Bel Air",
      address: "Mobile, AL",
      imageUrl: "/images/mall2.jpg"
    }
  ];
};

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <div className="bg-[#F9F7F4] min-h-screen">
      {/* Editorial Header */}
      <section className="pt-32 pb-10 px-4 max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-gray-400 font-semibold uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
          Find Us
        </p>
        <h1 className="font-bodoni text-6xl md:text-[5.5rem] text-[#113122] leading-none mb-8 tracking-tight">
          Our <span className="italic text-brand-red">Locations</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl leading-[1.8]">
          We operate across multiple premium mall locations in the USA. Find the magical set closest to you and reserve your time today.
        </p>
      </section>

      {/* Editorial Grid (Unboxed) */}
      <section className="pb-16 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {locations.map((loc) => (
            <div key={loc._id} className="flex flex-col group cursor-pointer">
              <Link href="/book-now">
                <div className="relative aspect-[4/5] w-full mb-8 bg-[#F9F7F4] overflow-hidden">
                  <img
                    src={loc.imageUrl}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex flex-col flex-1">
                <h3 className="font-bodoni text-3xl text-[#113122] mb-3">
                  {loc.name}
                </h3>
                <p className="text-gray-500 font-light text-base mb-8 flex-1">
                  {loc.address}
                </p>
                <Link 
                  href="/book-now" 
                  className="inline-block border-t border-[#113122] pt-4 text-[#113122] uppercase tracking-[0.2em] text-xs font-bold hover:text-brand-red transition-colors w-fit"
                >
                  Reserve Here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
