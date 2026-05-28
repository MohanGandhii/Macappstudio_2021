import Image from "next/image";

const LOGOS = [
  { id: 1, src: "/assets/images/how_we_do_it/pro_desc_img1.svg", name: "Amazon" },
  { id: 2, src: "/assets/images/how_we_do_it/pro_desc_img2.svg", name: "Netflix" },
  { id: 3, src: "/assets/images/how_we_do_it/pro_desc_img3.svg", name: "Airbnb" },
  { id: 4, src: "/assets/images/how_we_do_it/pro_desc_img5.svg", name: "Uber" },
  { id: 5, src: "/assets/images/how_we_do_it/pro_desc_img6.svg", name: "Spotify" },
  { id: 6, src: "/assets/images/how_we_do_it/pro_desc_img7.svg", name: "Swiggy" },
  { id: 7, src: "/assets/images/how_we_do_it/pro_desc_img8.svg", name: "Facebook" },
];

export default function WorldClassSection() {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="bg-[#fff9f1] py-10 px-6 sm:py-14 sm:px-12 lg:py-16 lg:px-12 w-full rounded-none">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            
            {/* Character Column */}
            <div className="w-full lg:w-[28%] flex justify-center lg:justify-end">
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
            <div className="w-full lg:w-[72%]">
              <h2 
                className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[46px] font-bold text-[#222] leading-[1.15] lg:leading-[1.1] mb-8 lg:mb-10 tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                Building world-class applications<br className="hidden md:block" /> 
                with par to...
              </h2>

              {/* Logos Rows */}
              <div className="flex flex-col gap-y-6 lg:gap-y-8">
                {/* Row 1 */}
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-12">
                  {LOGOS.slice(0, 3).map((logo) => (
                    <div key={logo.id} className="h-8 md:h-11 flex items-center justify-center">
                      <Image 
                        src={logo.src} 
                        alt={logo.name} 
                        width={140} 
                        height={40} 
                        className={`h-full w-auto object-contain brightness-0 opacity-100 ${(logo.name === "Spotify" || logo.name === "Swiggy") ? "scale-[1.15]" : ""}`}
                      />
                    </div>
                  ))}
                </div>
                {/* Row 2 */}
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-12">
                  {LOGOS.slice(3).map((logo) => (
                    <div key={logo.id} className="h-8 md:h-11 flex items-center justify-center">
                      <Image 
                        src={logo.src} 
                        alt={logo.name} 
                        width={140} 
                        height={40} 
                        className={`h-full w-auto object-contain brightness-0 opacity-100 ${(logo.name === "Spotify" || logo.name === "Swiggy") ? "scale-[1.15]" : ""}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
