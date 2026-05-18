import Image from "next/image";

const LOGOS = [
  { id: 1, src: "/assets/images/how_we_do_it/pro_desc_img1.svg", name: "Amazon" },
  { id: 2, src: "/assets/images/how_we_do_it/pro_desc_img2.svg", name: "Netflix" },
  { id: 3, src: "/assets/images/how_we_do_it/pro_desc_img3.svg", name: "Airbnb" },
  { id: 4, src: "/assets/images/how_we_do_it/pro_desc_img4.svg", name: "Uber" },
  { id: 5, src: "/assets/images/how_we_do_it/pro_desc_img5.svg", name: "Spotify" },
  { id: 6, src: "/assets/images/how_we_do_it/pro_desc_img6.svg", name: "Swiggy" },
  { id: 7, src: "/assets/images/how_we_do_it/pro_desc_img7.svg", name: "Facebook" },
];

export default function WorldClassSection() {
  return (
    <section className="bg-[#fff9f1] py-16 lg:py-24 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Character Column */}
          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <Image 
                src="/assets/images/how_we_do_it/pro_desc_img.png" 
                alt="Building world class apps" 
                width={500} 
                height={600} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-[65%]">
            <h2 
              className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#222] leading-[1.15] lg:leading-[1.1] mb-8 lg:mb-12 tracking-tight"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Building world-class applications<br className="hidden md:block" /> 
              with par to...
            </h2>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-8 md:gap-x-12 lg:gap-x-16">
              {LOGOS.map((logo) => (
                <div key={logo.id} className="h-7 md:h-10 flex items-center justify-center">
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={140} 
                    height={40} 
                    className="h-full w-auto object-contain brightness-0 opacity-80" 
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
