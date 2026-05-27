import Image from "next/image";

export default function PlatformSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden" id="platform_section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto mb-10 md:mb-16">
          <h2 className="text-[28px] sm:text-3xl md:text-[40px] lg:text-[48px] xl:text-[52px] font-black text-[#1a1e2e] mb-6 leading-tight tracking-tight text-left lg:whitespace-nowrap">
            Your dream to reality, In any platform !
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium text-left">
            Having built over <span className="text-[#1a1e2e] font-black">250+ apps</span> in almost every single platform and devices, we can bring <br className="hidden md:inline" />
            your dream to reality
          </p>
        </div>
        
        <div className="relative flex justify-center mt-12 md:mt-20">
          <div className="relative w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl">
            <Image
              src="/assets/images/index/platform.png"
              alt="Platforms"
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
