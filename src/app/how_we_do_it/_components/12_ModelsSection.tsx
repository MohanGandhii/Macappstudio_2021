"use client";

import Image from "next/image";

export default function ModelsSection({ setVideoModal }: { setVideoModal: (id: string | null) => void }) {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">

        {/* ── TOP: Two-column row ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mb-1 lg:mb-2">

          {/* LEFT: Heading + intro + Fixed Bid */}
          <div className="w-full lg:w-[54%]">
            <h3
              className="text-[22px] sm:text-[26px] lg:text-[30px] font-bold text-[#111] mb-4 leading-[1.25] tracking-[-0.4px]"
              style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
            >
              What are the two models of software development?
            </h3>

            <div className="text-[#444]">
              <p className="mb-5" style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}>
                At MacAppStudio we follow two models of software developments<br />
                depending on our clients needs.
              </p>

              {/* Fixed Bid */}
              <div>
                <h4
                  className="text-[15px] sm:text-[16px] lg:text-[17px] font-bold text-[#111] mb-1.5"
                  style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
                >
                  Fixed Bid Project
                </h4>
                <p style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}>
                  This method is used when you have a clear scope of the project,<br />
                  needed requirement or the reference application to get inspired<br />
                  before the start of the project. This will help us define a fixed cost and<br />
                  fixed time estimate to complete the project.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Video Thumbnail */}
          <div className="w-full lg:w-[46%] mt-2 lg:mt-0">
            <div
              className="relative overflow-hidden cursor-pointer w-full rounded-lg group shadow-md"
              onClick={() => setVideoModal("dW15KCOnUC0")}
              role="button"
              aria-label="Watch video about two models of software development"
            >
              <Image
                src="/assets/images/how_we_do_it/storiesposter05.jpg"
                alt="What are the two models of software development?"
                width={1224}
                height={706}
                className="w-full h-auto object-cover block group-hover:scale-[1.03] transition-transform duration-700"
                quality={100}
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Time and Material — full width ── */}
        <div className="w-full text-[#444]">
          <h4
            className="text-[15.5px] sm:text-[16.5px] lg:text-[17.5px] font-bold text-[#111] mb-1.5"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Time and Material Project
          </h4>
          <p style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}>
            {"This method is used when your project needs to evolve over a period of time or when the project requirement is huge or the requirement is based on a new evolving domain. Because of this evolving nature we will not be able to capture the cost and time needed. This will be billed monthly based on the effort from various members on a standard rate."}
          </p>
        </div>

      </div>
    </section>
  );
}
