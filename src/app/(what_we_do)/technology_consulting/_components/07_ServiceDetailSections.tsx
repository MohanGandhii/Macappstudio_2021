import Image from "next/image";
import clsx from "clsx";
import GetProposalButton from "@/components/04_GetProposalButton/GetProposalButton";

const BULLETS = [
  { text: "Know your customers demand and their Real-Time Behavior", icon: "/assets/images/technology_Consulting/cus_insight_left_icon1.svg" },
  { text: "Identify the different categories of your Customers", icon: "/assets/images/technology_Consulting/cus_insight_left_icon2.svg" },
  { text: "Invest on Social Media Customer Engagement", icon: "/assets/images/technology_Consulting/cus_insight_left_icon3.svg" },
  { text: "Leverage Customer Service Interactions", icon: "/assets/images/technology_Consulting/cus_insight_left_icon4.svg" },
  { text: "Focus on Customers' Personal Tastes and Preferences", icon: "/assets/images/technology_Consulting/cus_insight_left_icon5.svg" },
  { text: "Build Comprehensive Contact Information", icon: "/assets/images/technology_Consulting/cus_insight_left_icon6.svg" },
];

export default function CustomerInsightSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-[13px] font-black uppercase tracking-[0.2em] text-[#444] mb-2">
            Customer Insight
          </h3>
          <h2 className="text-[28px] md:text-[34px] font-black text-[#2B2B2B] leading-[1.2] lg:leading-[38px] mb-4 tracking-tight max-w-3xl mx-auto">
            Maximize Customer Experience and satisfaction by diving into customers journey
          </h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] max-w-3xl mx-auto">
            Customers are at the core of any business. By prioritizing right customer insights and the right strategy to act on them, leaders can capture growth opportunities and solve complex business problems.
          </p>
        </div>

        {/* Content Row Split — image on right (reverse) */}
        <div className={clsx("flex flex-col lg:flex-row items-center gap-12 lg:gap-20", "lg:flex-row-reverse")}>
          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/technology_Consulting/cus_insight_image.jpg"
              alt="Customer Insight"
              width={600}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text & Bullets Column */}
          <div className="w-full lg:w-1/2 text-left">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#2B2B2B] mb-8 leading-snug">
              Understanding customers is the key to giving them good service which in turn results into strong customer relationships and new sales.
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
  );
}
