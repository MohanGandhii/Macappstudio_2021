import Image from "next/image";

export default function InnovationPartnerSection() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-center border-b border-[#e1e1e1] pb-16 md:pb-24">
        <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-[#2B2B2B] mb-12 md:mb-16 max-w-4xl mx-auto leading-tight tracking-tight">
          Hundreds of companies are considering <br className="hidden md:block" /> MacAppStudio as their Innovation partner
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-24">
          <Image 
            src="/assets/images/R-D/dabb_logo.png" 
            alt="Dabb" 
            width={160} 
            height={70} 
            className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
          />
          <Image 
            src="/assets/images/R-D/howdy_logo.png" 
            alt="Howdy" 
            width={160} 
            height={70} 
            className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
          />
          <Image 
            src="/assets/images/R-D/intel_logo.svg" 
            alt="Intel" 
            width={160} 
            height={70} 
            className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
          />
          <Image 
            src="/assets/images/R-D/jio_logo.svg" 
            alt="Jio" 
            width={160} 
            height={70} 
            className="h-10 md:h-14 w-auto object-contain transition-transform hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}
