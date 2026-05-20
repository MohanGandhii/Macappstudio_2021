import Image from "next/image";

export default function InventingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-left mb-16">
          <h2 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-[#2B2B2B] mb-6 tracking-tight">
            Inventing What’s Next.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.8] max-w-full">
            MacAppStudio’s success is based on our ability to create new experiences for our users and systematically invest in research and innovation . We invest in a range of emerging technologies and breakthroughs, which we believe will create significant opportunities to deliver value to our customers and growth for the company. In this fast-growing world, exploring and experimenting disruptive technologies is the key to managing technology risk and hence we maintain our long-term commitment to research and development across a wide spectrum of technologies, tools, and platforms.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left large image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-[550px]">
              <Image 
                src="/assets/images/R-D/Inventing_poster_img1.jpg" 
                alt="Face scanning technology" 
                fill
                className="object-cover rounded-none" 
              />
            </div>
          </div>
          
          {/* Right stacked images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
            <div className="relative w-full h-[200px] md:h-[250px] lg:h-[calc(50%-16px)]">
              <Image 
                src="/assets/images/R-D/Inventing_poster_img2.jpg" 
                alt="VR technology" 
                fill
                className="object-cover rounded-none" 
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[250px] lg:h-[calc(50%-16px)]">
              <Image 
                src="/assets/images/R-D/Inventing_poster_img3.jpg" 
                alt="Robotics engineering" 
                fill
                className="object-cover rounded-none" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
