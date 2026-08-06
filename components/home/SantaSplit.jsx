

import SantaCard from "./SantaCard";

export default function SantaSplit() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* The Split Container: Stacked on mobile, side-by-side on tablet/desktop */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[60vh] lg:h-[90vh] md:min-h-[500px]">
        
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
    </section>
  );
}

