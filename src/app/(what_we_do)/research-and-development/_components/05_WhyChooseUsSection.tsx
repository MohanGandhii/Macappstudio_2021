import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-[55%] text-left pr-0 lg:pr-8">
            <div className="mb-10">
              <h2 className="text-[28px] md:text-[34px] font-bold text-[#2B2B2B] mb-4 leading-[1.2] tracking-tight">
                Why they choose MacAppStudio as Innovation Partner ?
              </h2>
              <p className="text-[16px] text-[#444] leading-[1.7]">
                MacAppStudio is a firm where <strong className="font-bold text-[#2B2B2B]">innovation is a way of life.</strong><br/>
                We create apps which integrate with cutting edge technologies to change the way people live.
              </p>
            </div>
            <div>
              <h2 className="text-[24px] md:text-[28px] lg:text-[30px] font-bold text-[#2B2B2B] mb-4 leading-tight tracking-tight">
                MacAppStudio itself is an experimentation!
              </h2>
              <p className="text-[16px] text-[#444] leading-[1.7] mb-4">
                We are a company where we don’t settle for minimum. We deeply analyze and experiment how we do our daily tasks right from brewing a good coffee, delivering a unique proposal, our way of no resume policy and to creating meaningful products. Because of this quality of researching and exploring new solutions, MacAppStudio has grown this far.
              </p>
              <p className="text-[16px] text-[#444] leading-[1.7]">
                Research and Development is about <strong className="font-bold text-[#2B2B2B]">bringing dreams to reality</strong> and we have done it already for over <strong className="font-bold text-[#2B2B2B]">120 apps</strong> in almost every single platform and device available.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <Image 
              src="/assets/images/R-D/innovation_partner.png" 
              alt="Innovation Partner" 
              width={500} 
              height={500} 
              className="w-full max-w-[450px] h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
