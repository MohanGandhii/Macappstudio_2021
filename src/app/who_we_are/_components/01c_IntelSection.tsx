import Image from "next/image";

export default function IntelSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#2B2B2B] mb-4 tracking-tight">
          Intel BlackBelt Software Developers
        </h2>
        <p className="text-[16px] md:text-[18px] text-[#444] mb-12 md:mb-16 max-w-3xl mx-auto">
          Our Founders George and Suresh are two of the 10 Intel BlackBelts who are not Intel Employees.
        </p>
        
        <div className="flex justify-center">
          <div className="relative inline-block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <Image 
              src="/assets/images/who_we_are/frame.png" 
              alt="Intel BlackBelts Group Photo" 
              width={1000} 
              height={600} 
              className="w-full h-auto max-w-[950px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
