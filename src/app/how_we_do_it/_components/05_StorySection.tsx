"use client";

import Image from "next/image";

export default function StorySection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="mb-8 sm:mb-12 lg:mb-20">
          <h2
            className="text-[26px] sm:text-[34px] lg:text-[46px] font-bold text-[#111] mb-4 lg:mb-5 tracking-[-0.5px] lg:tracking-[-1px] leading-[1.1]"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Get to know us better
          </h2>
          <p
            className="text-[#555] max-w-[900px]"
            style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
          >
            Trusting a company and investing your hard-earned money is a quite challenging and an overwhelming process.
            In order to guide you in the process and make a better decision, we have explained each and every steps right from
            How MacAppStudio is created to our process. We look forward to work together and create wonderful products together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3
              className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Story of MacAppStudio
            </h3>
            <div className="text-[#444]">
              <p
                className="mb-4 lg:mb-5"
                style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
              >
                The foundation of MacAppStudio is the friendship between George and Suresh. MacAppStudio is founded based on trust and that is the core of our company culture till today. Our intention is to create end to end applications which are simple to use and which would transform lives of millions.
              </p>
              <p style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}>
                In the last 10 years, MacAppStudio has grown immensly in numbers, revenue and brand. We will continue to grow the same way as a family based on trust and relationship.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] mt-2 lg:mt-0">
            <div
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("qXwzj6k2UWU")}
            >
              <Image
                src="/assets/images/how_we_do_it/storiesposter01.jpg"
                alt="Story"
                width={1224}
                height={706}
                className="w-full h-auto object-cover block group-hover:scale-[1.02] transition-transform duration-700"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
