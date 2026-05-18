export default function QuoteSection() {
  return (
    <section className="w-full bg-[#f3f3f3] py-[70px]">
      <div className="w-full text-center">

        {/* H3 */}
        <h3
          className="
            text-[34px]
            leading-[41px]
            font-medium
            tracking-[-1.57px]
            text-[#2b2b2b]
            pb-[10px]
            m-0
          "
          style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}
        >
          MacAppStudio is not a company.
        </h3>

        {/* H2 */}
        <h2
          className="
            text-[34px]
            leading-[41px]
            font-medium
            tracking-[-1.57px]
            text-[#2b2b2b]
            pb-[18px]
            m-0
          "
          style={{ fontFamily: "AvenirNext-SemiBold, sans-serif" }}
        >
          MacAppStudio is not built on bricks or using computers or with money.
        </h2>

        {/* H1 */}
        <h1
          className="
            text-[72px]
            leading-[78px]
            font-bold
            tracking-[-2px]
            text-[#222222]
            m-0
          "
          style={{ fontFamily: "CircularStd-Bold, sans-serif" }}
        >
          MacAppStudio is one big family.
        </h1>

      </div>
    </section>
  );
}