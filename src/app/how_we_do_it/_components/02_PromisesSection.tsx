import Image from "next/image";

const PROMISES = [
  { icon: "/assets/images/how_we_do_it/diamond.svg", text1: "You will get a world", text2: "class product" },
  { icon: "/assets/images/how_we_do_it/star.svg", text1: "You will have a", text2: "delightful experience" },
  { icon: "/assets/images/how_we_do_it/rocket.svg", text1: "We will surpass your", text2: "expectation" },
];

export default function PromisesSection() {
  return (
    <section className="w-full bg-white py-20 pb-28">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-20">
          <h2 
            className="text-[48px] font-bold text-[#222] tracking-tight"
            style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
          >
            Our 3 promises to you
          </h2>
          <div className="w-20 h-[1px] bg-[#111]/20 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {PROMISES.map((promise, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-10 w-24 h-24 flex items-center justify-center">
                <Image src={promise.icon} alt="" width={64} height={64} className="mix-blend-multiply" />
              </div>
              <p 
                className="text-[28px] font-bold text-[#222] leading-[1.3] tracking-tight"
                style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
              >
                {promise.text1} <br /> 
                <span className="text-[#333] font-medium" style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}>
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
