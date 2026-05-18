"use client";

import Image from "next/image";

export default function PaymentSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-12 lg:py-20 border-y border-gray-100/80 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="w-full lg:w-[50%]">
            <h3
              className="text-[24px] xs:text-[28px] lg:text-[32px] font-bold text-[#111] mb-4 tracking-[-0.5px] lg:tracking-[-0.8px] leading-[1.2]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              What are the payment milestones in a project?
            </h3>
            <div className="text-[14.5px] lg:text-[16px] text-[#444] leading-[1.6]">
              <p style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}>
                We have designed the most flexible payment methods, so that you feel safe and secure while we ensure the value we provide during each release meets your expectation. The payment is equally divided into five milestones where you are requested to pay 20% during each milestone. This ensures that you feel confident and pay as you go. Currently we don't accept revenue sharing or equity based payment since we might not understand the industry insights. We ensure you get a great value and a worl-class product which worth the amount you pay for.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[50%] mt-4 lg:mt-0">
            <div
              className="relative overflow-hidden cursor-pointer w-full rounded-md group shadow-lg"
              onClick={() => setVideoModal("hlmX6oikVyM")}
            >
              <Image
                src="/assets/images/how_we_do_it/storiesposter04.jpg"
                alt="Payment"
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
