

import SantaCard from "./SantaCard";

export default function SantaSplit() {
  return (
    <section className="relative w-full bg-brand-light py-16 md:py-24 overflow-hidden border-t border-brand-dark/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 flex-1 min-h-0">
        
        {/* Traditional Santa */}
        <SantaCard 
          imageSrc="/images/traditional-santa.jpg"
          altText="Traditional Santa"
          badgeText="The Classic"
          titlePart1="Traditional"
          titlePart2="Santa"
          description="The classic Christmas magic your family knows and loves, delivered at the highest standard. Warm, festive, and filled with the kind of wonder that makes children's eyes light up."
          buttonText="Book Traditional Santa"
        />
        
        {/* Black Santa */}
        <SantaCard 
          imageSrc="/images/nick-cannon-clean.png"
          altText="Black Santa"
          titlePart1="Black"
          titlePart2="Santa"
          description="Representation matters. Christmas magic belongs to every family. The same premium photography and enchanting atmosphere with a Santa who looks like your family."
          buttonText="Book Black Santa"
          imagePosition="object-[50%_15%]"
        />

        </div>
      </div>
    </section>
  );
}

