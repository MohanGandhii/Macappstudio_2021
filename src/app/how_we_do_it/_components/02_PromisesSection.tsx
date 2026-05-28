import Image from "next/image";

const PROMISES = [
  { icon: "/assets/images/how_we_do_it/diamond.svg", text1: "You will get a world", text2: "class product" },
  { icon: "/assets/images/how_we_do_it/star.svg", text1: "You will have a", text2: "delightful experience" },
  { icon: "/assets/images/how_we_do_it/rocket.svg", text1: "We will surpass your", text2: "expectation" },
];

export default function PromisesSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 pb-16 sm:pb-24 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2
            className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-[#222] tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Our 3 promises to you
          </h2>
          <div className="w-16 sm:w-20 h-[1px] bg-[#111]/20 mx-auto mt-4 sm:mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 lg:gap-24">
          {PROMISES.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 sm:mb-10 w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                <Image src={promise.icon} alt="" width={56} height={56} className="mix-blend-multiply w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p
                className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-[#222] leading-[1.3] tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {promise.text1} <br />
                <span className="text-[#333] font-medium" style={{ fontFamily: "AvenirNext-Medium, sans-serif", fontSize: "18px", lineHeight: "30px" }}>
                  {promise.text2}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
