import Image from "next/image";

export default function FormulaSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FDF9EE]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-3/5">
            <h3 className="text-[24px] md:text-[30px] font-medium text-[#444] mb-1">
              MacAppStudio’s Innovation formula
            </h3>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#2B2B2B] mb-8 leading-tight tracking-tight">
              E<sup className="text-[20px] md:text-[28px] top-[-0.5em]">3</sup> = Explore + Experiment + Embrace
            </h2>
            <ul className="space-y-4 text-[16px] md:text-[17px] text-[#444]">
              <li>
                <strong className="text-[#2B2B2B]">Explore</strong> - Know customer pain points and explore wide range of opportunities
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Experiment</strong> - Test your hypothesis by experimenting and getting feedback
              </li>
              <li>
                <strong className="text-[#2B2B2B]">Embrace</strong> - Deliver out of box solutions and embrace the new normal
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <Image 
              src="/assets/images/R-D/macapp_formula.png" 
              alt="Formula Illustration" 
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
