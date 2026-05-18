import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden" id="world_map_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[72px] font-black text-[#1a1e2e] mb-6 leading-tight tracking-tight text-left">
            World-wide footprint
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium text-left">
            Our clients are spread across the globe and we are committed to provide support and services to all our clients worldwide.
          </p>
        </div>
        
        <div className="relative flex justify-center mt-10 md:mt-20">
          <div className="relative w-full max-w-7xl">
            <Image
              src="/assets/images/index/worldmap.png"
              alt="World Map Footprint"
              width={1600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
