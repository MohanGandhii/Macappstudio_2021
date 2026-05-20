import Image from "next/image";

export default function InterviewWithIntelSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="bg-[#FAFAFA] p-10 md:p-16 lg:p-20 flex flex-col items-start border border-[#F0F0F0]">
          <Image 
            src="/assets/images/who_we_are/intel_icon.svg" 
            alt="Intel Logo" 
            width={120} 
            height={80} 
            className="mb-8 w-[90px] md:w-[110px] h-auto object-contain filter grayscale brightness-0 opacity-90"
          />
          <h2 className="text-[26px] md:text-[32px] font-bold text-[#2B2B2B] mb-5 tracking-tight">
            Interview with Intel
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#444] leading-[1.8] mb-8 font-normal max-w-4xl">
            We are humbled and honored to get an opportunity to be interviewed by Intel. 
            We have won several awards from Intel and they are a milestone in MacAppStudio's 
            journey. Eager to know more? Check out the full motivational interview from the 
            Intel blog now.
          </p>
          <a 
            href="https://software.intel.com/content/www/us/en/develop/blogs/intel-black-belt-software-developers-suresh-george-from-childhood-friends-to.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[16px] font-bold text-[#2B2B2B] hover:text-blue-600 transition-colors"
          >
            Read Now <span className="text-[20px] leading-none mb-1">&rarr;</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl mt-20">
        <div className="h-px w-full bg-[#EAEAEA]"></div>
      </div>
    </section>
  );
}
