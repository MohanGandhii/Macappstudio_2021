import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { caseStudies } from "../_data/caseStudies";
import { bannerBgColors, DEFAULT_BANNER_BG, slugOverrides, bannerImageStyles } from "../_data/caseStudiesConfig";
import { AppScreenCarousel } from "../_components/03_CaseStudyDetailComponents";
import WhatToKnowMore from "../_components/WhatToKnowMore";
import { CASE_STUDIES } from "../_components/02_AppsGrid";

const getCaseStudyData = (slug: string) => {
  const normalized = slug.toLowerCase();
  const lookupKey = slugOverrides[normalized] || normalized;
  return caseStudies[lookupKey];
};

interface PageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();
  const match = CASE_STUDIES.find(study => study.link.split("/").pop()?.toLowerCase() === slug);
  const displayTitle = match ? match.title : (slug.charAt(0).toUpperCase() + slug.slice(1));
  return {
    title: displayTitle,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const data = getCaseStudyData(slug);

  if (!data) {
    notFound();
  }

  const heroBgColor = bannerBgColors[slug.toLowerCase()] || DEFAULT_BANNER_BG;
  const imgStyle = bannerImageStyles[slug.toLowerCase()] || { topClass: "md:top-[30px] lg:top-[40px]" };

  return (
    <main className="bg-white min-h-screen font-sans overflow-x-hidden">

      {/* ── 1. HERO BANNER ── matches legacy exactly ── */}
      {/*
        LAYOUT NOTE:
        The section is full-viewport-width (like legacy .bannersec).
        The left content sits in a max-w-[1170px] centered container.
        The phone mockup is absolutely positioned relative to the SECTION
        (not the container) so right-10 / top-[20px] / w-[40%] are all
        viewport-relative — exactly matching the legacy CSS:
          #myGallery img { position:absolute; right:40px; top:20px; width:40% }
      */}
      <section 
        className={`relative ${heroBgColor} mb-0`} 
        id="bannersection"
        style={{ overflow: imgStyle.sectionOverflow || "visible", zIndex: 30 }}
      >

        {/* LEFT CONTENT ─ inside the 1170px centred container */}
        <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8 relative">
          <div className={`flex flex-col md:flex-row items-stretch ${imgStyle.containerMinHeight || "min-h-[500px]"}`}>

            {/* Left Content – Keeps clear of the absolutely-positioned right image */}
            <div className={`w-full md:w-[60%] lg:w-[58%] z-10 ${imgStyle.pyClass || "py-12"} flex flex-col justify-center`}>

              {/* Logo */}
              {data.logo && (
                <Image
                  src={data.logo}
                  alt={`${data.title || slug} Logo`}
                  width={218}
                  height={68}
                  className={`object-contain ${imgStyle.logoMbClass || "mb-[20px]"} ${imgStyle.logoWidthClass || "w-[218px]"} h-auto`}
                  priority
                />
              )}

              {/* Headline */}
              <h2
                className={`text-[28px] md:text-[32px] md:leading-[38px] lg:text-[38px] lg:leading-[44px] ${imgStyle.titleFontWeight || "font-bold"} ${imgStyle.titleTextColor || "text-[#111]"} m-0 ${imgStyle.titlePbClass || "pb-[38px]"} ${imgStyle.titleTracking || "tracking-tight"} max-w-[95%]`}
                style={{ fontFamily: imgStyle.titleFontFamily || "CircularStd-Bold, sans-serif" }}
                dangerouslySetInnerHTML={{
                  __html: slug.toLowerCase() === "atg"
                    ? data.title.replace(" to enjoy ", " to enjoy <br class='hidden md:block' />")
                    : slug.toLowerCase() === "znap"
                      ? data.title.replace(" digital ", " digital <br class='hidden md:block' />")
                      : slug.toLowerCase() === "dabb"
                        ? data.title.replace(" for real ", " for <br class='hidden md:block' />real ")
                        : data.title
                }}
              />

              {/* Mobile-only banner image */}
              <div className="w-full md:hidden mt-2 mb-8 flex justify-center">
                <Image
                  src={data.bannerImg}
                  alt={`${data.title || slug} Apps`}
                  width={530}
                  height={680}
                  className="w-[75%] sm:w-[55%] md:w-[50%] max-w-[450px] h-auto object-contain"
                  priority
                />
              </div>

              {/* Stats list */}
              {data.stats && data.stats.length > 0 && (
                <ul className={`list-none w-full m-0 p-0 ${imgStyle.statsMbClass || "mb-[30px]"}`}>
                  {data.stats.map((stat: any, index: number) => (
                    <li key={index} className={`flex items-center ${imgStyle.statPbClass || "pb-[15px]"}`}>
                      <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <Image
                          src={stat.icon}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain w-[32px] h-auto"
                        />
                      </div>
                      <p
                        className={`text-[16px] md:text-[20px] md:leading-[24px] text-[#444] font-medium tracking-tight pl-[15px] m-0 [&_b]:font-bold [&_b]:text-[#111] ${imgStyle.statTextClass || ""}`}
                        style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                        dangerouslySetInnerHTML={{ __html: stat.html }}
                      />
                    </li>
                  ))}
                </ul>
              )}

              {/* Platforms developed box */}
              {data.platforms && data.platforms.length > 0 && (
                <div className="w-full">
                  <p
                    className="text-[15px] font-semibold text-[#555] m-0 pb-[10px]"
                    style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                  >
                    Platforms developed :
                  </p>
                  <ul className="inline-flex items-center list-none m-0 p-0 bg-white">
                    {data.platforms.map((platform: any, index: number) => (
                      <li
                        key={index}
                        className={`inline-flex items-center py-[5px] px-[10px] relative ${index < data.platforms.length - 1
                          ? "after:content-[''] after:absolute after:right-0 after:top-[10%] after:h-[80%] after:w-[1px] after:bg-[#bbb]"
                          : ""
                          }`}
                      >
                        <Image
                          src={platform.icon}
                          alt={platform.name}
                          width={25}
                          height={25}
                          className="w-[25px] h-auto object-contain"
                        />
                        <span
                          className="text-[15px] text-[#2B2B2B] font-semibold pl-2"
                          style={{ fontFamily: "AvenirNext-Regular, sans-serif" }}
                        >
                          {platform.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Invisible spacer column – stops left text from flowing under the image */}
            <div className="hidden md:block md:w-[40%] lg:w-[42%]" />
          </div>
        </div>

        {/* ── DESKTOP MOCKUP IMAGE ──
            Absolutely positioned relative to the SECTION (full screen viewport width)
            so that it is flush to browser right edge, matching legacy behavior.
        */}
        <div 
          className={`hidden md:block absolute ${imgStyle.rightClass || "right-[80px] lg:right-[120px] xl:right-[150px]"} ${imgStyle.topClass || ""} ${imgStyle.widthClass || "w-[35%] lg:w-[37%] xl:w-[39%] max-w-[440px]"}`}
          style={{ 
            zIndex: imgStyle.imageZIndex !== undefined ? imgStyle.imageZIndex : 40, 
            overflow: "visible",
            ...imgStyle.styleOverrides 
          }}
        >
          <Image
            src={data.bannerImg}
            alt={`${data.title || slug} Apps`}
            width={760}
            height={682}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Spacer – lets the absolutely-positioned phone overflow into the white area */}
      <div className={`${imgStyle.spacerClass || "h-0 md:h-[100px] lg:h-[140px]"} bg-white`} />

      {/* ── 2. OVERVIEW ── */}
      {data.overview && (
        <SplitSection title="Overview" content={data.overview} bgColor="bg-white" />
      )}

      {/* ── 3. PROJECT APPS MOSAIC ── */}
      {data.projectAppsImg && (
        <section className="bg-[#f4f6f9] py-[40px] md:py-[50px]" id="project_apps_section">
          <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="w-full text-center">
              <Image
                src={data.projectAppsImg}
                alt="Project Apps"
                width={1170}
                height={550}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── 4. PROBLEM FACED & GOAL ── */}
      {data.problem && (
        <SplitSection title="Problem Faced" content={data.problem} bgColor="bg-white" />
      )}
      {data.goal && (
        <SplitSection title="Goal" content={data.goal} bgColor="bg-white" />
      )}

      {/* ── 5. SOLUTION ── */}
      {data.solutionHtml && (
        <section className="py-[40px] md:py-[50px] bg-[#fbfbfb]">
          <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="w-full md:w-1/3">
                <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                  Solution
                </h2>
              </div>
              <div className="w-full md:w-2/3">
                <div
                  className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
                  dangerouslySetInnerHTML={{ __html: data.solutionHtml }}
                />
              </div>
            </div>

            {/* App Screen Carousel */}
            {data.appScreens && data.appScreens.length > 0 && (
              <AppScreenCarousel screens={data.appScreens} />
            )}
          </div>
        </section>
      )}

      {/* ── 6. TECHNOLOGY & CURRENT STATUS ── */}
      {(data.technology?.length > 0 || data.currentStatus) && (
        <section className="py-[40px] md:py-[50px] bg-[#fbfbfb] border-t border-gray-100">
          <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8">

            {/* Technology */}
            {data.technology && data.technology.length > 0 && (
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-8 md:pb-12 border-b border-gray-200">
                <div className="w-full md:w-1/3">
                  <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                    Technology
                  </h2>
                </div>
                <div className="w-full md:w-2/3 flex flex-wrap items-start gap-x-6 gap-y-6">
                  {data.technology.map((tech: any, index: number) => (
                    <div key={index} className="flex flex-col items-center gap-2 min-w-[80px]">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 border border-gray-100">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={40}
                          height={40}
                          className="object-contain h-[40px] w-auto"
                        />
                      </div>
                      <span className="text-[13px] font-bold text-gray-500 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Current Status */}
            {data.currentStatus && (
              <div className={`flex flex-col md:flex-row gap-4 md:gap-8 ${data.technology?.length > 0 ? "pt-8 md:pt-12" : ""}`}>
                <div className="w-full md:w-1/3">
                  <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
                    Current Status
                  </h2>
                </div>
                <div className="w-full md:w-2/3">
                  <div
                    className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
                    dangerouslySetInnerHTML={{ __html: data.currentStatus }}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── What to Know More ── */}
      <WhatToKnowMore currentSlug={slug} />
    </main>
  );
}

/* ─── LOCAL HELPERS ─────────────────────────────────────────────── */

function SplitSection({
  title,
  content,
  bgColor,
}: {
  title: string;
  content: string;
  bgColor: string;
}) {
  return (
    <section className={`py-[40px] border-b border-gray-100 ${bgColor}`}>
      <div className="w-full max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-[24px] md:text-[32px] md:leading-[35px] font-medium text-[#2B2B2B] text-left capitalize">
              {title}
            </h2>
          </div>
          <div className="w-full md:w-2/3">
            <div
              className="text-[16px] md:text-[18px] md:leading-[34px] text-[#333333] [&>p]:mb-4 [&>p:last-child]:mb-0 [&_b]:font-bold [&_b]:text-[#2B2B2B]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
