"use client";

import Image from "next/image";

export default function ProcessSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3
              className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              What is our development process?
            </h3>
            <p
              className="text-[#444]"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
            >
              Our development process is made up of a sequence of upto 12 stages. We have created the first ever factory model for software development with focus on improving development velocity, software quality and process reliability. Using our factory model, customers can shrink Software development process from months and years to just weeks. This gives a complete transparent process enabling better planning and inter-team coordination.
            </p>
          </div>

          <div className="w-full lg:w-[50%] mt-2 lg:mt-0">
            <div
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("829Bx42zaQU")}
            >
              <Image
                src="/assets/images/how_we_do_it/storiesposter02.jpg"
                alt="Process"
                width={1224}
                height={706}
                className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-700"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
