export default function QuoteSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-10 sm:py-14 lg:py-[70px]">
      <div className="w-full text-center px-4 sm:px-6">

        {/* H3 */}
        <h3
          className="text-[18px] sm:text-[24px] lg:text-[34px] font-medium tracking-[-0.5px] lg:tracking-[-1.57px] text-[#2b2b2b] pb-[8px] lg:pb-[10px] m-0 leading-snug"
          style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}
        >
          MacAppStudio is not a company.
        </h3>

        {/* H2 */}
        <h2
          className="text-[16px] sm:text-[20px] lg:text-[34px] font-medium tracking-[-0.5px] lg:tracking-[-1.57px] text-[#2b2b2b] pb-[12px] lg:pb-[18px] m-0 leading-snug"
          style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}
        >
          MacAppStudio is not built on bricks or using computers or with money.
        </h2>

        {/* H1 */}
        <h1
          className="text-[32px] sm:text-[48px] lg:text-[72px] font-bold tracking-[-1px] lg:tracking-[-2px] text-[#222222] m-0 leading-tight"
          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
        >
          MacAppStudio is one big family.
        </h1>

      </div>
    </section>
  );
}