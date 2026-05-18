"use client";

import Image from "next/image";

export default function ModelsSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-12 lg:py-20 border-y border-gray-100/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3 
              className="text-[24px] xs:text-[28px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              What are the two models of software development?
            </h3>
            <div className="text-[14.5px] lg:text-[16px] text-[#444] leading-[1.6]">
              <p className="mb-4 lg:mb-5" style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                At MacAppStudio we follow two models of software developments depending on our clients needs.
              </p>
              
              <div className="mb-5">
                <h4 
                  className="text-[17px] lg:text-[18.5px] font-bold text-[#111] mb-2 lg:mb-2"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  Fixed Bid Project
                </h4>
                <p style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                  This method is used when you have a clear scope of the project, needed requirement or the reference application to get inspired before the start of the project. This will help us define a fixed cost and fixed time estimate to complete the project.
                </p>
              </div>

              <div>
                <h4 
                  className="text-[17px] lg:text-[18.5px] font-bold text-[#111] mb-2 lg:mb-2"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  Time and Material Project
                </h4>
                <p style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                  This method is used when your project needs to evolve over a period of time or when the project requirement is huge or the requirement is based on a new evolving domain. Because of this evolving nature we will not be able to capture the cost and time needed. This will be billed monthly based on the effort from various members on a standard rate.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[50%] mt-4 lg:mt-0">
            <div 
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("dW15KCOnUC0")}
            >
              <Image 
                src="/assets/images/how_we_do_it/storiesposter05.jpg" 
                alt="Models" 
                width={1224} 
                height={706} 
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-700"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
