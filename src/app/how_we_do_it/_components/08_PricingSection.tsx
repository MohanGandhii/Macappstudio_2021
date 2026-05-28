"use client";

import Image from "next/image";

export default function PricingSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-[54%]">
            <h3
              className="text-[22px] sm:text-[26px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              Why our pricing is 10 times more costlier than other quotes?
            </h3>
            <p
              className="text-[#444]"
              style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}
            >
              There are several development companies in the market who charge<br className="hidden lg:block" />
              very minimum amount whereas our minimum project quotation is<br className="hidden lg:block" />
              100,000 USD. We would like to humbly acknowledge that, this<br className="hidden lg:block" />
              amount is not to secure MacAppStudio but to secure you. When you<br className="hidden lg:block" />
              are developing an application in any domain, this means you are<br className="hidden lg:block" />
              competing with the top players in that field who had already been<br className="hidden lg:block" />
              there for years and had invested billions to support that infrastructure.<br className="hidden lg:block" />
              In order to enter the market, sustain and compete with them we need<br className="hidden lg:block" />
              the resource, technology, security, scalability and a minimum budget<br className="hidden lg:block" />
              to support these. We are committed to provide great value to you and<br className="hidden lg:block" />
              hence don{"'"}t compromise in quality, great user experience, security.
            </p>
          </div>

          <div className="w-full lg:w-[46%] mt-2 lg:mt-0">
            <div
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("pBdEkzHqTd8")}
            >
              <Image
                src="/assets/images/how_we_do_it/storiesposter03.jpg"
                alt="Pricing"
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
