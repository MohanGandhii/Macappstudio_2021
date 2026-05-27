import Image from "next/image";
import clsx from "clsx";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";
import SpeedLearningBanner from "./09_SpeedLearningBanner";

const BULLETS = [
  { text: "Monitoring Continuous data improvement to yield better performance", icon: "/assets/images/technology_Consulting/market_sales_left_icon1.svg" },
  { text: "Analyzing changing patterns in competitor and consumer behavior", icon: "/assets/images/technology_Consulting/market_sales_left_icon2.svg" },
  { text: "Suggesting capability building or process changes in your organization", icon: "/assets/images/technology_Consulting/market_sales_left_icon3.svg" },
  { text: "Prioritizing KPI and assessing new benchmarks to stay ahead in the market", icon: "/assets/images/technology_Consulting/market_sales_left_icon4.svg" },
];

export default function MarketingSalesSection() {
  return (
    <>
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#444] mb-2">
              Marketing &amp; Sales
            </h3>
            <h2 className="text-[28px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-4 tracking-tight max-w-3xl mx-auto">
              Breaking down the barriers and guiding clients grow faster than the market
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] max-w-3xl mx-auto">
              Unlock continuous marketing transformation and increase your revenue by 10x
            </p>
          </div>

          {/* Content Row Split */}
          <div className={clsx("flex flex-col lg:flex-row items-center gap-12 lg:gap-20", "lg:flex-row")}>
            {/* Image Column */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/assets/images/technology_Consulting/market_sales_image.jpg"
                alt="Marketing & Sales"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Text & Bullets Column */}
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-[22px] md:text-[24px] font-bold text-[#2B2B2B] mb-8 leading-snug">
                We provide Dynamic Solutions to navigate you through the shifting market by
              </h3>

              <ul className="space-y-5 mb-8">
                {BULLETS.map((item, i) => (
                  <li key={i} className="flex items-center gap-5">
                    <Image
                      src={item.icon}
                      alt=""
                      width={25}
                      height={25}
                      className="flex-shrink-0 object-contain"
                    />
                    <p className="text-[16px] text-[#444] font-medium leading-tight">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>

              <GetProposalButton className="btn consulted_btn bg-black text-white px-10 py-3.5 text-[17px] font-semibold hover:bg-gray-900 transition-colors rounded-none w-[300px] h-[60px] flex items-center justify-center mt-8" />
            </div>
          </div>

        </div>
      </section>

      <SpeedLearningBanner />
    </>
  );
}
