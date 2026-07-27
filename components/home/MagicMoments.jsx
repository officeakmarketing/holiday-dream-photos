import Image from "next/image";

export default function MagicMoments() {
  const images = [
    { 
      src: "https://images.pexels.com/photos/6212104/pexels-photo-6212104.jpeg", 
      alt: "Santa at mall", 
      span: "lg:col-span-2 lg:row-span-2",
      position: "object-top"
    },
    { 
      src: "https://images.unsplash.com/photo-1543893419-fcc585654853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FudGF8ZW58MHx8MHx8fDA%3D", 
      alt: "Santa adjusting his suit", 
      span: "lg:col-span-1 lg:row-span-1" 
    },
    { 
      src: "https://images.pexels.com/photos/3303615/pexels-photo-3303615.jpeg", 
      alt: "Magical Christmas tree", 
      span: "lg:col-span-1 lg:row-span-2" 
    },
    { 
      src: "https://images.unsplash.com/photo-1765092274438-feca2cfa7623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbnRhJTIwYXQlMjBtYWxsfGVufDB8fDB8fHww", 
      alt: "Santa experience", 
      span: "lg:col-span-1 lg:row-span-1" 
    }
  ];

  return (
    <section className="py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-brand-red font-semibold uppercase tracking-[0.2em] text-xs md:text-sm mb-4">
            Gallery
          </p>
          <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl font-medium text-[#113122] mb-6">
            Magical Moments
          </h2>
          <div className="w-12 h-[1px] bg-brand-red mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Glimpses of the joy, wonder, and unhurried magic that happens when families step into our premium Santa experiences.
          </p>
        </div>

        {/* Sophisticated 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] lg:auto-rows-[250px] gap-4 lg:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden group rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${img.span}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105 ${img.position || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-[#113122]/0 group-hover:bg-[#113122]/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
