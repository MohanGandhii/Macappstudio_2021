import Image from "next/image";
import Link from "next/link";

export default function SpeedLearningBanner() {
  return (
    <section className="py-[60px] bg-[#E3F2FD]">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="flex flex-row items-center justify-start gap-8 md:gap-10">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/assets/images/technology_Consulting/speedlearning_logo.png"
              alt="Speed Learning"
              width={110}
              height={110}
              className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] object-contain rounded-[24px]"
            />
          </div>

          {/* Content block on the right */}
          <div className="text-left flex flex-col justify-center">
            <h2 className="text-[18px] md:text-[25px] font-medium text-[#2B2B2B] leading-tight md:leading-snug">
              See how Speed Learning App has increased their revenue by <strong className="font-bold">15x</strong>
              <br className="hidden md:inline" /> by partnering with us
            </h2>
            <Link
              href="/case-studies/speedlearning"
              className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-bold text-[#2B2B2B] hover:text-blue-700 transition-colors mt-3"
            >
              Read more <span className="text-[17px] leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
